import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Select from "../Select";
import Button from "../../ui/button/Button";

export default function FilterNeraca() {
  const optionsMonth = [
    { value: "Januari", label: "Januari" },
    { value: "Februari", label: "Februari" },
    { value: "Maret", label: "Maret" },
    { value: "April", label: "April" },
    { value: "Mei", label: "Mei" },
    { value: "Juni", label: "Juni" },
    { value: "Juli", label: "Juli" },
    { value: "Agustus", label: "Agustus" },
    { value: "September", label: "September" },
    { value: "Oktober", label: "Oktober" },
    { value: "November", label: "November" },
    { value: "Desember", label: "Desember" },
  ];

  const optionsYear = [
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2022" }
  ];

  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <>      
      <ComponentCard title="Filter Neraca">
        <div>
          <Label>Bulan - Tahun</Label>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-5 mb-5">
            <Select
              options={optionsMonth}
              placeholder="Pilih Bulan"
              onChange={handleSelectChange}
              className="dark:bg-dark-900"
            />
            <Select
              options={optionsYear}
              placeholder="Pilih Tahun"
              onChange={handleSelectChange}
              className="dark:bg-dark-900"
            />
            <Button size="sm" variant="primary">
                Cetak
            </Button>
          </div>
          
          
        </div>      
      </ComponentCard>
    </>
  );
}
