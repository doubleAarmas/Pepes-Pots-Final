import "./App.css";
import Header from "../src/Components/Header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Navigate to="/Pepe's_Home" />} />
          <Route path="/Pepe's_Home" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
