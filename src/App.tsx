import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
