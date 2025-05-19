import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import FilterNeraca from "../../components/form/form-elements/FilterNeraca";
import NeracaList from "../../components/ecommerce/NeracaList";

export default function Neraca() {
  return (
    <>
      <PageMeta
        title="Travel Management App"
        description="Travel Management App"
      />
      <PageBreadcrumb pageTitle="Neraca" />
      <div className="space-y-6">
        <FilterNeraca />
        <NeracaList />
      </div>
    </>
  );
}
