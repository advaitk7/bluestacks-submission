// import { data } from "../../public/data/data.json";
import { useSelector } from "react-redux";
import TableRow from "./TableRow";

export default function Table() {
  const campaignDataLength = useSelector(state => state.campaign.data.length);

  let campaigns = new Array(campaignDataLength).fill(null).map((v, k) => k);

  return (
    <>
      <table className="w-full table-auto my-10 text-left table-shadow">
        <thead className="uppercase bg-[#F1F1F4]">
          <tr>
            <th className="px-5 py-3">Date</th>
            <th className="px-5 py-3">Campaign</th>
            <th className="px-5 py-3">View</th>
            <th className="px-5 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-[#7788A3]">
          {campaigns.map((index) => (
            <TableRow key={index} index={index} />
          ))}
        </tbody>
      </table>
    </>
  )
}