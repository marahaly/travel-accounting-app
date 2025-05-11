import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ReferensiAkunList from "../../components/ecommerce/ReferensiAkunList";

export default function RefAkun() {
  return (
    <>
      <PageMeta
        title="Travel Management App"
        description="Travel Management App"
      />
      <PageBreadcrumb pageTitle="Referensi Akun" />
      <div className="space-y-6">       
        <ReferensiAkunList />
      </div>
    </>
  );
}
