import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import FileInputExample from "../../components/form/form-elements/FileInputExample";
import UnggahDataList from "../../components/ecommerce/UnggahDataList";

export default function UnggahData() {
  return (
    <>
      <PageMeta
        title="Travel Management App"
        description="Travel Management App"
      />
      <PageBreadcrumb pageTitle="Unggah Data" />
      <div className="space-y-6">
        <FileInputExample />        
        <UnggahDataList />
      </div>
    </>
  );
}
