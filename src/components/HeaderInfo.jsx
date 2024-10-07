/* eslint-disable react/prop-types */
import { Box, Typography, useTheme } from "@mui/material";

function HeaderInfo({ title, subTitle, isDashboard = false }) {
  document.title = "Admin dashboard " + title + " page";
  const theme = useTheme();
  return (
    <Box sx={{ mb: isDashboard ? 0 : 1.5 }}>
      <Typography
        variant="h5"
        fontWeight={"bold"}
        sx={{
          color: theme.palette.info.light,
          fontSize: { xs: "20px", sm: "25px" },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        fontWeight={"bold"}
        sx={{ fontSize: { xs: "11px" } }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
}

export default HeaderInfo;
