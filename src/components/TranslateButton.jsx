import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./TranslateButton.css";
import dayjs from "dayjs";

const TranslateButton = () => {
  const [toggle, setToggle] = useState(false);
  const { i18n } = useTranslation();
  const onChange = (e) => {
    const lang = e.target.checked ? "de" : "en";
    i18n.changeLanguage(lang);
    dayjs.locale(lang);
    setToggle(!toggle);
  }
  return (
    <div className="switch">
      <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" value={toggle} onChange={onChange} />
      <label htmlFor="language-toggle"></label>
      <span className="on">EN</span>
      <span className="off">DE</span>
    </div>
  );
};

export default TranslateButton;
