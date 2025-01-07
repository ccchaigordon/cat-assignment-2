import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {" "}
        {/* This ensures the container takes up at least the full height of the screen */}
        <NavBar />
        <main className="flex-grow">
          {" "}
          {/* This will grow to take up any remaining space */}
          {/* Your page content goes here */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
