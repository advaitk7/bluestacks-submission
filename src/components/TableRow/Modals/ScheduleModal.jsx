import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import "./ScheduleModal.css";
import { updateDateInCampaign } from "../../../slices/campaignSlice";
import Calendar from "../../Calendar";

const ScheduleModalBody = ({ id, handleClose }) => {
  const { createdOn, name, region } = useSelector(state => state.campaign.data.filter((campaign) => campaign.id === id)[0]);
  const dispatch = useDispatch();

  // const imagePath = "/assets/images/Dashboard" + image_url;
  const imagePath = "/assets/images/Dashboard-Popup/Popup/Bitmap.png";

  const value = new Date(createdOn);
  const onChange = (val) => {
    dispatch(updateDateInCampaign({ id, date: + val}));
    handleClose();
  };

  return (
    <>
      <div className="flex items-end mb-7">
        <img alt="campaign logo" src={imagePath} width={135} height={135} className="mr-3 block" />
        <div className="flex-1 mb-3">
          <p className="text-[#2B416C] overflow-ellipsis overflow-hidden whitespace-nowrap mb-3">{name}</p>
          <p className="text-[#9CA2B7] text-sm">{region}</p>
        </div>
      </div>
      <div className="schedule__content">
        <Calendar value={value} onChange={onChange} />
      </div>
    </>
  )
}

export default function ScheduleModal({ show = false, id, handleClose }) {
  return (
    <Modal show={show}>
      <ScheduleModalBody id={id} handleClose={handleClose} />
    </Modal>
  )
}