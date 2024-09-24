import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { styled } from "@mui/material/styles";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideBar handleDrawerClose={handleDrawerClose} open={open} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>HALLO world</Typography>
      </Box>
    </Box>
  );
}
