import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Box,
  Hidden,
  Container,
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
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import NavBarLink from "./navbarlink";
const Navbar = () => {
  const { isUserSignedIn } = useAuth();
  const navLinks = [
    { link: "/challenges", text: "حق طلبی", icon: <AccessibleForwardIcon /> },
    { link: "/scores", text: "جدول امتیازات", icon: <AssessmentIcon /> },
    { link: "#", text: "فروم", icon: <ForumIcon /> },
    {
      link: "/Question",
      text: "طرح سوال",
      icon: <AirlineSeatLegroomExtraIcon />,
      show: isUserSignedIn,
    },
    { link: "/school", text: "آکادمی", icon: <SchoolIcon /> },
  ];
  return (
    <AppBar position="static" sx={{ borderRadius: "10px" }}>
      <Toolbar>
        <Hidden lgDown>
          <img src={sample_logo} alt="logo" height="50px" />
          <Link to="/">
            <Typography
              fontFamily={"vazirmatn"}
              variant="h6"
              sx={{
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
                      link={"/signup"}
                      text={"ثبت نام"}
                      icon={<AirOutlinedIcon />}
                    />
                    <NavBarLink
                      link={"/login"}
                      text={"ورود"}
                      icon={<LoginIcon />}
                    />
                  </Box>
                </Grid>{" "}
              </>
            )}
            {isUserSignedIn && (
              <>
                <Grid item md={3}></Grid>
                <Grid item md={2}>
                  <CustomizedMenus />
                </Grid>
              </>
            )}
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Box sx={{justifyContent: "center" }}>
            <img src={sample_logo} alt="logo" height="50px" />
          </Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
