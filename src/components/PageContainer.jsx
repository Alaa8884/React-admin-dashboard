/* eslint-disable react/prop-types */
import { Box, useTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import HeaderInfo from "./HeaderInfo";


function PageContainer({ children, containerTitle, containerSubTitle }) {
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
      <HeaderInfo title={containerTitle} subTitle={containerSubTitle} />
      {children}
    </Box>
  );
}

export default PageContainer;
