export default function ActionButton({ image, text, handleClick }) {
  const buttonClick = () => {
    if (handleClick) handleClick();
  }

  return (
    <a onClick={buttonClick} className="text-center md:inline-flex md:items-center md:justify-start grid grid-rows-2 gap-1 cursor-pointer whitespace-nowrap">
      <img src={image} width="24" height="24" className="inline-block mx-auto md:mx-1" />
      <span>
        {text}
      </span>
    </a>
  )
}