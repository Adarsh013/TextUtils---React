import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from './components/About';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";

      // setInterval(() => {
      //   document.title = "Download TextUtils Right Now"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Please Download text utils right now"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" AboutText="About" AboutSearch="Search"/> */}
      {/* For Understanding defaultProps */}
      {/* { <Navbar/> } */}

      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}

{/* using "exact" is a good practice so that react will look for the exact match not similar */}
            {/* <Route exact path="/about" element={<About />} />
            <Route exact path="/"
              element={
                <Textform showAlert={showAlert} Heading="Enter text for Testing" mode={mode} />
              }
            />
          </Routes> */}

          <Textform showAlert={showAlert} Heading="Enter text for Testing" mode={mode} />
          {/* <About/> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;