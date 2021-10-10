import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

export default function DateElement({ createdOn }) {
  const campaignDate = dayjs(createdOn);
  const formattedDate = campaignDate.format('MMM YYYY, D');
  const diff = campaignDate.fromNow();

  // leave this translation hook over here to cause a re-render on change of language
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();

  return (
    <>
      <p className="text-[#2B416C] whitespace-nowrap">{formattedDate}</p>
      <p className="text-sm italic whitespace-nowrap">{diff}</p>
    </>
  )
}