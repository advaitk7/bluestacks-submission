import DateElement from "./DateElement";
import CampaignElement from "./CampaignElement";
import CSVAction from "./Actions/CSV";
import ReportAction from "./Actions/Report";
import ScheduleAction from "./Actions/Schedule";
import ViewPricingAction from "./Actions/ViewPricing";
import { useSelector } from "react-redux";
export default function TableRow({ id }) {
  const { createdOn, name, region, image_url } = useSelector(state => state.campaign.data.filter((campaign) => campaign.id === id)[0]);
  const imagePath = "/assets/images/Dashboard" + image_url;

  return (
    <tr className="border border-t-0 border-r-0 border-l-0 border-[#ECECEC]">
      <td className="px-5 py-3">
        <DateElement createdOn={createdOn} />
      </td>
      <td className="px-5 py-3">
        <CampaignElement imagePath={imagePath} name={name} region={region} />
      </td>
      <td className="px-5 py-3">
        <ViewPricingAction imagePath={imagePath} id={id} />
      </td>
      <td className="px-5 py-3">
        <div className="grid grid-cols-action gap-4">
          <CSVAction imagePath={imagePath} />
          <ReportAction imagePath={imagePath} />
          <ScheduleAction imagePath={imagePath} id={id} />
        </div>
      </td>
    </tr>
  )
}