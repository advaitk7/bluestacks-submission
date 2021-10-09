import { useSelector } from "react-redux";
import Modal from "./Modal";

const PriceModalBody = ({ id, handleClose }) => {
  const { createdOn, name, region, price, csv, report, image_url } = useSelector(state => state.campaign.data.filter((campaign) => campaign.id === id)[0]);
  const imagePath = "/assets/images/Dashboard" + image_url + "/Thumb/Bitmap.png";
  // const imagePath = "/assets/images/Dashboard-Popup/Popup/Bitmap.png";

  return (
    <>
      <div className="flex items-end mb-7">
        <img src={imagePath} width={135} height={135} className="mr-3 block" />
        <div className="flex-1 mb-3">
          <p className="text-[#2B416C] overflow-ellipsis overflow-hidden whitespace-nowrap mb-3">{name}</p>
          <p className="text-[#9CA2B7] text-sm">{region}</p>
        </div>
      </div>
      <h2 className="mb-4 text-2xl text-[#2B416C]">Pricing</h2>
      <p className="text-[#7788A3] mb-5">{price}</p>
      <div className="text-center">
        <button onClick={handleClose} className="py-3 px-5 border-2 text-[#181B34] border-[#181B34]">Close</button>
      </div>
    </>
  )
}

export default function PriceModal({ show = false, id, handleClose }) {
  return (
    <Modal show={show}>
      <PriceModalBody id={id} handleClose={handleClose} />
    </Modal>
  )
}