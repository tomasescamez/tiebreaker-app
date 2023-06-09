import { Outlet } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Avatar,
  Typography,
  TextField,
  Toolbar,
  Box,
  Autocomplete,
  Stack,
  FormControl,
  MenuItem,
  Select,
  ExtendButtonBase,
  IconButtonTypeMap,
} from "@mui/material";

import {
  SearchOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  Menu,
} from "@mui/icons-material";
import Slider from "../../components/slider/slider.component";
import React from "react";
import { Link } from "react-router-dom";

const HamburgerIcon: ExtendButtonBase<IconButtonTypeMap<{}, "button">> = (
  props: React.PropsWithChildren
) => (
  <IconButton color="inherit" aria-label="open drawer" edge="start" {...props}>
    <Menu />
  </IconButton>
);

const top100Players = [
  { label: "Roger Federer", year: 1994 },
  { label: "Rafael Nadal", year: 1972 },
  { label: "Novak Djokovic", year: 1974 },
];

const Navigation: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box display="flex" flexDirection="row">
      {open && <Slider isOpen={open} handleDrawerClose={handleDrawerClose} />}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: "100vh",
        }}
      >
        <AppBar color="default" position="sticky" elevation={1}>
          <Toolbar
            sx={{
              paddingLeft: {
                sm: "24px",
                md: "24px",
              },
            }}
          >
            {!open && <HamburgerIcon onClick={handleDrawerOpen} />}

            <Stack
              direction="row"
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" flex={1}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Players}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Players" />
                  )}
                />
              </Stack>
              <Stack direction="row" alignItems="center">
                <IconButton
                  onClick={() => {
                    console.log("set dark or light mode");
                  }}
                >
                  {/* {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />} */}
                  <DarkModeOutlined />
                </IconButton>
                <Stack
                  direction="row"
                  gap="4px"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="subtitle2">Tomas Escamez</Typography>
                  <Link to="/profile">
                    <Avatar
                      src="https://i.pravatar.cc/150"
                      alt="Tomas Escamez"
                    />
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            p: { xs: 1, md: 2, lg: 3 },
            flexGrow: 1,
            bgcolor: (theme) => theme.palette.background.default,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
