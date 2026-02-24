import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

const App = () => {
  //App component is an arrow function
  return (  <div className="container mx-auto max-w-7xl">
  <Navbar />
  <Hero />
  <About />
  <section className="min-h-screen" />
  <section className="min-h-screen" />
  <section className="min-h-screen" />
  <section className="min-h-screen" />
  <section className="min-h-screen" />
  </div>
  );

};

export default App; // makes this exportable/resusable in other files