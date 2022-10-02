import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WCards from "./components/WCards";
import MCards from "./components/MCards";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <WCards />
        <MCards />
    </div>
  );
}

export default App;
