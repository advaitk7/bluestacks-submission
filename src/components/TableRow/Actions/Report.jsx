import { useTranslation } from "react-i18next";
import ActionButton from "./ActionButton";

export default function ReportAction({ imagePath }) {
  const { t } = useTranslation();
  return (
    <ActionButton image={imagePath + "/Group 2/statistics-report.png"} text={t("Report")} />
  )
}