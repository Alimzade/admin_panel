import {  GridColDef} from "@mui/x-data-grid"
import DataTable from "../../components/dataTable/DataTable"
import "./Users.scss"
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
      field: "avatar", headerName: "Avatar", width: 100,
      renderCell: (params) => {
          return <img src={params.row.img || "/noavatar.png"} alt="" />
      }
  },
  {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
    type: 'string',
    editable: false,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 150,
    type: 'string',
    editable: false,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 100,
    type: "string",
    editable: false,
  },
  {
      field: 'verified',
      headerName: 'Verified',
      width: 120,
      type: 'boolean',
      editable: false,
  },
];

const Users = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add new User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users