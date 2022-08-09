import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Menubar from "./components/Menubar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menubar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/image" element={<MainContent />} />
          <Route path="/new" element={<MainContent />} />
          <Route path="/video" element={<MainContent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
