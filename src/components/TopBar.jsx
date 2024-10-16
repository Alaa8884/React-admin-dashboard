/* eslint-disable react/prop-types */
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import { styled, alpha } from "@mui/material/styles";
import { Box, Stack, Tooltip, useTheme } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      // @ts-ignore
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function TopBar({ open, handleDrawerOpen, handleToggleColorMode }) {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              marginRight: { xs: 2, sm: 5 },
            },
            open && { display: "none" },
          ]}
        >
          <MenuIcon sx={{ fontSize: { xs: "22px", sm: "25px" } }} />
        </IconButton>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box flexGrow={1}></Box>

        <Stack direction="row" sx={{ gap: { xs: 0, sm: 2 } }}>
          <Tooltip
            title={theme.palette.mode === "light" ? "Dark mode" : "Light mode"}
            placement="bottom"
          >
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={handleToggleColorMode}
                color="inherit"
                aria-label="light-mode"
              >
                <LightModeOutlinedIcon
                  sx={{ fontSize: { xs: "20px", sm: "25px" } }}
                />
              </IconButton>
            ) : (
              <IconButton
                onClick={handleToggleColorMode}
                color="inherit"
                aria-label="dark-mode"
              >
                <DarkModeOutlinedIcon
                  sx={{ fontSize: { xs: "20px", sm: "25px" } }}
                />
              </IconButton>
            )}
          </Tooltip>
          <Tooltip title={"Show notifications"} placement="bottom">
            <IconButton color="inherit" aria-label="notifications">
              <NotificationsNoneOutlinedIcon
                sx={{ fontSize: { xs: "20px", sm: "25px" } }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Settings"} placement="bottom">
            <IconButton color="inherit" aria-label="settings">
              <SettingsOutlinedIcon
                sx={{ fontSize: { xs: "20px", sm: "25px" } }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Your profile"} placement="bottom">
            <IconButton color="inherit" aria-label="user">
              <AccountCircleOutlinedIcon
                sx={{ fontSize: { xs: "20px", sm: "25px" } }}
              />
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
