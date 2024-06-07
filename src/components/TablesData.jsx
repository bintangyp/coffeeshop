import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";

const customStyle = {
  tableHead: {
    style: {
      backgroundColor: "black",
    },
  },
};

const TablesData = ({ data, fieldName }) => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filterItems = data.filter(
    (item) =>
      item.name &&
      item.name.toLowerCase().includes(filterText.toLocaleLowerCase())
  );
  const useHeaderComponenMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  return (
    <>
      <DataTable
        columns={fieldName}
        data={filterItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={useHeaderComponenMemo}
        persistTableHead
        customStyles={customStyle}
        striped
        highlightOnHover
      />
    </>
  );
};

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <div className="flex justify-end items-center ">
      <span className="font-bold pr-4 ">Search</span>
      <label className="input input-bordered input-sm flex items-center gap-2 ">
        <input
          autoFocus
          type="text"
          className="grow"
          placeholder="Filter By Name"
          value={filterText}
          onChange={onFilter}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70 text-myprimary"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  </>
);

export default TablesData;
