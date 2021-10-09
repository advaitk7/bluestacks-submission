import useToggleModal from "../../../utils/useToggleModal";
import ActionButton from "./ActionButton";
import ScheduleModal from "../Modals/ScheduleModal";
import { useTranslation } from "react-i18next";

export default function ScheduleAction({ imagePath, id }) {
  const [show, handleToggle] = useToggleModal();
  const { t } = useTranslation();

  return (
    <>
      <ActionButton image={imagePath + "/Group/calendar.png"} text={t("Schedule Again")} handleClick={handleToggle} />
      <ScheduleModal show={show} id={id} handleClose={handleToggle} />
    </>
  )
}