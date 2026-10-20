import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  EmojiEventsOutlined as OutcomeIcon,
  AppSettingsAltOutlined as AppSettingsAltIcon,
} from "@mui/icons-material";
import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import recoApp from "../assets/images/RecoApp_RolandoOrellana_Developer.webp";
import recoLogo from "../assets/images/reco_logo.svg";

const RecoCaseStudy = () => {
  const { t } = useTranslation();
  const contributions = t("reco_case_study.contributions", {
    returnObjects: true,
  });
  const technologies = t("reco_case_study.technologies", {
    returnObjects: true,
  });

  return (
    <Box
      component="section"
      id="reco-case-study"
      aria-labelledby="reco-title"
      sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: "88px" }}
    >
      <Container maxWidth="lg">
        <Link
          component={RouterLink}
          to="/"
          state={{ scrollTo: "projects" }}
          underline="hover"
          color="primary.main"
          sx={{
            position: "relative",
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            mb: 5,
          }}
        >
          <ArrowBackIcon fontSize="small" aria-hidden="true" />
          {t("case_study.backToProjects")}
        </Link>

        <Grid container spacing={{ xs: 4, md: 7 }} alignItems="stretch">
          <Grid item xs={12} md={7}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box
                sx={{
                  display: "grid",
                  placeItems: "center",
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  bgcolor: "#6044A4",
                }}
              >
                <Box
                  component="img"
                  src={recoLogo}
                  alt=""
                  aria-hidden="true"
                  sx={{ width: 30, height: 30 }}
                />
              </Box>
              <Typography
                variant="overline"
                color="secondary.dark"
                fontWeight={700}
                letterSpacing="0.12em"
              >
                {t("reco_case_study.eyebrow")}
              </Typography>
            </Stack>
            <Typography
              id="reco-title"
              component="h1"
              variant="h2"
              sx={{
                mt: 1,
                mb: 1,
                fontSize: { xs: "2.75rem", sm: "3.5rem", md: "4rem" },
                lineHeight: 1.08,
              }}
            >
              Reco App
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 3, maxWidth: 650, lineHeight: 1.8 }}
            >
              {t("reco_case_study.overview")}
            </Typography>
            <Divider sx={{ my: 2.5 }} />
            <Box>
              <Typography variant="overline" color="text.secondary">
                {t("case_study.roleLabel")}
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                {t("reco_case_study.role")}
              </Typography>
            </Box>
            <Divider sx={{ my: 2.5, maxWidth: 620 }} />
            <Typography variant="overline" color="text.secondary">
              {t("case_study.technologiesTitle")}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              flexWrap="wrap"
              sx={{ mt: 1.5, maxWidth: 650 }}
            >
              {technologies.map((technology) => (
                <Chip
                  key={technology}
                  label={technology}
                  size="small"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              component="figure"
              sx={{ m: 0, height: { xs: "auto", md: "100%" } }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "auto", md: "100%" },
                  aspectRatio: { xs: "1 / 1", md: "auto" },
                  borderRadius: 3,
                  overflow: "hidden",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={recoApp}
                  alt={t("reco_case_study.imageAlt")}
                  width={1200}
                  height={900}
                  fetchPriority="high"
                  decoding="async"
                  sx={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
            <AppSettingsAltIcon color="primary" aria-hidden="true" />
            <Typography variant="h5" component="h2" fontWeight={600}>
              {t("reco_case_study.contributionsTitle")}
            </Typography>
          </Box>
          <Grid container columnSpacing={{ xs: 0, md: 4 }}>
            {contributions.map((contribution, index) => (
              <Grid item xs={12} md={6} key={contribution.title}>
                <Box
                  component="article"
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "2.25rem minmax(0, 1fr)",
                    gap: 1.5,
                    height: "100%",
                    py: 2.5,
                    borderTop: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography
                    variant="overline"
                    color="primary.main"
                    fontWeight={700}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{ mt: 0.25, mb: 0.75, lineHeight: 1.35 }}
                    >
                      {contribution.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.75 }}
                    >
                      {contribution.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            p: { xs: 3, md: 4 },
            borderLeft: "4px solid",
            borderColor: "secondary.main",
            bgcolor: "rgba(67, 197, 158, 0.08)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
            <OutcomeIcon fontSize="small" color="primary" aria-hidden="true" />
            <Typography
              variant="overline"
              color="primary.main"
              fontWeight={700}
            >
              {t("reco_case_study.outcomeTitle")}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 0.75, maxWidth: 900, lineHeight: 1.8 }}
          >
            {t("reco_case_study.outcome")}
          </Typography>
        </Box>

        <Link
          component={RouterLink}
          to="/"
          state={{ scrollTo: "projects" }}
          underline="hover"
          color="primary.main"
          sx={{ display: "inline-flex", alignItems: "center", gap: 1, mt: 5 }}
        >
          {t("case_study.backToProjects")}
          <ArrowForwardIcon fontSize="small" aria-hidden="true" />
        </Link>
      </Container>
    </Box>
  );
};

export default RecoCaseStudy;
