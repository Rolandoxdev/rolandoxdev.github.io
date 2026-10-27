import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#F9F9F9",
        color: "#000000",
        py: 8,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Rolando Orellana.
        <Typography variant="body2" sx={{ mt: 1 }}>
          <MailOutlineIcon sx={{ mr: 1, verticalAlign: "middle" }} />{" "}
          {t("contact_info")}:{" "}
          <Link
            href="mailto:rolando.orellana@example.com"
            underline="hover"
            color="inherit"
          >
            rolandoxdev@gmail.com
          </Link>
        </Typography>
      </Typography>

      <Grid container justifyContent="center" spacing={2}>
        {["home", "projects", "certifications", "contact"].map(
          (section, index) => (
            <Grid item key={index}>
              <Link
                href={`#${section}`}
                onClick={(event) => {
                  event.preventDefault();
                  document
                    .getElementById(section)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                underline="hover"
                color="inherit"
                sx={{ fontSize: "1rem" }}
              >
                <Typography sx={{ mt: 3 }} variant="body1">
                  {t(section)}
                </Typography>
              </Link>
            </Grid>
          )
        )}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/rolandoreactdeveloper/"
          target="_blank"
          rel="noopener"
          sx={{ color: "black" }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/Rolandoxdev"
          target="_blank"
          rel="noopener"
          sx={{ color: "black" }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com/tracksmr/"
          target="_blank"
          rel="noopener"
          sx={{ color: "black" }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Rolando Orellana -{" "}
          {t("all_rights_reserved")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
