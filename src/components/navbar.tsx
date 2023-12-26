import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Stack,
  ButtonGroup,
  Box,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import sample_logo from "../assets/sample_logo.png";
import { Link } from "react-router-dom";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ForumIcon from "@mui/icons-material/Forum";
import SchoolIcon from "@mui/icons-material/School";
import Person2Icon from "@mui/icons-material/Person2";
import { useAuth } from "../context/AuthContext";
import CustomizedMenus from "./customMenu";
import LoginIcon from "@mui/icons-material/Login";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
function Navbar() {
  const { user, isUserSignedIn } = useAuth();
  const containerStyle = {
    height: "75px",
  };
  const imageStyle = {
    width: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  };
  return (
    <AppBar position="static" sx={{ bgcolor: "#0F1924", borderRadius: "10px" }}>
      <Toolbar>
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
        <Grid container spacing={10}>
          <Grid item xs={isUserSignedIn ? 7 : 6}>
            <Box style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link to="/challanges">
                <Button
                  sx={{
                    marginRight: "30px",
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                  startIcon={<AccessibleForwardIcon />}
                >
                  {" "}
                  <Typography fontFamily={"vazirmatn"} fontSize={"15px"}>
                    حق طلبی
                  </Typography>
                </Button>
              </Link>
              <Link to="/Scores">
                <Button
                  sx={{
                    marginRight: "30px",
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                  startIcon={<AssessmentIcon />}
                >
                  {" "}
                  <Typography fontFamily={"vazirmatn"} fontSize={"15px"}>
                    جدول امتیازات
                  </Typography>
                </Button>
              </Link>
              <Button
                sx={{
                  marginRight: "30px",
                  "&:focus": {
                    outline: "none",
                  },
                }}
                startIcon={<ForumIcon />}
              >
                {" "}
                <Typography fontFamily={"vazirmatn"} fontSize={"15px"}>
                  فروم
                </Typography>
              </Button>
              {isUserSignedIn && (
                <Link to="/Question">
                  <Button
                    sx={{
                      marginRight: "30px",
                      "&:focus": {
                        outline: "none",
                      },
                    }}
                    startIcon={<AirlineSeatLegroomExtraIcon />}
                  >
                    {" "}
                    <Typography fontFamily={"vazirmatn"} fontSize={"15px"}>
                      طرح سوال
                    </Typography>
                  </Button>
                </Link>
              )}
              <Link to="/school">
                <Button
                  sx={{
                    marginRight: "30px",
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                  startIcon={<SchoolIcon />}
                >
                  {" "}
                  <Typography fontFamily={"vazirmatn"} fontSize={"15px"}>
                    آکادمی
                  </Typography>
                </Button>
              </Link>
            </Box>
          </Grid>
          {!isUserSignedIn && (
            <>
              <Grid item xs={isUserSignedIn ? 1 : 2}></Grid>
              <Grid item xs={4}>
                <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Link to="/signup">
                    <Button
                      startIcon={<AirOutlinedIcon />}
                      sx={{
                        marginRight: "30px",
                        "&:focus": {
                          outline: "none",
                        },
                      }}
                    >
                      {" "}
                      <Typography fontFamily={"vazirmatn"} fontSize={"15px"}>
                        ثبت نام
                      </Typography>
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button
                      startIcon={<LoginIcon />}
                      sx={{
                        marginRight: "30px",
                        "&:focus": {
                          outline: "none",
                        },
                      }}
                    >
                      {" "}
                      <Typography fontFamily={"vazirmatn"} fontSize={"15px"}>
                        ورود
                      </Typography>
                    </Button>
                  </Link>
                </Box>
              </Grid>{" "}
            </>
          )}
          {isUserSignedIn && (
            <>
              <Grid item xs={3}></Grid>
              <Grid item xs={2}>
                <CustomizedMenus />
              </Grid>
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
