import { useTranslation } from "react-i18next";
import Table from "./Table";
import TabLinks from "./TabLinks";

export default function Body() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container px-2 mx-auto">
        <h1 className="py-10 font-bold text-lg md:text-3xl lg:text-5xl text-[#2B416C]">{t("Manage Campaigns")}</h1>
        <TabLinks />
        <Table />
      </div>
    </>
  )
}