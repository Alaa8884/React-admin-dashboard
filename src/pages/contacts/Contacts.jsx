import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows } from "../../assets/data/contactsData";
import PageContainer from "../../components/PageContainer";

function Contacts() {
  const columns = [
    { field: "id", headerName: "ID", width: 33, headerClassName: "team-info" },
    {
      field: "registrarId",
      headerName: "Registrar ID",
      headerClassName: "team-info",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      headerClassName: "team-info",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 44,
      headerClassName: "team-info",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      headerClassName: "team-info",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerClassName: "team-info",
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      headerClassName: "team-info",
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
      headerClassName: "team-info",
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      headerClassName: "team-info",
    },
  ];

  return (
    <PageContainer>
      <DataGrid
        pagination
        autoPageSize
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </PageContainer>
  );
}

export default Contacts;
