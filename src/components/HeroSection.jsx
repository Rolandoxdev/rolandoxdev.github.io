import { useState, useEffect, useRef } from "react";
import { Typography, Box, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import ReactTypingEffect from "react-typing-effect";
import GlitchVideo from "../assets/videos/glitch_small.mp4";

const HeroSection = () => {
  const [showButton, setShowButton] = useState(true);
  const { t } = useTranslation();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src={GlitchVideo} type="video/mp4" />
      </video>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: -1,
        }}
      />

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
        <Box sx={{ borderBottom: "2px solid white", width: "100%" }} />
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
          <ReactTypingEffect
            text={[
              t("hero.title.innovative"),
              t("hero.title.creative"),
              t("hero.title.passionate"),
            ]}
            speed={60}
            eraseSpeed={50}
            eraseDelay={1500}
          />
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
            <Box></Box>
            <Box>
              <ExpandMoreIcon
                sx={{
                  ml: 1,
                  animation: "bounce 2s infinite",
                }}
              />
            </Box>
          </Button>
        </Box>
        <style>
          {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
        </style>
      </Box>
    </Box>
  );
};

export default HeroSection;
