import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "../../assets/data/contactsData";
import PageContainer from "../../components/PageContainer";

function Contacts() {
  
  return (
    <PageContainer
      containerTitle={"CONTACTS"}
      containerSubTitle={"List of Contacts for Future Reference"}
    >
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
