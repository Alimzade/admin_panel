import {  GridColDef} from "@mui/x-data-grid"
import { useState } from "react"
import "./products.scss"
import DataTable from "../../components/dataTable/DataTable"
import Add from "../../components/add/Add"
import { products } from "../../data"

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
      field: "img", headerName: "Image", width: 70,
      renderCell: (params) => {
          return <img src={params.row.img || "/electric-car.jpg"} alt="" />;
      },
  },
  {
    field: "brand",
    headerName: "Brand",
    width: 150,
    type: "string",
    editable: false,
  },
  {
    field: "model",
    headerName: "Model",
    width: 140,
    type: "string",
    editable: false,
  },
  {
    field: "version",
    headerName: "Version",
    width: 170,
    type: "string",
    editable: false,
  },
  {
    field: "power",
    headerName: "Power (hp)",
    width: 120,
    type: "string",
    editable: false,
  },
  {
    field: "battery",
    headerName: "Battery Capacity",
    width: 150,
    type: "string",
    editable: false,
  },
  {
    field: "speed",
    headerName: "Top Speed",
    width: 150,
    type: "string",
    editable: false,
  },
  {
    field: "acceleration",
    headerName: "0-100km",
    width: 120,
    type: "string",
    editable: false,
  },
]

  const Products = () => {
    const [open, setOpen] = useState(false)
    return (
      <div className="products">
        <div className="info">
          <h1>Products</h1>
          <button onClick={()=>setOpen(true)}>Add new Product</button>
        </div>
        <DataTable slug="products" columns={columns} rows={products} />
        {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
      </div>
    )
}

export default Products