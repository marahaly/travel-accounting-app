import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import UnggahDataList from "../../components/ecommerce/UnggahDataList";

export default function RefAkunTransaksi() {
  return (
    <>
      <PageMeta
        title="Travel Management App"
        description="Travel Management App"
      />
      <PageBreadcrumb pageTitle="Referensi Akun" />
      <div className="space-y-6">       
        <UnggahDataList />
      </div>
    </>
  );
}
