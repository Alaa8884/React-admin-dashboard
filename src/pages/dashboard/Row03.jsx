import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../pieChart/Pie";
import { deepPurple } from "@mui/material/colors";
import Bar from "../barChart/Bar";
import Geo from "../geography/Geo";

function Row03() {
  const theme = useTheme();
  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}>
      <Paper
        sx={{
          width: "28%",
          minWidth: "300px",
          flexGrow: 1,
          background: theme.palette.mode === "light" ? deepPurple[50] : "",
          borderRadius: "4px",
        }}
      >
        <Typography
          color={
            theme.palette.mode === "light" ? deepPurple[600] : deepPurple[300]
          }
          fontWeight={"bold"}
          sx={{ padding: "20px 30px 0 30px" }}
          variant="h6"
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />{" "}
        <Typography variant="h6" align="center" sx={{ mt: "10px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper
        sx={{
          width: "28%",
          minWidth: "300px",
          flexGrow: 1,
          background: theme.palette.mode === "light" ? deepPurple[50] : "",
          borderRadius: "4px",
        }}
      >
        <Typography
          color={
            theme.palette.mode === "light" ? deepPurple[600] : deepPurple[300]
          }
          fontWeight={"bold"}
          sx={{ padding: "20px 30px 50px 30px" }}
          variant="h6"
        >
          Sales Quantity
        </Typography>
        <Bar isDashboard={true} />{" "}
      </Paper>
      <Paper
        sx={{
          width: "28%",
          minWidth: "100%",
          flexGrow: 1,
          background: theme.palette.mode === "light" ? deepPurple[50] : "",
          borderRadius: "4px",
        }}
      >
        <Geo isDashboard={true} />{" "}
       
      </Paper>
    </Stack>
  );
}

export default Row03;
