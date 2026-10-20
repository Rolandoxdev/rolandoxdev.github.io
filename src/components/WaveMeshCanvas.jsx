import { useEffect, useRef } from "react";

const WaveMeshCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const target = canvas?.closest("section");
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !target || !context) return undefined;

    const motionPreference =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    let reducedMotion = motionPreference?.matches ?? false;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let animationFrame = 0;
    let isVisible = true;
    let isPageVisible = !document.hidden;
    let elapsed = 0;
    const pointer = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      strength: 0,
      targetStrength: 0,
    };

    const draw = (time) => {
      if (!width || !height) return;
      context.clearRect(0, 0, width, height);

      const spacing = width < 600 ? 32 : 36;
      const groups = Array.from({ length: 7 }, () => []);
      const influenceRadius = Math.min(240, width * 0.24);

      for (let y = spacing / 2; y < height + spacing; y += spacing) {
        for (let x = spacing / 2; x < width + spacing; x += spacing) {
          const baseWave =
            Math.sin(x * 0.008 + time * 0.9) * 10 +
            Math.cos(y * 0.009 - time * 0.72) * 8 +
            Math.sin((x + y) * 0.004 + time * 0.55) * 5;
          const deltaX = x - pointer.x;
          const deltaY = y - pointer.y;
          const distance = Math.hypot(deltaX, deltaY);
          const falloff = Math.max(0, 1 - distance / influenceRadius);
          const displacement =
            Math.sin(distance * 0.035 - time * 1.8) *
            falloff *
            falloff *
            pointer.strength *
            24;
          const directionX = distance ? deltaX / distance : 0;
          const directionY = distance ? deltaY / distance : 0;
          const depth = (baseWave + 23) / 46;
          const drawX = x + directionX * displacement * 0.6;
          const drawY =
            y + baseWave + directionY * displacement + falloff * pointer.strength * -5;
          const brightness = Math.min(0.82, 0.13 + depth * 0.34 + falloff * 0.22);
          const group = Math.min(6, Math.floor(brightness * 8));
          const radius = 0.8 + depth * 0.65 + falloff * pointer.strength * 0.55;

          groups[group].push([drawX, drawY, radius]);
        }
      }

      groups.forEach((points, index) => {
        if (!points.length) return;
        context.beginPath();
        points.forEach(([x, y, radius]) => {
          context.moveTo(x + radius, y);
          context.arc(x, y, radius, 0, Math.PI * 2);
        });
        context.fillStyle = `rgba(139, 255, 222, ${0.12 + index * 0.095})`;
        context.fill();
      });
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      draw(elapsed);
    };

    const stop = () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    };

    const animate = (timestamp) => {
      animationFrame = 0;
      if (reducedMotion || !isVisible || !isPageVisible) return;

      elapsed = timestamp / 1000;
      pointer.x += (pointer.targetX - pointer.x) * 0.085;
      pointer.y += (pointer.targetY - pointer.y) * 0.085;
      pointer.strength += (pointer.targetStrength - pointer.strength) * 0.085;
      draw(elapsed);
      animationFrame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (reducedMotion) {
        stop();
        pointer.strength = 0;
        draw(0);
        return;
      }

      if (isVisible && isPageVisible && !animationFrame) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const updatePointer = (event) => {
      if (reducedMotion) return;
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      const bounds = canvas.getBoundingClientRect();
      pointer.targetX =
        ((event.clientX - bounds.left) / bounds.width) * width;
      pointer.targetY =
        ((event.clientY - bounds.top) / bounds.height) * height;
      pointer.targetStrength = 1;
    };

    const clearPointer = () => {
      pointer.targetStrength = 0;
    };

    const updatePageVisibility = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible) start();
      else stop();
    };
    const updateMotionPreference = (event) => {
      reducedMotion = event.matches;
      if (reducedMotion) {
        pointer.targetStrength = 0;
        pointer.strength = 0;
        stop();
        draw(0);
      } else {
        start();
      }
    };

    const intersectionObserver = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
          isVisible = entry.isIntersecting;
          if (isVisible) start();
          else stop();
        })
      : null;
    const resizeObserver = "ResizeObserver" in window
      ? new ResizeObserver(resize)
      : null;

    resizeObserver?.observe(target);
    intersectionObserver?.observe(target);
    target.addEventListener("pointermove", updatePointer, { passive: true });
    target.addEventListener("pointerleave", clearPointer, { passive: true });
    document.addEventListener("visibilitychange", updatePageVisibility);
    window.addEventListener("resize", resize, { passive: true });
    motionPreference?.addEventListener("change", updateMotionPreference);
    resize();
    start();

    return () => {
      stop();
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      target.removeEventListener("pointermove", updatePointer);
      target.removeEventListener("pointerleave", clearPointer);
      document.removeEventListener("visibilitychange", updatePageVisibility);
      window.removeEventListener("resize", resize);
      motionPreference?.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-wave-canvas" aria-hidden="true" />;
};

export default WaveMeshCanvas;
