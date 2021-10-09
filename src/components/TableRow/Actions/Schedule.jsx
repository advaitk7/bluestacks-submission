import useToggleModal from "../../../utils/useToggleModal";
import ActionButton from "./ActionButton";
import ScheduleModal from "../Modals/ScheduleModal";

export default function ScheduleAction({ imagePath, index }) {
  const [show, handleToggle] = useToggleModal();

  return (
    <>
      <ActionButton image={imagePath + "/Group/calendar.png"} text={"Schedule Again"} handleClick={handleToggle} />
      <ScheduleModal show={show} index={index} handleClose={handleToggle} />
    </>
  )
}