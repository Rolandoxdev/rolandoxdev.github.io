import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const TrakkonCaseStudy = () => {
  const { t } = useTranslation();
  const contributions = t("case_study.contributions", {
    returnObjects: true,
  });
  const technologies = t("case_study.technologies", {
    returnObjects: true,
  });

  return (
    <Box
      component="section"
      id="trakkon-case-study"
      aria-labelledby="trakkon-title"
      sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: "88px" }}
    >
      <Container maxWidth="lg">
        <Link
          component={RouterLink}
          to="/"
          state={{ scrollTo: "projects" }}
          underline="none"
          color="primary.main"
          sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 5 }}
        >
          <ArrowBackIcon fontSize="small" aria-hidden="true" />
          {t("case_study.backToProjects")}
        </Link>

        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="overline"
              color="secondary.dark"
              fontWeight={700}
              letterSpacing="0.12em"
            >
              {t("case_study.eyebrow")}
            </Typography>
            <Typography
              id="trakkon-title"
              component="h1"
              variant="h2"
              sx={{
                mt: 1,
                mb: 1,
                fontSize: { xs: "2.75rem", sm: "3.5rem", md: "4.5rem" },
                lineHeight: 1.08,
              }}
            >
              Trakkon
            </Typography>
            <Typography
              variant="h5"
              color="text.primary"
              fontWeight={500}
              sx={{ fontSize: { xs: "1.15rem", md: "1.4rem" } }}
            >
              {t("case_study.subtitle")}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 3, maxWidth: 650, lineHeight: 1.8 }}
            >
              {t("case_study.overview")}
            </Typography>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper
              variant="outlined"
              sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: "white" }}
            >
              <Typography variant="overline" color="text.secondary">
                {t("case_study.roleLabel")}
              </Typography>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
                {t("case_study.role")}
              </Typography>
              <Typography variant="overline" color="text.secondary">
                {t("case_study.stackLabel")}
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
                {[
                  "React Native",
                  "TypeScript",
                  "Expo",
                  "Zustand",
                  "React Hook Form",
                  "Laravel",
                  "REST API",
                ].map((technology) => (
                  <Chip key={technology} label={technology} size="small" />
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 6, md: 8 } }} />

        <Grid container spacing={{ xs: 2, md: 6 }}>
          <Grid item xs={12} md={3}>
            <Typography variant="h5" component="h2" fontWeight={600}>
              {t("case_study.challengeTitle")}
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8, maxWidth: 760 }}
            >
              {t("case_study.challenge")}
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Typography variant="h5" component="h2" fontWeight={600} sx={{ mb: 3 }}>
            {t("case_study.contributionsTitle")}
          </Typography>
          <Grid container spacing={2}>
            {contributions.map((contribution, index) => (
              <Grid item xs={12} md={6} key={contribution.title}>
                <Paper
                  variant="outlined"
                  sx={{
                    height: "100%",
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 3,
                    bgcolor: "white",
                  }}
                >
                  <Typography
                    variant="overline"
                    color="secondary.dark"
                    fontWeight={700}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography variant="h6" fontWeight={600} sx={{ mt: 0.5, mb: 1 }}>
                    {contribution.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {contribution.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Paper
          variant="outlined"
          sx={{
            mt: { xs: 5, md: 7 },
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            bgcolor: "rgba(67, 197, 158, 0.08)",
            borderColor: "secondary.main",
          }}
        >
          <Typography
            variant="overline"
            color="primary.main"
            fontWeight={700}
            letterSpacing="0.1em"
          >
            {t("case_study.highlightLabel")}
          </Typography>
          <Typography variant="h5" component="h2" fontWeight={600} sx={{ mt: 0.5 }}>
            {t("case_study.highlightTitle")}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 1.5, maxWidth: 850, lineHeight: 1.8 }}
          >
            {t("case_study.highlight")}
          </Typography>
        </Paper>

        <Grid container spacing={{ xs: 2, md: 6 }} sx={{ mt: { xs: 4, md: 6 } }}>
          <Grid item xs={12} md={3}>
            <Typography variant="h5" component="h2" fontWeight={600}>
              {t("case_study.outcomeTitle")}
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8, maxWidth: 760 }}
            >
              {t("case_study.outcome")}
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: { xs: 5, md: 7 } }}>
          <Typography variant="h6" component="h2" fontWeight={600} sx={{ mb: 2 }}>
            {t("case_study.technologiesTitle")}
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {technologies.map((technology) => (
              <Chip
                key={technology}
                label={technology}
                variant="outlined"
                sx={{ bgcolor: "background.paper" }}
              />
            ))}
          </Stack>
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

export default TrakkonCaseStudy;
