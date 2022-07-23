import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing";
import "./App.scss"
import Home from "./components/home";
import DetailCity from "./components/detailCity";
import Favorites from "./components/favorites";
import ColorsMeans from "./components/colors";
import AboutMe from "./components/contact";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="home" element={<Home />} />
      <Route path="city/:id" element={<DetailCity />}/>
      <Route path="favorites" element={<Favorites />}/>
      <Route path="colors" element={<ColorsMeans />} />
      <Route path="about" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
