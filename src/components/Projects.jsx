import { Box, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import byteCode from "../assets/images/byteCode_landing.jpg";
import Reco from "../assets/images/reco_desktop.jpg";
import RecoApp from "../assets/images/RecoApp_RolandoOrellana_Developer.jpg";
import heroesApp from "../assets/images/heroesApp.jpg";
import byteCode_logo from "../assets/images/byteCode_logo.svg";
import Reco_logo from "../assets/images/reco_logo.svg";
import todo_logo from "../assets/images/todo_logo.svg";
import superHero from "../assets/images/super_logo.svg";
import reactLogo from "../assets/images/logos/react.svg";
import gitLogo from "../assets/images/logos/git.svg";
import reduxLogo from "../assets/images/logos/redux.svg";
import materialUILogo from "../assets/images/logos/mui.svg";
import expoLogo from "../assets/images/logos/expo.svg";
import trakkonApp from "../assets/images/trakkon_project.jpg";
import trakkonLogo from "../assets/images/trakkon-logo.svg";
import alltixWeb from "../assets/images/alltix_website.jpg";
import ProjectCardsSection from "./ProjectCardsSection";

const projects = [
  {
    id: 1,
    title: "Trakkon App",
    type: "mobile",
    description: "Trakkon_description",
    repoLink: "",
    liveLink: "https://apps.apple.com/app/chesed-of-flatbush/id6760507798",
    image: trakkonApp,
    logo: trakkonLogo,
    technologies: [
      { name: "React Native", logo: reactLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Expo", logo: expoLogo },
    ],
  },
  {
    id: 2,
    title: "Reco App",
    type: "mobile",
    description: "RecoApp_description",
    repoLink: "https://github.com/orellanamr/reco-app",
    liveLink: "https://play.google.com/store/apps/details?id=gt.com.reco.app",
    image: RecoApp,
    logo: Reco_logo,
    technologies: [
      { name: "React Native", logo: reactLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Expo", logo: expoLogo },
    ],
  },
  {
    id: 3,
    title: "Superheroes App",
    type: "mobile",
    description: "Superheroes_description",
    repoLink: "https://github.com/orellanamr/startrackheroes-app",
    liveLink: "",
    image: heroesApp,
    logo: superHero,
    technologies: [
      { name: "React Native", logo: reactLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Expo", logo: expoLogo },
    ],
  },
  // {
  //   id: 3,
  //   title: "Focus Time",
  //   type: "mobile",
  //   description: "FocusTime_description",
  //   repoLink: "https://github.com/orellanamr/focusTime",
  //   liveLink: "",
  //   image: focusTimeCover,
  //   logo: TODo_logo,
  //   technologies: [
  //     { name: "React Native", logo: reactLogo },
  //     { name: "Expo", logo: expoLogo },
  //     { name: "Git", logo: gitLogo },
  //   ],
  // },
  {
    id: 4,
    title: "Reco Web",
    type: "web",
    description: "Reco_description",
    repoLink:
      "https://github.com/andrea-calderon/Web_App_Chispudos/tree/development",
    liveLink: "https://recolatam.com",
    image: Reco,
    logo: Reco_logo,
    technologies: [
      { name: "React", logo: reactLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Git", logo: gitLogo },
    ],
  },
  {
    id: 5,
    title: "byteCode",
    type: "web",
    description: "byteCode_description",
    repoLink: "https://github.com/orellanamr/bytecode_landing",
    liveLink: "https://bytecodelatam.com",
    image: byteCode,
    logo: byteCode_logo,
    technologies: [
      { name: "React", logo: reactLogo },
      { name: "Material UI", logo: materialUILogo },
      { name: "Git", logo: gitLogo },
    ],
  },
  {
    id: 6,
    title: "Alltix",
    type: "web",
    description: "Alltix_description",
    repoLink: "",
    liveLink: "https://alltix-landing.vercel.app/",
    image: alltixWeb,
    logo: todo_logo,
    technologies: [
      { name: "React", logo: reactLogo },
      { name: "Material UI", logo: materialUILogo },
      { name: "Git", logo: gitLogo },
    ],
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const mobileProjects = projects.filter((p) => p.type === "mobile");
  const webProjects = projects.filter((p) => p.type === "web");

  return (
    <Box sx={{ py: 12, px: 4 }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{
          px: { xs: 2, md: 16, lg: 22 },
          paddingBottom: 4,
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            fontWeight="bold"
            color="#000000"
            sx={{
              textAlign: "left",
              fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
            }}
            gutterBottom
          >
            {t("Projects")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            color="#000000"
            sx={{
              textAlign: "left",
              fontSize: { xs: "1.1rem", md: "1.5rem", lg: "1.5rem" },
            }}
            gutterBottom
          >
            {t("projects_subtitle")}
          </Typography>
        </Grid>
      </Grid>

      <ProjectCardsSection
        title={t("projects.mobileTitle", "Mobile Projects")}
        projects={mobileProjects}
      />
      <ProjectCardsSection
        title={t("projects.webTitle", "Web Projects")}
        projects={webProjects}
      />
    </Box>
  );
};

export default Projects;
