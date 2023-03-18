import Navbar from "src/scenes/Navbar";
import Home from "src/scenes/Home";
import Benefits from "src/scenes/Benefits";
import OurClasses from "src/scenes/OurClasses";
import ContactUs from "src/scenes/ContactUs";

function App() {
  return (
    <div className="app bg-gray-20">
      <Navbar />
      <Home />
      <Benefits />
      <OurClasses />
      <ContactUs />
    </div>
  );
}

export default App;
