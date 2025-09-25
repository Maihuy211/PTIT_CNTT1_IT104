import Header from "./Header";
import FormStudent from "./FormStudent";
import FilterStudent from "./FilterStudent";
import ListStudent from "./ListStudent";
import { useState } from "react";

export default function ManagerStudent() {
  const [filters, setFilters] = useState({
    search: "",
    grade: "all",
    sort: "az",
  });
  return (
    <div className="flex justify-center p-12">
      <div className="p-6 bg-gray-50  w-[800px]">
        <Header></Header>

        <FormStudent></FormStudent>

        <FilterStudent filters={filters} setFilters={setFilters} />
        <ListStudent filters={filters} />
      </div>
    </div>
  );
}
