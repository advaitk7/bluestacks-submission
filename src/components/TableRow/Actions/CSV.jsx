import { useTranslation } from "react-i18next";
import ActionButton from "./ActionButton";

export default function CSVAction({ imagePath }) {
  const { t } = useTranslation();
  return (
    <ActionButton image={imagePath + "/Group 3/file.png"} text={t("CSV")} />
  )
}