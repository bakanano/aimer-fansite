import "./App.css";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import images from "./images";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="gallery" element={<Gallery images={images}/>}/>
      </Routes>
      <footer className="info-card">
        By{" "}
        <a href="https://github.com/bakanano/aimer-fansite" target="_blank" rel="noreferrer">
          @bakanano
        </a>
      </footer>
    </div>
  );
}

export default App;
