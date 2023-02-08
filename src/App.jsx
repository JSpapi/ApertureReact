import React from "react";
import { About } from "./components/about/About";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Example } from "./components/workExamples/Example";
import exampleWork1 from "./assets/imgs/sectionBg/exampleWork-1.png";
import exampleWork2 from "./assets/imgs/sectionBg/exampleWork-2.png";
import exampleWork3 from "./assets/imgs/sectionBg/exampleWork-3.png";
import "./styles/App.scss";
import { Tools } from "./components/Usedtools/Tools";

function App() {
  return (
    <div className="App">
      {/* NAVBAR----------------------- */}
      <Navbar />
      {/*HEADER----------------------- */}
      <Header
        settings={{
          shutter: "1/2000s",
          aperture: "f/11",
          iso: "100",
          location: "Iceland",
        }}
      />
      <div className="main">
        {/*ABOUT  SECTION----------------------- */}
        <About />
        {/*EXAMPLE  SECTION----------------------- */}
        <Example
          img={exampleWork1}
          title={"Sunset at Mount Fuji"}
          text={
            "Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non."
          }
          settings={{
            shutter: "1''",
            aperture: "f/16",
            iso: "400",
            location: "Japan",
          }}
        />
        {/*TOOLS  SECTION----------------------- */}
        <Tools
          settings={{
            shutter: "0,8''",
            aperture: "f/5,6",
            iso: "100",
            location: "Sweden",
          }}
        />
        {/*EXAMPLE  SECTION----------------------- */}
        <Example
          img={exampleWork2}
          title={"Monstera Leafs"}
          text={
            "Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt."
          }
          settings={{
            shutter: "1/400s",
            aperture: "f/3,5",
            iso: "100",
            location: "Costa Rica",
          }}
        />
        {/*CLIENTS  SECTION----------------------- */}
      </div>
    </div>
  );
}

export default App;
