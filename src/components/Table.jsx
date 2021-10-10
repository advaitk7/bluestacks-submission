// import { data } from "../../public/data/data.json";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { TABS } from "../slices/tabSlice";
import TableRow from "./TableRow";

const getCampaignsForTab = (campaignData, activeTab) => {
  const date = new Date();
  date.setHours(0,0,0,0);
  const currentDate = + date;
  date.setDate(date.getDate() + 1);
  const plusOneDate = + date;

  return campaignData.filter(({ createdOn }) => {
    switch (activeTab) {
      case TABS.past:
        return createdOn < currentDate;
      case TABS.upcoming:
        return createdOn > plusOneDate;
      case TABS.live:
      default:
        return createdOn >= currentDate && createdOn < plusOneDate;
    }
  });
}

export default function Table() {
  const campaignData = useSelector(state => state.campaign.data);
  const activeTab = useSelector(state => state.activeTab.key);
  const { t } = useTranslation(); 

  let campaigns = getCampaignsForTab(campaignData, activeTab);


  if (campaigns.length === 0) {
    const tabText = {
      upcoming: t("No Upcoming Campaigns Found"),
      live: t("No Live Campaigns Found"),
      past: t("No Past Campaigns Found"),
    };

    return (
      <p className="p-5">
        {tabText[activeTab]}!!
      </p>
    )
  }

  return (
    <>
      <div className="overflow-auto w-full">
        <table className="w-full table-auto my-10 text-left table-shadow">
          <thead className="uppercase bg-[#F1F1F4]">
            <tr>
              <th className="px-5 py-3">{t("Date")}</th>
              <th className="px-5 py-3">{t("Campaign")}</th>
              <th className="px-5 py-3">{t("View")}</th>
              <th className="px-5 py-3">{t("Actions")}</th>
            </tr>
          </thead>
          <tbody className="text-[#7788A3]">
            {campaigns.map((campaign) => (
              <TableRow key={campaign.id} id={campaign.id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}