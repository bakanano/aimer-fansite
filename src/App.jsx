import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import images from "./images";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/aimer" element={<Home/>}/>
        <Route path="/aimer/gallery" element={<Gallery images={images}/>}/>
      </Routes>
      <footer className="info-card">
        By{" "}
        <a href="https://github.com/bakanano/aimer-fansite" target="_blank">
          @bakanano
        </a>
      </footer>
    </div>
  );
}

export default App;
