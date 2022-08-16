import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import ImageResult from "./components/imageSearch/ImageResult";
import MainContent from "./components/mainContent/MainContent";
import Menubar from "./components/Menubar";
import MiniNav from "./components/MiniNav";
import NoRoute from "./components/NoRoute";
import NodeState from "./Context/NodeState";
const LazyVideoResults = React.lazy(() =>
  import("./components/Video/VideoResults")
);
const LazyNewsResults = React.lazy(() =>
  import("./components/NewsResults/NewsResults")
);
const LazyImageResult = React.lazy(() =>
  import("./components/imageSearch/ImageResult")
);

function App() {
  return (
    <NodeState>
      <BrowserRouter>
        <Header />
        <Menubar />
        <MiniNav />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/image" element={
              <React.Suspense fallback={<div className="fallback">loading...</div>}>
                <LazyImageResult />
              </React.Suspense>
            } />
          <Route
            path="/new"
            element={
              <React.Suspense fallback={<div className="fallback">loading...</div>}>
                <LazyNewsResults />
              </React.Suspense>
            }
          />
          <Route
            path="/video"
            element={
              <React.Suspense fallback={<div className="fallback">loading...</div>}>
                <LazyVideoResults />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoRoute />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </NodeState>
  );
}

export default App;
