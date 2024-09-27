import { Button, Paper, Stack, Typography, useTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Stack height={"70vh"} alignItems={"center"} justifyContent={"center"}>
      <Paper
        sx={{
          minWidth: "300px",
          p: 4,
          display: "flex",
          alignItems:"center",
          flexDirection:"column",
         gap:3,
          background: theme.palette.mode === "light" ? deepPurple[50] : "",
          borderRadius: "8px"
        }}
      >
        <Typography
          variant="h4"
          mb={3}
          fontWeight={"bold"}
          color={
            theme.palette.mode === "light" ? deepPurple[600] : deepPurple[300]
          }
        >
          Page not found
        </Typography>
        <Stack
          width={"300px"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Typography variant="h6">Please try again</Typography>
          <Button
            sx={{
              background:
                theme.palette.mode === "light"
                  ? deepPurple[600]
                  : deepPurple[300],
              color: theme.palette.mode === "light" ? "#222" : "#fff",
            }}
            variant="outlined"
            onClick={() => navigate(-1)}
          >
            Go back
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default ErrorPage;
