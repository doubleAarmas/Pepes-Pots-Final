import "./App.css";
import Header from "../src/Components/Header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Navigate to="/Pepe's_Home" />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
