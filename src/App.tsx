import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Discover from "./components/Discover";
import About from "./components/About";
import Attractions from "./components/Attractions";
import Hotels from "./components/Hotels";
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
          <Discover />
          <About />
          <Attractions />
          <Hotels />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
