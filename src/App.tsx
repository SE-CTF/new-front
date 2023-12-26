import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login"
import QuickFilteringGrid from './pages/challanges'
import Scoreboard from "./pages/scoreboard";
import Question from "./pages/question";
import SignUpForm from "./pages/signup";
import Profile from "./pages/profile";
import School from "./pages/school";
import TokenService from "./utils/tokenAccess";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = TokenService.getToken;
    const isValidToken = token && token.length > 0;

    setIsAuthenticated(isValidToken);
  }, []);

  return (
    <>
      <Navbar />
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
