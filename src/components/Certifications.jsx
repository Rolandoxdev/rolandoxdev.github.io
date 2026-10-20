import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import platziLogo from "../assets/images/logos/platzi.svg";
import ztmLogo from "../assets/images/logos/ZTM.png";
import languageLogo from "../assets/images/logos/language.svg";
import universityLogo from "../assets/images/logos/university.svg";
import figmaLogo from "../assets/images/logos/figma.svg";

const certifications = [
  // 1. Certificaciones técnicas recientes y relevantes
  {
    title: "React.js Course",
    issuer: "Platzi",
    logo: platziLogo,
    link: "https://platzi.com/p/orellana.marketing/curso/7395-react/diploma/detalle/",
    year: "2024",
  },
  {
    title: "JavaScript Fundamentals Course",
    issuer: "Platzi",
    logo: platziLogo,
    link: "https://platzi.com/p/orellana.marketing/curso/10266-course/diploma/detalle/",
    year: "2024",
  },
  {
    title: "Node.js Fundamentals Course",
    issuer: "Platzi",
    logo: platziLogo,
    link: "https://platzi.com/p/orellana.marketing/curso/1759-fundamentos-node/diploma/detalle/",
    year: "2024",
  },
  {
    title: "REST API course with Javascript",
    issuer: "Platzi",
    logo: platziLogo,
    link: "https://platzi.com/p/orellana.marketing/curso/2986-api-practico/diploma/detalle/",
    year: "2024",
  },
  {
    title: "API REST: Performance and Usability",
    issuer: "Platzi",
    logo: platziLogo,
    link: "https://platzi.com/p/orellana.marketing/curso/2942-api-profesional/diploma/detalle/",
    year: "2024",
  },
  {
    title: "Docker Course: Fundamentals",
    issuer: "Platzi",
    logo: platziLogo,
    link: "https://platzi.com/p/orellana.marketing/curso/8781-docker-fundamentos/diploma/detalle/",
    year: "2024",
  },
  {
    title: "Git and GitHub Professional Course",
    issuer: "Platzi",
    logo: platziLogo,
    link: "https://platzi.com/p/orellana.marketing/curso/1557-git-github/diploma/detalle/",
    year: "2024",
  },
  {
    title: "Basic Programming Course",
    issuer: "Platzi",
    logo: platziLogo,
    link: "https://platzi.com/p/orellana.marketing/curso/3208-course/diploma/detalle/",
    year: "2024",
  },
  {
    title: "Figma UI/UX Design Essentials",
    issuer: "SKILLSHARE",
    logo: figmaLogo,
    link: "https://www.skillshare.com/en/classes/figma-ui-ux-design-essentials/1088693386?srsltid=AfmBOoq20sAV6pWF2C_nfylug9500SDXzbmF0DjVfRWfKBjlcBXT6zVC",
    year: "2023",
  },
  {
    title: "Fundamentals of UX/UI Interface Design",
    issuer: "Platzi",
    logo: figmaLogo,
    link: "https://platzi.com/p/orellana.marketing/curso/5184-basico-ui/diploma/detalle/",
    year: "2023",
  },

  // 2. Certificaciones en progreso
  {
    title: "The Complete React Native + Hooks Course",
    issuer: "Udemy | ZTM",
    logo: ztmLogo,
    link: "https://www.udemy.com/course/the-complete-react-native-and-redux-course/?srsltid=AfmBOorqMSNMi68bY6H0sTBOCIms2TLH8KRKXEYdZBw2n2OEuD2jQ7Ep&couponCode=CP130525",
    year: "In Progress",
  },
  {
    title: "The Complete React Developer Course (w/ Hooks and Redux)",
    issuer: "Udemy | ZTM",
    logo: ztmLogo,
    link: "https://www.udemy.com/course/react-2nd-edition/?srsltid=AfmBOooMKahu7dWPcA9y1mWkyde6XOisXE1V28PckmmwZcr7O562uF5e&couponCode=CP130525",
    year: "In Progress",
  },

  // 3. Certificado de idioma
  {
    title: "English Certificate 66/100",
    issuer: "EF SET",
    logo: languageLogo,
    link: "https://cert.efset.org/es/NCSqTm",
    year: "2025",
  },

  // 4. Grado universitario
  {
    title: "Bachelor’s Degree in Communication Sciences",
    issuer: "University of San Carlos de Guatemala",
    logo: universityLogo,
    link: "https://usac.edu.gt/",
    year: "2014",
  },
];

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <Box
      id="certifications"
      sx={{
        py: { xs: 6, md: 10, lg: 10 },
        px: { xs: 2, md: 10, lg: 18 },
        backgroundColor: "#F0EFEF",
        textAlign: "center",
        scrollMarginTop: "60px",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          mt: { xs: 6, sm: 0, md: 2, lg: 2 },
          mb: 6,
        }}
      >
        {t("certifications")}
      </Typography>

      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {certifications.map((cert, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={idx}
            data-scroll-reveal
            sx={{ "--scroll-reveal-delay": `${Math.min(idx, 4) * 55}ms` }}
          >
            <Card
              sx={{
                height: "75%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 4,
                backgroundColor: "#F2F2F2",
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.08)",
                p: 2,
                textAlign: "center",
              }}
            >
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {cert.title}
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={1}
                  sx={{ mb: 1 }}
                >
                  <CardMedia
                    component="img"
                    image={cert.logo}
                    alt={cert.issuer}
                    width="20"
                    height="20"
                    loading="lazy"
                    decoding="async"
                    sx={{
                      width: 20,
                      height: 20,
                      objectFit: "contain",
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {cert.issuer} · {cert.year}
                  </Typography>
                </Stack>

                <Link
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{
                    fontSize: 14,
                    mt: 1,
                    display: "inline-block",
                  }}
                >
                  <Typography variant="body2" color="primary">
                    {t("view_certificate")}
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certifications;
