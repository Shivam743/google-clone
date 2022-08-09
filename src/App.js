import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageResult from "./components/imageSearch/ImageResult";
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
          <Route path="/image" element={<ImageResult />} />
          <Route path="/new" element={<MainContent />} />
          <Route path="/video" element={<MainContent />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
