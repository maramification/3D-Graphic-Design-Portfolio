import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

const App = () => {
  //App component is an arrow function
  return (  <div className="container mx-auto max-w-7xl">
  <Navbar />
  <Hero />
  </div>
  );

};

export default App; // makes this exportable/resusable in other files