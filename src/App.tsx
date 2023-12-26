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
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("secret-key");

    const isValidToken = token && token.length > 0;
    console.log(isValidToken);
    setIsAuthenticated(isValidToken);
  }, [location]);

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/challanges" element={<QuickFilteringGrid />} />
        <Route path="/Scores" element={<Scoreboard />} />
        <Route path="/question" element={<Question />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/school" element={<School />} />
      </Routes>
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
