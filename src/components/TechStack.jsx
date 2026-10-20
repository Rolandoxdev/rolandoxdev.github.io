import { Box, Typography, Tooltip } from "@mui/material";
import reactLogo from "../assets/images/logos/react.svg";
import jsLogo from "../assets/images/logos/javascript.svg";
import reduxLogo from "../assets/images/logos/redux.svg";
import muiLogo from "../assets/images/logos/mui.svg";
import gitLogo from "../assets/images/logos/git.svg";
import expoLogo from "../assets/images/logos/expo.svg";
import postmanLogo from "../assets/images/logos/postman.svg";
import figmaLogo from "../assets/images/logos/figma.svg";
import photoshopLogo from "../assets/images/logos/photoshop.svg";

const techs = [
  { name: "React", logo: reactLogo },
  { name: "React Native", logo: reactLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "Redux", logo: reduxLogo },
  { name: "Material UI", logo: muiLogo },
  { name: "Git", logo: gitLogo },
  { name: "Expo", logo: expoLogo },
  { name: "Postman", logo: postmanLogo },
  { name: "Figma", logo: figmaLogo },
  { name: "Photoshop", logo: photoshopLogo },
];

const duplicatedTechs = [...techs, ...techs];

const TechStack = () => (
  <Box
    id="techstack"
    data-scroll-reveal
    sx={{
      py: { xs: 6, md: 10 },
      px: { xs: 0, md: 0 },
      backgroundColor: " #F0EFEF",
      textAlign: "center",
      overflow: "hidden",
      position: "relative",
    }}
  >
    <Typography
      textAlign={"center"}
      variant="h4"
      fontSize={25}
      fontWeight="bold"
      gutterBottom
    >
      Tech Stack
    </Typography>
    <Box
      sx={{
        mt: 3,
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
        display: "flex",
        alignItems: "center",
        animation: "scroll 90s linear infinite",
        width: "max-content",
      }}
      className="tech-stack-track"
    >
        {duplicatedTechs.map((tech, idx) => (
          <Tooltip title={tech.name} key={idx}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mx: { xs: 2, md: 4 },
                minWidth: { xs: 70, md: 100 },
              }}
              aria-hidden={idx >= techs.length}
              data-marquee-copy={idx >= techs.length ? "true" : undefined}
            >
              <Box
                component="img"
                src={tech.logo}
                alt={tech.name}
                sx={{
                  width: { xs: 32, md: 45, lg: 45 },
                  height: { xs: 32, md: 45, lg: 45 },
                  marginBottom: 1,
                }}
              />
              <Typography variant="caption">{tech.name}</Typography>
            </Box>
          </Tooltip>
        ))}
      </Box>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  </Box>
);

export default TechStack;
