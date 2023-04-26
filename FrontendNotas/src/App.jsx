import "./scss/App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Welcome from "./components/pages/Welcome";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";
import { useEffect, useState } from "react";

function App() {
  const [Token, setToken] = useState(localStorage.getItem("token"));
  const [User, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    if (Token && User) {
      localStorage.setItem("token", Token);
      localStorage.setItem("user", JSON.stringify(User));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }, [Token, User]);

  return (
    <div className="App">
      <Navbar User={User} setUser={setUser} />
      <main>
        <Routes>
          <Route exact path="/" element={<Welcome User={User} />} />
          <Route
            path="/Login"
            element={<Login setUser={setUser} setToken={setToken} />}
          />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home User={User} Token={Token} />} />
          <Route path="/Profile" element={<Profile User={User} />} />
          <Route path="*" element={<Navigate to="/Home" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
