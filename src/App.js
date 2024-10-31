import "./App.css";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import OurClients from "./components/OurClients";
import LearnMore from "./components/LearnMore";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Register />
      <OurClients />
      <LearnMore />
      <Footer />
    </div>
  );
}

export default App;
