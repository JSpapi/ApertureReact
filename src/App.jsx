import React from "react";
import { About } from "./components/about/About";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="main">
        <About />
      </div>
    </div>
  );
}

export default App;
