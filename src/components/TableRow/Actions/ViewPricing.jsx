import { useState } from "react";
import ActionButton from "./ActionButton";
import PriceModal from "../Modals/PriceModal";
import useToggleModal from "../../../utils/useToggleModal";

export default function ViewPricingAction({ imagePath, index }) {
  const [show, handleToggle] = useToggleModal();

  return (
    <>
      <ActionButton image={imagePath + "/Group 4/Price.png"} text={"View Pricing"} handleClick={handleToggle} />
      <PriceModal show={show} index={index} handleClose={handleToggle} />
    </>
  )
}