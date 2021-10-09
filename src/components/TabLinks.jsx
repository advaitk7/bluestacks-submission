import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux"
import { changeActiveTab, TABS } from "../slices/tabSlice";

export default function TabLinks() {
  const activeTab = useSelector(state => state.activeTab.key);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleTabChange = (tab) => {
    dispatch(changeActiveTab(tab));
  };

  const tabText = {
    upcoming: t("Upcoming Campaigns"),
    live: t("Live Campaigns"),
    past: t("Past Campaigns"),
  };

  return (
    <>
      <ul className="text-[#556789] flex items-center overflow-auto">
        {Object.keys(TABS).map((tab) => (
          <li key={tab} className={`flex-none inline-block p-4 cursor-pointer ${tab === activeTab ? "text-[#83A515] border-[#83A515] font-medium border-b-4" : ""}`} onClick={() => handleTabChange(tab)}>{tabText[tab]}</li>
        ))}
      </ul>
      <hr className=" border-[#F1F1F4]" />
    </>
  )
}