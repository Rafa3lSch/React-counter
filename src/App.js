import React, { useState } from "react";
import "./App.css";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div className="counter-wht-reset">
          <Decrement value={counter} decrement={setCounter} />
          <p>{counter}</p>
          <Increment value={counter} increment={setCounter} />
        </div>
        <div className="counter-reset">
          <Reset value={0} reset={setCounter} />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
