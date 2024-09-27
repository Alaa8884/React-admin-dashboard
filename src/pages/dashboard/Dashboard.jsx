import { Button, Stack,  useTheme } from "@mui/material";
import Row01 from "./Row01";
import Row02 from "./Row02";
import Row03 from "./Row03";
import { DownloadOutlined } from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";
import HeaderInfo from "../../components/HeaderInfo";

function Dashboard() {
  const theme = useTheme();
  return (
    <Stack direction={"column"} gap={2}>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        {" "}
        <HeaderInfo
          title={"Dashboard"}
          subTitle={"Welcome to your dashboard"}
          isDashboard={true}
        />
        <Button
          variant="contained"
          sx={{
            background:
              theme.palette.mode === "light"
                ? deepPurple[600]
                : deepPurple[300],
            color: theme.palette.mode === "light" ? "#222" : "#fff",
            padding:{xs:"4px 6px", sm:"6px 8px"},
            textTransform: "capitalize",
            fontSize: {xs:"12px", sm:"16px"},
          }}
        >
          <DownloadOutlined /> Download reports
        </Button>
      </Stack>
      <Row01 />
      <Row02 />
      <Row03 />
    </Stack>
  );
}

export default Dashboard;
