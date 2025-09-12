import { useTranslation } from "react-i18next";
import { Select, MenuItem } from "@mui/material";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const displayText = i18n.language === "es" ? "Idioma" : "Language";

  return (
    <Select
      value={i18n.language}
      onChange={changeLanguage}
      displayEmpty
      renderValue={() => displayText}
      size="small"
      sx={{
        color: "#000000",
        backgroundColor: "#FFFFFF",
        minWidth: 100,
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
    >
      <MenuItem value="en">🇺🇸 English</MenuItem>
      <MenuItem value="es">🇪🇸 Español</MenuItem>
    </Select>
  );
}

export default LanguageSwitcher;
