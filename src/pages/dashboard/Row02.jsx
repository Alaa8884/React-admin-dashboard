import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../lineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "../../assets/data/dashboardData";

function Row02() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1}>
      <Paper
        sx={{
          minWidth: "300px",
          maxWidth: "900px",
          flexGrow: 1,
          background:
            theme.palette.mode === "light" ? theme.palette.grey[100] : "",
          borderRadius: "4px",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              sx={{ margin: "10px" }}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={1}>
              156.350.45 EGP
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              {" "}
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard={true} />
      </Paper>
      <Box
        sx={{
          background:
            theme.palette.mode === "light" ? theme.palette.grey[100] : "",
          borderRadius: "4px",
          minWidth: "280px",
          maxHeight: 355,
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Paper
          sx={{
            background:
              theme.palette.mode === "light" ? theme.palette.grey[100] : "",
          }}
        >
          <Typography
            color={
              theme.palette.secondary.main
            }
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
          {Transactions.map((item) => {
            return (
              <Paper
                sx={{
                  mt: 0.5,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background:
                    theme.palette.mode === "light"
                      ? theme.palette.grey[100]
                      : "",
                }}
                key={item.txId}
              >
                <Box p={1.2}>
                  <Typography variant="body1">{item.txId}</Typography>
                  <Typography variant="body2">{item.user} </Typography>
                </Box>
                <Typography variant="body1">{item.date} </Typography>

                <Typography
                  borderRadius={1.4}
                  p={1}
                  bgcolor={theme.palette.error.main}
                  color={theme.palette.getContrastText(
                    theme.palette.error.main
                  )}
                  variant="body2"
                >
                  ${item.cost}
                </Typography>
              </Paper>
            );
          })}
        </Paper>
      </Box>
    </Stack>
  );
}

export default Row02;
