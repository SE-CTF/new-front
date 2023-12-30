import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Hidden,
  Box,
  Paper,
  Avatar,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
  useMediaQuery,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginImg from "../assets/login-img.png";
import LockIcon from "@mui/icons-material/Lock";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import sample_logo from "../assets/sample_logo.png";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import TokenService from "../utils/tokenAccess";
import { Credentials, useAuth } from "../context/AuthContext";
import { useTheme } from '@mui/material/styles';

interface FormData {
  email: string;
  password: string;
}

const SignUpForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
  const isTablet = useMediaQuery(useTheme().breakpoints.down('md'));
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isSignedUp, setIsSignedUp] = React.useState(false);
  const { signIn } = useAuth();
  const [open, setOpen] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    axios
      .post("http://localhost:8000/api/auth/signup/", data)
      .then(function (response) {
        console.log(response);
        const token = response.data.access;
        const credentials: Credentials = {
          email: response.data.email,
        };
        signIn(credentials, token);
        setIsSignedUp(true);
      })
      .catch(function (error) {
        console.log(error);
        setOpen(true);
      });
  };
  const customInputLabelStyle = {
    color: "#3498db",
    fontFamily: "vazirmatn",
  };
  const customInputInputProps = {
    color: "#3498db",
    background: "#2c3e50",
    borderRadius: "8px",
    fontFamily: "vazirmatn",
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {isSignedUp && <Navigate to="/" replace={true} />}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="error">
          <Typography fontFamily={"vazirmatn"}>
            {" "}
            ایمیل یا نام کاربری تکراری میباشد
          </Typography>
        </Alert>
      </Snackbar>
      <Paper
        square={false}
        elevation={10}
        sx={{ m: 1, height: "80vh" }}
        style={{
          marginTop: "5vh",
          marginRight: "auto",
          marginLeft: "auto",
          maxWidth: isMobile?"90vw":isTablet?"50vw":"30vw",
          borderRadius: "10px",
        }}
      >
        <Grid justifyContent="center" alignItems="center">
          {/* <Grid item>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingTop={"5%"}
          >
            <Avatar style={{ backgroundColor: "#1bbd7e" }}>
              <LockIcon />
            </Avatar>
          </Box>
        </Grid> */}
          <Grid item lg={2} xs={12}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              paddingTop={"0%"}
            >
              <img
                src={sample_logo}
                alt="Logo"
                className="mx-auto"
                height="185"
                style={{ maxWidth: "500px" }}
              />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography fontFamily={"vazirmatn"} variant="h3" color={"white"}>
                {" "}
                ثبت نام
              </Typography>
            </Box>
          </Grid>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box justifyContent="center" alignItems="center" m={"5%"} mt={"5%"}>
              <TextField
                {...register("username", { required: true })}
                id="username"
                InputLabelProps={{
                  style: customInputLabelStyle,
                }}
                InputProps={{
                  style: customInputInputProps,
                }}
                label="نام کاربری"
                type="text"
                placeholder="نام کاربری خود را وارد کنید"
                fullWidth
                required
              />
            </Box>
            <Box justifyContent="center" alignItems="center" m={"5%"} mt={"5%"}>
              <TextField
                {...register("email", { required: true, minLength: 8 })}
                id="email"
                InputLabelProps={{
                  style: customInputLabelStyle,
                }}
                InputProps={{
                  style: customInputInputProps,
                }}
                label="ایمیل"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                fullWidth
                required
              />
            </Box>
            <Box justifyContent="center" alignItems="center" m={"5%"} mt={"5%"}>
              <TextField
                {...register("password", { required: true, minLength: 8 })}
                InputLabelProps={{
                  style: customInputLabelStyle,
                }}
                InputProps={{
                  style: customInputInputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                label="رمز عبور"
                placeholder="رمز عبور خود را وارد کنید."
                type={showPassword ? "text" : "password"}
                fullWidth
                required
              />
            </Box>
            <Box
              justifyContent="center"
              alignItems="center"
              mt={"5%"}
              ml={"35%"}
              mr={"35%"}
            >
              <Button
                type="submit"
                style={{ backgroundColor: "#67b26f" }}
                variant="contained"
                fullWidth
              >
                <Typography fontFamily={"vazirmatn"}>ثبت نام</Typography>
              </Button>
            </Box>
          </form>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={"5%"}
            ml={"5%"}
            mr={"20%"}
          >
            <Typography fontFamily={"vazirmatn"}>ثبت نام کرده اید؟ </Typography>
            <Link to="/login">
              <Typography color={"white"} fontFamily={"vazirmatn"}>
                ورود
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Paper>
    </>
  );
};

export default SignUpForm;
