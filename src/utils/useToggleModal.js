import { useState } from "react";

export default function useToggleModal() {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };

  return [show, handleToggle];
}