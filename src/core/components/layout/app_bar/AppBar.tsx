import React, { FC, useContext, useEffect } from "react";
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
import Button from "@mui/material/Button";
import { Logo, PageContent } from "./style";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../../../../pages/home/Home";
import { PageProps } from "./types";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Menu as MenuComponent } from "../../../../pages/menu/Menu";
import { Brunchs } from "../../../../pages/brunchs/Brunchs";
import {
  AccountCircle,
  LoginOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import {
  Alert,
  ListItemIcon,
  Menu,
  MenuItem,
  Snackbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NotFound } from "../../../../pages/not_found/NotFound";
import Login from "../../../../pages/login/Login";
import { SnackBarContext } from "../../../contexts/SnackBarContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { logout } from "../../../services/authentication_service";
import Footer from "../footer/Footer";
import { scrollToTop } from "../../../helpers/layout";
import Caterer from "../../../../pages/caterer/Caterer";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export const APP_BAR_HEIGHT_PX = 80;

const drawerWidth = 240;
const pages: PageProps[] = [
  {
    title: "Accueil",
    path: "/",
    element: <Home />,
  },
  {
    title: "Menu",
    path: "/menu",
    element: <MenuComponent />,
  },
  {
    title: "Brunchs",
    path: "/brunchs",
    element: <Brunchs />,
  },
  {
    title: "Traiteur",
    path: "/caterer",
    element: <Caterer />,
  },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {pages.map((page) => (
        <Route key={page.title} path={page.path} element={page.element} />
      ))}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

const CHECK_AUTH_INTERVAL_MINUTES = 5;

const DrawerAppBar: FC<Props> = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up("sm"));
  const { open, message, setOpen, type } = useContext(SnackBarContext);
  const { isAuthenticated, checkAuthStatus } = useContext(AuthContext);

  const onMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      checkAuthStatus();
    }, CHECK_AUTH_INTERVAL_MINUTES * 60_000);

    return () => clearInterval(interval);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        <ListItem>
          <Logo
            src="/assets/candylau.svg"
            width="100%"
            onClick={() => {
              router.navigate("/");
              scrollToTop();
            }}
          />
        </ListItem>
        <Divider sx={{ marginBottom: "1rem" }} />
        {pages.map((page) => (
          <ListItem key={page.title} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                router.navigate(page.path);
                scrollToTop();
              }}
            >
              <ListItemText primary={page.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1em",
        }}
      >
        <IconButton
          color="primary"
          aria-label="instagram"
          href="https://www.instagram.com/candylau.craponne?igsh=MTNneDFuM3pldjkxaw=="
          target="_blank"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="facebook"
          href="https://www.facebook.com/share/15X1L1VddJ/?mibextid=LQQJ4d"
          target="_blank"
        >
          <FacebookIcon />
        </IconButton>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar component="nav" color="inherit">
        <Toolbar
          sx={{
            height: `${APP_BAR_HEIGHT_PX}px`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.5em",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Logo
              src="/assets/candylau.svg"
              height="100%"
              onClick={() => {
                router.navigate("/");
                scrollToTop();
              }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              height: "100%",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              gap: "1em",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                color="primary"
                onClick={() => {
                  router.navigate(page.path);
                  scrollToTop();
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignSelf: "flex-end",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "1em",
            }}
          >
            {!isMobile && (
              <>
                <IconButton
                  color="primary"
                  aria-label="instagram"
                  href="https://www.instagram.com/candylau.craponne?igsh=MTNneDFuM3pldjkxaw=="
                  target="_blank"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="facebook"
                  href="https://www.facebook.com/share/15X1L1VddJ/?mibextid=LQQJ4d"
                  target="_blank"
                >
                  <FacebookIcon />
                </IconButton>
              </>
            )}
            <div>
              <IconButton onClick={onMenuOpen} color="primary">
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {isAuthenticated ? (
                  <MenuItem
                    onClick={() => {
                      logout().then(() => checkAuthStatus());
                      setOpen({
                        open: true,
                        message: "Déconnexion réussie !",
                        type: "success",
                      });
                      handleClose();
                    }}
                  >
                    <ListItemIcon>
                      <LogoutOutlined color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                  </MenuItem>
                ) : (
                  <MenuItem
                    onClick={() => {
                      router.navigate("/login");
                      handleClose();
                    }}
                  >
                    <ListItemIcon>
                      <LoginOutlined color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Login</ListItemText>
                  </MenuItem>
                )}
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        component="main"
        sx={{ width: "100%", backgroundColor: "#ef2c930d" }}
      >
        <Toolbar
          sx={{
            height: `${APP_BAR_HEIGHT_PX}px`,
          }}
        />
        <PageContent>
          <RouterProvider router={router} />
          <Footer />
        </PageContent>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen({ open: false })}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert severity={type}>{message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default DrawerAppBar;
