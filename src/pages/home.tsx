import React, { useRef, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Box,
  createTheme,
  ThemeProvider,
  CardActionArea,
} from "@mui/material";
import learn from "../assets/learn.png";
import learn2 from "../assets/learn2.jpg";
import learning_community from "../assets/learning_community.png";
import sample_logo from "../assets/sample_logo.png";
import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Home = () => {
  //   const history = useHistory();
  const formRef = useRef(null);
  const [count, setCount] = useState(0);
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Grid container spacing={0} mt={-4}>
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <img
              src={sample_logo}
              alt="Logo"
              className="mx-auto"
              height="300"
              style={{ maxWidth: "500px" }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={0} style={{ marginBottom: "16px" }}>
          <Grid item xs={5}></Grid>
          <Grid item xs={3}>
            <Typography
              variant="h5"
              style={{

                fontWeight: "bold",
              }}
            >
              آموزش ، یادگیری ، رقابت
            </Typography>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>

        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={5}>
            <Typography
              style={{
                fontWeight: "bold",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={10} mt={-5}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  src={learn}
                  alt="Learn"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    آموزش
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ fontSize: "15px" }}
                    className="custom-text"
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className="mx-auto" sx={{ maxWidth: 345 }}>
              <CardMedia
                height="140"
                component="img"
                src={learn2}
                alt="Learn 2"
              />
              <CardContent>
                <Typography variant="h6" className="custom-text">
                  یادگیری
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ fontSize: "15px" }}
                  className="custom-text"
                >
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className="mx-auto" sx={{ maxWidth: 345 }}>
              <CardMedia
                height="140"
                component="img"
                src={learning_community}
                alt="Learning Community"
              />
              <CardContent>
                <Typography variant="h6" className="custom-text">
                  رقابت
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ fontSize: "15px" }}
                  className="custom-text"
                >
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
