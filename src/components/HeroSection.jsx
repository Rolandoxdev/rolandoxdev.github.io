import { useEffect, useMemo, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import ReactTypingEffect from "react-typing-effect";
import heroBackground from "../assets/images/profileRolandoOrellana.webp";

const HeroSection = () => {
  const [showButton, setShowButton] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const { t } = useTranslation();
  const animatedWords = useMemo(
    () => [
      t("hero.title.creative"),
      t("hero.title.innovative"),
      t("hero.title.passionate"),
    ],
    [t]
  );

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const updateMotionPreference = (event) =>
      setPrefersReducedMotion(event.matches);

    motionPreference.addEventListener("change", updateMotionPreference);
    return () =>
      motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY <= 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        color: "text.primary",
        px: { xs: 4, md: 30, lg: 50 },
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      <Box
        className="hero-visual"
        aria-hidden="true"
        sx={{ position: "absolute", inset: 0, zIndex: -1, pointerEvents: "none" }}
      >
        <Box className="hero-aurora" />
        <Box
          component="img"
          className="hero-background-image"
          src={heroBackground}
          alt=""
          aria-hidden="true"
          width={1600}
          height={893}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </Box>

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h6"
          sx={{
            letterSpacing: 7,
            color: "white",
            mb: 2,
            textAlign: "left",
            fontSize: { xs: "0.8rem", md: "1.25rem", lg: "1.5rem" },
          }}
        >
          {t("hero.name").toUpperCase()}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Typography
            variant="h1"
            color="white"
            sx={{
              fontWeight: "bold",
              mr: 2,
              fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
            }}
          >
            {t("hero.title.developer")}
          </Typography>
          <Box sx={{ borderBottom: "2px solid white", width: "20%" }} />
        </Box>
        <Box>
          <Typography
            component="span"
            variant="h1"
            color="#6E6E6E"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "4rem", lg: "5rem" },
              letterSpacing: "1rem",
            }}
          >
            +
          </Typography>
          <Typography
            component="span"
            variant="h1"
            color="#00DA94"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
            }}
          >
            {prefersReducedMotion ? (
              animatedWords[0]
            ) : (
              <ReactTypingEffect
                text={animatedWords}
                speed={60}
                eraseSpeed={50}
                eraseDelay={1500}
                typingDelay={300}
                displayTextRenderer={(text, textIndex) => (
                  <span
                    className={`hero-dynamic-word${
                      text === animatedWords[textIndex]
                        ? " hero-dynamic-word--complete"
                        : ""
                    }`}
                  >
                    {text || "\u00a0"}
                  </span>
                )}
              />
            )}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              mt: 4,
              color: "rgba(230, 230, 230, 0.8)",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            {t("hero.description")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 16,
          }}
        >
          <Box
            sx={{
              opacity: showButton ? 1 : 0,
              transition: "opacity 0.75s ease-in-out",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="small"
              sx={{
                borderRadius: "50px",
                px: 4,
              }}
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Box />
              <Box>
                <ExpandMoreIcon
                  className="scroll-cue-icon"
                  sx={{
                    ml: 1,
                    animation: "bounce 2s infinite",
                  }}
                />
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
