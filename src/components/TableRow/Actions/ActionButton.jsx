export default function ActionButton({ image, text, handleClick }) {
  const buttonClick = () => {
    if (handleClick) handleClick();
  }

  return (
    <a onClick={buttonClick} className="inline-flex items-center whitespace-nowrap md:flex-row flex-col cursor-pointer">
      <img src={image} width="24" height="24" className="inline-block mr-1 align-middle" />
      {" "}{text}
    </a>
  )
}