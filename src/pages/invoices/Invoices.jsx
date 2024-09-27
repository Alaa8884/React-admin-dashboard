import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "../../assets/data/invoicesData";
import PageContainer from "../../components/PageContainer";

function Contacts() {
  return (
    <PageContainer>
      <DataGrid
        checkboxSelection
        disableRowSelectionOnClick
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
