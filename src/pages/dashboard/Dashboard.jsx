import { Box, Button, Stack, useTheme } from "@mui/material";
import Row01 from "./Row01";
import Row02 from "./Row02";
import Row03 from "./Row03";
import { DownloadOutlined } from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";

function Dashboard() {
  const theme = useTheme();
  return (
    <Stack direction={"column"} gap={3}>
      <Box sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          sx={{
            background:
              theme.palette.mode === "light"
                ? deepPurple[600]
                : deepPurple[300],
            // color: theme.palette.mode === "light" ? "#333" : "#fff",
            padding: "6px 8px",
            textTransform: "capitalize",
          }}
        >
          <DownloadOutlined /> Download reports
        </Button>
      </Box>
      <Row01 />
      <Row02 />
      <Row03 />
    </Stack>
  );
}

export default Dashboard;
