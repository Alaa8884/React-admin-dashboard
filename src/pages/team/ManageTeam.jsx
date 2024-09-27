import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../../assets/data/teamData";
import { Box, Typography, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import PageContainer from "../../components/PageContainer";

function ManageTeam() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "iD",
      headerClassName: "team-info",
      align: "center",
      headerAlign: "center",
      width: 33,
    },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "team-info",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerClassName: "team-info",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      headerClassName: "team-info",
      align: "center",
      headerAlign: "center",
      width: 40,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      headerClassName: "team-info",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      headerClassName: "team-info",
      align: "center",
      headerAlign: "center",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              m: "8px auto",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              textAlign: "center",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#43a047",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                fontSize="small"
                sx={{ color: "#fff" }}
              />
            )}
            {access === "Manager" && (
              <SecurityOutlined fontSize="small" sx={{ color: "#fff" }} />
            )}
            {access === "User" && (
              <LockOpenOutlined fontSize="small" sx={{ color: "#fff" }} />
            )}
            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    
      <PageContainer>
        <DataGrid
          pagination
          autoPageSize
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </PageContainer>

  );
}

export default ManageTeam;
