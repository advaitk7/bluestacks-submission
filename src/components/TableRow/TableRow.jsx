import DateElement from "./DateElement";
import CampaignElement from "./CampaignElement";
import CSVAction from "./Actions/CSV";
import ReportAction from "./Actions/Report";
import ScheduleAction from "./Actions/Schedule";
import ViewPricingAction from "./Actions/ViewPricing";
import { useSelector } from "react-redux";
export default function TableRow({ index }) {
  const { createdOn, name, region, price, csv, report, image_url } = useSelector(state => state.campaign.data[index]);
  const imagePath = "/assets/images/Dashboard" + image_url;

  return (
    <tr>
      <td className="px-5 py-3">
        <DateElement createdOn={createdOn} />
      </td>
      <td className="px-5 py-3">
        <CampaignElement imagePath={imagePath} name={name} region={region} />
      </td>
      <td className="px-5 py-3">
        <ViewPricingAction imagePath={imagePath} index={index} />
      </td>
      <td className="px-5 py-3">
        <div className=" grid grid-cols-3">
          <CSVAction imagePath={imagePath} />
          <ReportAction imagePath={imagePath} />
          <ScheduleAction imagePath={imagePath} index={index} />
        </div>
      </td>
    </tr>
  )
}