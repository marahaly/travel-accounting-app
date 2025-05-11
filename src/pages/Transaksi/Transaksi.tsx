import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import TransaksiList from "../../components/ecommerce/TransaksiList";

export default function Transaksi() {
  return (
    <>
      <PageMeta
        title="Travel Management App"
        description="Travel Management App"
      />
      <PageBreadcrumb pageTitle="Transaksi" />
      <div className="space-y-6">       
        <TransaksiList />
      </div>
    </>
  );
}
