import { useLocation, useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import { styled, useTheme } from "@mui/material/styles";
import { Avatar, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const array01 = [
  {
    text: "Dashboard",
    icon: <HomeOutlinedIcon />,
    path: "/",
  },
  {
    text: "Manage Team",
    icon: <PeopleOutlineOutlinedIcon />,
    path: "/manage",
  },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
];
const array02 = [
  {
    text: "Profile Form",
    icon: <PersonOutlinedIcon />,
    path: "/profile",
  },
  {
    text: "Calender",
    icon: <CalendarMonthOutlinedIcon />,
    path: "/calender",
  },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    path: "/faq",
  },
];

const array03 = [
  {
    text: "Bar Chart",
    icon: <BarChartOutlinedIcon />,
    path: "/bar",
  },
  {
    text: "Pie Chart",
    icon: <PieChartOutlineOutlinedIcon />,
    path: "/pie",
  },
  {
    text: "Line Chart",
    icon: <TimelineOutlinedIcon />,
    path: "/line",
  },
  {
    text: "Geography Chart",
    icon: <MapOutlinedIcon />,
    path: "/geography",
  },
];

// eslint-disable-next-line react/prop-types
function SideBar({ open, handleDrawerClose }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <Avatar
        sx={{
          mx: "auto",
          width: open ? 70 : 45,
          height: open ? 70 : 45,
          my: 1,
          border:
            theme.palette.mode === "light"
              ? "2px solid #b39ddb "
              : "2px solid #7e57c2" ,
          transition: "0.4s",
        }}
        alt="Alaa Mohammed"
        src="assets/images/admin.jfif"
      />

      <Typography
        align="center"
        sx={{ fontSize: open ? 17 : 0, fontWeight: "bold", transition: "0.4s" }}
      >
        Alaa Mohammed
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 14 : 0,
          fontWeight: "bold",
          color: theme.palette.info.main,
          transition: "0.4s",
        }}
      >
        Admin
      </Typography>

      <Divider />
      <List>
        {array01.map((item) => (
          <ListItem
            key={item.path}
            disablePadding
            sx={{
              display: "block",
              ":hover": {
                bgcolor:
                  theme.palette.mode === "light"
                    ? deepPurple[200]
                    : deepPurple[400],
              },
              transition: " 0.4s",
              ":focus": {
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "light"
                      ? deepPurple[200]
                      : deepPurple[400]
                    : null,
              },
            }}
          >
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "light"
                        ? deepPurple[200]
                        : deepPurple[400]
                      : null,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {array02.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              display: "block",
              ":hover": {
                bgcolor:
                  theme.palette.mode === "light"
                    ? deepPurple[200]
                    : deepPurple[400],
              },
              transition: " 0.4s",
              ":focus": {
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "light"
                      ? deepPurple[200]
                      : deepPurple[400]
                    : null,
              },
            }}
          >
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "light"
                        ? deepPurple[100]
                        : deepPurple[300]
                      : null,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {array03.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              display: "block",
              ":hover": {
                bgcolor:
                  theme.palette.mode === "light"
                    ? deepPurple[200]
                    : deepPurple[400],
              },
              transition: " 0.4s",
              ":focus": {
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "light"
                      ? deepPurple[200]
                      : deepPurple[400]
                    : null,
              },
            }}
          >
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "light"
                        ? deepPurple[100]
                        : deepPurple[300]
                      : null,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;
