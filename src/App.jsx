import { useState } from "react";
import { useMemo } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { getDesignTokens } from "./components/theme";
import { Outlet } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(
    window.localStorage.getItem("currMode")
      ? window.localStorage.getItem("currMode")
      : "light"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleToggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    window.localStorage.setItem(
      "currMode",
      `${theme.palette.mode === "light" ? "dark" : "light"}`
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", height: "100vh", }}>
        <CssBaseline />
        <TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleToggleColorMode={handleToggleColorMode}
        />
        <SideBar handleDrawerClose={handleDrawerClose} open={open} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
