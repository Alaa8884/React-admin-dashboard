import { Stack, useTheme } from "@mui/material";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "../../assets/data/dashboardData";

function Row01() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      gap={1}
      flexWrap={"wrap"}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icon={
          <EmailIcon
            sx={{
              fontSize: "23px",
              color: theme.palette.secondary.main,
            }}
          />
        }
        title={"15780"}
        subTitle={"Email sent"}
        data={data1}
        count={"15%"}
        scheme={"pink_yellowGreen"}
      />
      <Card
        icon={
          <PointOfSaleIcon
            sx={{
              fontSize: "23px",
              color: theme.palette.secondary.main,
            }}
          />
        }
        title={"431,225"}
        subTitle={"Sales obtained"}
        data={data2}
        count={"21%"}
        scheme={"purple_orange"}
      />
      <Card
        icon={
          <PersonAddIcon
            sx={{
              fontSize: "23px",
              color: theme.palette.secondary.main,
            }}
          />
        }
        title={"32,441"}
        subTitle={"New Clients"}
        data={data3}
        count={"5%"}
        scheme={"tableau10"}
      />
      <Card
        icon={
          <TrafficIcon
            sx={{
              fontSize: "23px",
              color: theme.palette.secondary.main,
            }}
          />
        }
        title={"1,325,134"}
        subTitle={"Traffic Received"}
        data={data4}
        count={"45%"}
        scheme={"set3"}
      />
    </Stack>
  );
}

export default Row01;
