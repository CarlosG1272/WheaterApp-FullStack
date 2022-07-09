import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing";
import "./App.scss"
import Home from "./components/home";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default App;
