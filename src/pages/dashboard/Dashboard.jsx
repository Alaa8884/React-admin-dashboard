import { Button, Stack } from "@mui/material";
import Row01 from "./Row01";
import Row02 from "./Row02";
import Row03 from "./Row03";
import { DownloadOutlined } from "@mui/icons-material";
import HeaderInfo from "../../components/HeaderInfo";

function Dashboard() {
  return (
    <Stack direction={"column"} gap={2}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {" "}
        <HeaderInfo
          title={"Dashboard"}
          subTitle={"Welcome to your dashboard"}
          isDashboard={true}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: { xs: "4px 6px", sm: "6px 8px" },
            textTransform: "capitalize",
            fontSize: { xs: "12px", sm: "16px" },
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
