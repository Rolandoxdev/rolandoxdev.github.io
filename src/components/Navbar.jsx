import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Button,
  Box,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Translate as TranslateIcon,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import logoRolando from "../assets/images/logoRolando.svg";
import RolandoCV from "../assets/docs/Rolando_Orellana_CV.pdf";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsDrawerOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        pt: 1,
        px: 2,
        zIndex: 1300,
        backgroundColor: "#FFFFFF",
        height: "80px",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => handleScrollToSection("home")}
        >
          <img src={logoRolando} alt="Logo" style={{ height: 40 }} />
        </Box>

        {!isMobile ? (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              color="inherit"
              sx={{ fontWeight: 600 }}
              onClick={() => handleScrollToSection("home")}
            >
              {t("home")}
            </Button>
            <Button
              color="inherit"
              sx={{ fontWeight: 600 }}
              onClick={() => handleScrollToSection("projects")}
            >
              {t("projects")}
            </Button>
            <Button
              color="inherit"
              sx={{ fontWeight: 600 }}
              onClick={() => handleScrollToSection("certifications")}
            >
              {t("certifications")}
            </Button>
            <Button
              color="inherit"
              sx={{ fontWeight: 600 }}
              onClick={() => handleScrollToSection("contact")}
            >
              {t("contact")}
            </Button>
            <LanguageSwitcher />
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<DescriptionOutlinedIcon />}
              href={RolandoCV}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                backgroundColor: "#EFEFEF",
                color: "#000000",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#FFFFFF",
                },
              }}
            >
              {t("download_cv")}
            </Button>
          </Box>
        ) : (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => toggleDrawer(!isDrawerOpen)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={() => toggleDrawer(false)}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: theme.palette.background.default,
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <IconButton
                  onClick={() => toggleDrawer(false)}
                  sx={{
                    position: "absolute",
                    zIndex: 1,
                    top: 125,
                    right: 50,
                    color: "text.primary",
                  }}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <MenuItem onClick={() => handleScrollToSection("home")}>
                  <Typography variant="h6">{t("home")}</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleScrollToSection("projects")}>
                  <Typography variant="h6">{t("projects")}</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => handleScrollToSection("certifications")}
                >
                  <Typography variant="h6">{t("certifications")}</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleScrollToSection("contact")}>
                  <Typography variant="h6">{t("contact")}</Typography>
                </MenuItem>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 5,
                    py: 8,
                  }}
                >
                  <LanguageSwitcher />

                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<DescriptionOutlinedIcon />}
                    href={RolandoCV}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#EFEFEF",
                      alignItems: "left",
                      color: "#000000",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    {t("download_cv")}
                  </Button>
                </Box>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
