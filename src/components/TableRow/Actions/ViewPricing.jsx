import ActionButton from "./ActionButton";
import PriceModal from "../Modals/PriceModal";
import useToggleModal from "../../../utils/useToggleModal";
import { useTranslation } from "react-i18next";

export default function ViewPricingAction({ imagePath, id }) {
  const [show, handleToggle] = useToggleModal();
  const { t } = useTranslation();

  return (
    <>
      <ActionButton image={imagePath + "/Group 4/Price.png"} text={t("View Pricing")} handleClick={handleToggle} />
      <PriceModal show={show} id={id} handleClose={handleToggle} />
    </>
  )
}