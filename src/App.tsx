import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login";
import QuickFilteringGrid from "./pages/challanges";
import Scoreboard from "./pages/scoreboard";
import Question from "./pages/question";
import SignUpForm from "./pages/signup";
import Profile from "./pages/profile";
import School from "./pages/school";
import TokenService from "./utils/tokenAccess";
import { useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blueGrey, deepOrange } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";
const darkTheme = createTheme({
  typography: {
    fontFamily: 'vazirmatn, sans-serif',
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#2196F3",
    },
    secondary: {
      main: "#FF4081",
    },
    background: {
      default: "#343541",
      paper: "rgb(0,0,0)",
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/challenges" element={<QuickFilteringGrid />} />
          <Route path="/Scores" element={<Scoreboard />} />
          <Route path="/question" element={<Question />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/school" element={<School />} />
        </Routes>
      </ThemeProvider>
      {""}
    </>
  );
}

export default App;
function useLayoutEffect(
  arg0: () => void,
  arg1: import("react-router-dom").Location<any>[]
) {
  throw new Error("Function not implemented.");
}
