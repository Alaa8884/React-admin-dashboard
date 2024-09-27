import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../../../assets/data/data";
import { Box, Typography, useTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

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
              width: "99px",
              m: "8px auto",
              p: "5px",
              borderRadius: "5px",
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
    // <Box>
    <Box
      sx={{
        width: "95%",
        height: 600,
        mx: "auto",
        mb: "50px",
        ".team-info": {
          backgroundColor:
            theme.palette.mode === "light" ? deepPurple[100] : deepPurple[300],
        },
      }}
    >
      <DataGrid
        pagination
        autoPageSize
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
    // </Box>
  );
}

export default ManageTeam;
