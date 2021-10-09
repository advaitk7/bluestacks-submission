import Table from "./Table";
import TabLinks from "./TabLinks";

export default function Body() {
  return (
    <>
      <div className="container px-2 mx-auto">
        <h1 className="py-10 font-bold text-lg md:text-3xl lg:text-5xl text-[#2B416C]">Manage Campaigns</h1>
        <TabLinks />
        <Table />
      </div>
    </>
  )
}