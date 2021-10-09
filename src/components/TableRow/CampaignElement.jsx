export default function CampaignElement({ imagePath, name, region }) {
  return (
    <div className="flex a-center">
      <img src={imagePath+"/Thumb/Bitmap.png"} width="40" height="40" className="h-10 w-10 mr-3" />
      <div className="flex-1">
        <p className="text-[#556789] overflow-ellipsis overflow-hidden whitespace-nowrap md:max-w-none max-w-[200px]">{name}</p>
        <p className="text-[#9CA2B7] text-sm italic">{region}</p>
      </div>
    </div>
  )
}