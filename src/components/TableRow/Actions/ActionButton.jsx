export default function ActionButton({ image, text, handleClick }) {
  const buttonClick = () => {
    if (handleClick) handleClick();
  }

  return (
    <a onClick={buttonClick} className="inline-block cursor-pointer">
      <img src={image} width="24" height="24" className="inline-block mr-1 align-middle" />
      {" "}{text}
    </a>
  )
}