import Navbar from "src/scenes/Navbar";
import Home from "src/scenes/Home";
import Benefits from "./scenes/Benefits";

function App() {
  return (
    <div className="app bg-gray-20">
      <Navbar />
      <Home />
      <Benefits />
    </div>
  );
}

export default App;
