import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing";
import "./App.scss"
import Home from "./components/home";
import DetailCity from "./components/detailCity";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="home" element={<Home />} />
      <Route path="city/:id" element={<DetailCity />}/>
    </Routes>
  );
}

export default App;
