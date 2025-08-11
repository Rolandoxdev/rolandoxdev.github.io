import {
  Grid,
  Card,
  CardMedia,
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";

const ProjectCardsSection = ({ title, projects }) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mt: 6, mb: 2, px: { xs: 2, md: 5, lg: 20 } }}
      >
        {title}
      </Typography>
      <Grid container spacing={4} sx={{ px: { xs: 2, md: 5, lg: 20 } }}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card
              sx={{
                position: "relative",
                borderRadius: 4,
                boxShadow: "none",
                "&:hover .overlay": {
                  opacity: 1,
                },
              }}
            >
              <CardMedia
                component="img"
                height="400"
                image={project.image}
                alt={project.title}
              />
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end ",
                  alignItems: "flex-start",
                  textAlign: "left",
                  opacity: 0,
                  transition: "opacity 0.3s ease-in-out",
                  padding: 2,
                  boxSizing: "border-box",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <img
                    src={project.logo}
                    href={project.liveLink}
                    alt={`${project.title} logo`}
                    style={{
                      marginRight: "8px",
                      verticalAlign: "sub",
                      width: "24px",
                      height: "24px",
                    }}
                  />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {project.title}
                  </Typography>
                </Box>
                <Typography variant="body2" gutterBottom>
                  {t(project.description)}
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                  <Button
                    variant="text"
                    size="small"
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "white",
                      "&:hover": {
                        textDecoration: "underline",
                        backgroundColor: "transparent",
                      },
                    }}
                    startIcon={<GitHubIcon />}
                  >
                    {t("view_repo")}
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    href={project.liveLink || "#"}
                    target={project.liveLink ? "_blank" : "_self"}
                    rel={project.liveLink ? "noopener noreferrer" : ""}
                    disabled={!project.liveLink}
                    sx={{
                      color: "white",
                      "&:hover": {
                        textDecoration: "underline",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {t("live_preview")}
                  </Button>
                </Box>
              </Box>
            </Card>
            <Box sx={{ mt: 2 }}>
              <Stack direction="row" spacing={1}>
                {project.technologies.map((tech, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      border: "1px solid #ccc",
                      borderRadius: "16px",
                      padding: "4px 8px",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        borderColor: "#00DA94",
                        backgroundColor: "rgba(0, 218, 148, 0.1)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      style={{ width: "20px", height: "20px" }}
                    />
                    <Typography variant="body2">{tech.name}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProjectCardsSection;
