/* eslint-disable react/prop-types */
import { Box, useTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";


function PageContainer({ children }) {
  const theme = useTheme()
  return (
    <Box
      sx={{
        height: 650,
        mx: "auto",
        ".team-info": {
          backgroundColor:
            theme.palette.mode === "light" ? deepPurple[100] : deepPurple[300],
        },
        overflow: "auto",
      }}
    >
      {children}
    </Box>
  );
}

export default PageContainer;
