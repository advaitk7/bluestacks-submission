import ReactCalendar from "react-calendar";
import { useTranslation } from "react-i18next";

export default function Calendar({ value, onChange }) {
  const { i18n: { language } } = useTranslation();
  return (
    <ReactCalendar
      value={value}
      onChange={onChange}
      locale={language}
    />
  )
}