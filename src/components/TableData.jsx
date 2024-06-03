import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

const TableData = () => {
  const data = [
    {
      id: "1000",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1001",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1002",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1003",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1004",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1005",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
  ];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [globalFilterValue, setGlobalFilterValue] = useState("");
  useEffect(() => {
    setProducts(data);
    setLoading(false);
  }, []);

  const [filters, setFilters] = useState({
    code: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </IconField>
      </div>
    );
  };
  const header = renderHeader();
  return (
    <div className="card">
      <DataTable
        value={products}
        stripedRows
        tableStyle={{ minWidth: "50rem" }}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        dataKey="id"
        filters={filters}
        filterDisplay="row"
        loading={loading}
        header={header}
        globalFilterFields={["code", "name", "category"]}
        emptyMessage="No customers found."
      >
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
  );
};

export default TableData;
