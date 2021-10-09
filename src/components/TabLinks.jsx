import { useDispatch, useSelector } from "react-redux"
import { changeActiveTab, TABS } from "../slices/tabSlice";

export default function TabLinks() {
  const activeTab = useSelector(state => state.activeTab.key);
  const dispatch = useDispatch();

  const handleTabChange = (tab) => {
    dispatch(changeActiveTab(tab));
  };

  const tabText = {
    upcoming: "Upcoming Campaigns",
    live: "Live Campaigns",
    past: "Past Campaigns",
  };

  return (
    <>
      <ul className="text-[#556789] d-flex items-center flex-nowrap overflow-auto">
        {Object.keys(TABS).map((tab) => (
          <li key={tab} className={`flex-none inline-block p-4 cursor-pointer ${tab === activeTab ? "text-[#83A515] border-[#83A515] font-medium border-b-4" : ""}`} onClick={() => handleTabChange(tab)}>{tabText[tab]}</li>
        ))}
      </ul>
      <hr className=" border-[#F1F1F4]" />
    </>
  )
}