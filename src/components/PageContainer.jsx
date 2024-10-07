/* eslint-disable react/prop-types */
import { Box, useTheme } from "@mui/material";
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
            theme.palette.mode === "light"
              ? theme.palette.grey[300]
              : theme.palette.grey[700],
        },
        overflow: "auto",
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "red",
          borderBottom: "none",
        }
      }}
    >
      <HeaderInfo title={containerTitle} subTitle={containerSubTitle} />
      {children}
    </Box>
  );
}

export default PageContainer;
