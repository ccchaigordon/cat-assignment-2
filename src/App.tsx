import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Attractions from "./components/Attractions";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {" "}
        <NavBar />
        <main className="flex-grow">
          {" "}
          <Attractions />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
