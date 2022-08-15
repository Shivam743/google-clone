import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageResult from "./components/imageSearch/ImageResult";
import MainContent from "./components/MainContent";
import Menubar from "./components/Menubar";
import MiniNav from "./components/MiniNav";
import NewsResults from "./components/NewsResults/NewsResults";
import VideoResults from "./components/Video/VideoResults";
import NodeState from "./Context/NodeState";

function App() {
  return (
    <NodeState>
      <BrowserRouter>
        <Header />
        <Menubar />
        <MiniNav/>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/image" element={<ImageResult />} />
          <Route path="/new" element={<NewsResults/>} />
          <Route path="/video" element={<VideoResults />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </NodeState>
  );
}

export default App;
