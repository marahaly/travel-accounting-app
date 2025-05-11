import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";
import FileInputExample from "../../components/form/form-elements/FileInputExample";

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
        <ComponentCard title="Daftar Data Yang Telah Diunggah">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
