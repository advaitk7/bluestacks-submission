import dayjs from "dayjs";

export default function DateElement({ createdOn }) {
  const campaignDate = dayjs(createdOn);
  const formattedDate = campaignDate.format('MMM YYYY, D');
  const diff = campaignDate.fromNow();
  return (
    <>
      <p className="text-[#2B416C] whitespace-nowrap">{formattedDate}</p>
      <p className="text-sm italic whitespace-nowrap">{diff}</p>
    </>
  )
}