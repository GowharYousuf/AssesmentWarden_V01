import Header from "./Components/Header";
import LeadsOverview from "./Components/LeadsOverview";
import TableFilters from "./Components/TableFilters";
import Table from "./Components/Table";
export default function Home() {
  return (
      <div className="container mx-auto px-4 ">
        <Header />
        <LeadsOverview />
        <TableFilters/>
        <Table/>
      </div>
  );
}
