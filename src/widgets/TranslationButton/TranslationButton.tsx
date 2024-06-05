import { useTranslation } from "react-i18next";
import { Button } from "../../shared/UI/Button/Button";

export const TranslationButton = () => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button buttonType="ghost" onClick={toggle}>
      {t("language")}
    </Button>
  );
};
