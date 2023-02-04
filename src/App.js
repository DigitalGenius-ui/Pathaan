import Home from "./components/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Casts from "./components/Casts/Casts";
import Navigation from "./components/Navigation/Navigation";
import { AnimatePresence } from "framer-motion";
import Gallery from "./components/Gallery/Gallery";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div className="navigation">
        <Navigation />
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/casts" element={<Casts />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
