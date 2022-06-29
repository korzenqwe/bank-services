import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles/app.css";
import MainPage from "./pages/MainPage";
import Credit from "./pages/Credit";
import Exchange from "./pages/Exchange";

function App() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__links">
          <Link to="/credit">Кредитный калькулятор</Link>
          <Link to="/exchange">Конвертер валют</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/credit" element={<Credit />}></Route>
        <Route path="/exchange" element={<Exchange />}></Route>
      </Routes>
    </>
  );
}

export default App;
