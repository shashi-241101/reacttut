import "./App.css";
import Navbar from "./Components/Navbar";
// import About from './Components/About';
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [btntext, setbtntext] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);
  const showalerts = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#060d23";
      showalerts("Dark Mode On", "success");
      setbtntext("Light Mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setbtntext("Dark Mode");
      showalerts("Light Mode On", "success");
    }
  };
  return (
    <>
      <Navbar
        title="Textutils"
        mode={mode}
        toggleMode={toggleMode}
        btntxt={btntext}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform
          heading="Enter your text here"
          mode={mode}
          showalerts={showalerts}
        />
      </div>
    </>
  );
}

export default App;
