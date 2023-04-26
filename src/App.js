import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support";
import AllInOne from "./components/AllInOne";
import Princing from "./components/Princing";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Princing />
      <Footer />
    </Fragment>
  );
}

export default App;
