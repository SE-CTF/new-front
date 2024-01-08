import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Box,
  Hidden,
  IconButton,
} from "@mui/material";
import sample_logo from "../assets/sample_logo.png";
import { Link } from "react-router-dom";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ForumIcon from "@mui/icons-material/Forum";
import SchoolIcon from "@mui/icons-material/School";
import { useAuth } from "../context/AuthContext";
import CustomizedMenus from "./customMenu";
import LoginIcon from "@mui/icons-material/Login";
import LightModeIcon from "@mui/icons-material/LightMode";
import NavBarLink from "./navbarlink";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const { isUserSignedIn, changeMode, mode } = useAuth();
  const navLinks = [
    { link: "/challenges", text: "حق طلبی", icon: <AccessibleForwardIcon /> },
    { link: "/scores", text: "جدول امتیازات", icon: <AssessmentIcon /> },
    { link: "#", text: "فروم", icon: <ForumIcon /> },
    // {
    //   link: "/Question",
    //   text: "طرح سوال",
    //   icon: <AirlineSeatLegroomExtraIcon />,
    //   show: isUserSignedIn,
    // },
    { link: "/school", text: "آکادمی", icon: <SchoolIcon /> },
  ];
  return (
    <AppBar elevation={5} position="static" sx={{ borderRadius: "5px" }}>
      <Toolbar>
        <Hidden lgDown>
          <img src={sample_logo} alt="logo" height="50px" />
          <Link to="/">
            <Typography
              variant="h6"
              sx={{
                color: mode == "dark" ? "primary" : "white",
                flexGrow: 1,
                whiteSpace: "nowrap",
              }}
            >
              سامانه جامع حق طلبان
            </Typography>
          </Link>
        </Hidden>
        <Hidden mdDown>
          <Grid container spacing={10}>
            <Grid item md={isUserSignedIn ? 7 : 6} sm={isUserSignedIn ? 8 : 7}>
              <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                {navLinks.map((link, index) => (
                  <>
                    {link.show !== false && (
                      <NavBarLink
                        link={link.link}
                        text={link.text}
                        icon={link.icon}
                      />
                    )}
                  </>
                ))}
              </Box>
            </Grid>
            {!isUserSignedIn && (
              <>
                <Grid item md={isUserSignedIn ? 1 : 2} sm={0}></Grid>
                <Grid item md={4}>
                  <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                    <NavBarLink
                      link={"/login"}
                      text={"ورود/ثبت‌نام"}
                      icon={<LoginIcon />}
                    />
                    <Grid md={1}>
                      <IconButton
                        sx={{
                          "&:focus": {
                            outline: "none",
                          },
                        }}
                        onClick={changeMode}
                      >
                        {mode == "dark" ? <DarkModeIcon /> : <LightModeIcon />}
                      </IconButton>
                    </Grid>
                  </Box>
                </Grid>{" "}
              </>
            )}
            {isUserSignedIn && (
              <>
                <Grid item md={2}></Grid>
                <Grid item md={2}>
                  <CustomizedMenus />
                </Grid>
              </>
            )}
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box margin={"auto"} sx={{ justifyContent: "center" }}>
            <img src={sample_logo} alt="logo" height="50px" />
          </Box>
          <Link to={""}>
            <Box display={"inline"}>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="login"
                sx={{
                  mr: 2,
                }}
              >
                <LoginIcon />
              </IconButton>
              <Typography variant="body1">{"ورود"} </Typography>
            </Box>
          </Link>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
