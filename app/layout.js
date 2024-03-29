"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Link from "next/link";

const drawerWidth = 240;

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { window } = children;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleDrawerData = (DrawerCalculator) => {
    setCalStatus(DrawerCalculator);
  };

  const handleCloseMobile = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <>
      <List>
        <Link onClick={() => handleCloseMobile()} href="/factors">
          <ListItem key={"Factors"} disablePadding>
            <ListItemButton>
              <ListItemText primary={"Factors"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link onClick={() => handleCloseMobile()} href="/HCF">
          <ListItem key={"HCF"} disablePadding>
            <ListItemButton>
              <ListItemText primary={"HCF"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link onClick={() => handleCloseMobile()} href="LCM">
          <ListItem key={"LCM"} disablePadding>
            <ListItemButton>
              <ListItemText primary={"LCM"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link onClick={() => handleCloseMobile()} href="Power">
          <ListItem key={"Power"} disablePadding>
            <ListItemButton>
              <ListItemText primary={"Power"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link onClick={() => handleCloseMobile()} href="SQRT">
          <ListItem key={"Square Root"} disablePadding>
            <ListItemButton>
              <ListItemText primary={"Square Root"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link onClick={() => handleCloseMobile()} href="QuardicRoots">
          <ListItem key={"Roots of quardic equation"} disablePadding>
            <ListItemButton>
              <ListItemText primary={"Roots of quardic equation"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </>
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-zinc-400 mb-20">
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
              position="fixed"
              sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Image src="/icons8.svg" width={40} height={40} alt="!" />
                <Typography variant="h5" noWrap component="div">
                  Calculators
                </Typography>
              </Toolbar>
            </AppBar>
            <Box
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
              aria-label="mailbox folders"
            >
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                <Toolbar />
                {drawer}
              </Drawer>
              <Drawer
                variant="permanent"
                sx={{
                  display: { xs: "none", sm: "block" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                    height: `calc(100vh - 52px)`
                  },
                }}
                open
              >
                <Toolbar />
                {drawer}
              </Drawer>
              <footer className="bg-gray-800 text-white py-4 text-center fixed left-0 w-full bottom-0 z-50">
                <div className="container mx-auto px-4 text-sm">
                  <p>
                    Copyright © 2024{" "}
                    <a href="https://chandoraajay.tech" target="blank">
                      ChandoraAjay.tech
                    </a>
                  </p>
                </div>
              </footer>
            </Box>
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </Box>
        </div>
      </body>
    </html>
  );
}
