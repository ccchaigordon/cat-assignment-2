import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Attractions from "./components/Attractions";
import Food from "./components/Food";
import Hotels from "./components/Hotels";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {" "}
        <div className="fixed w-full z-50">
          <NavBar />
        </div>
        <main className="flex-grow">
          {" "}
          <Hero />
          <About />
          <Attractions />
          <div className="h-[45vh] sm:h-[70vh]">
            <Food />
          </div>
          <Hotels />
          <Contact />
          <Gallery />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
