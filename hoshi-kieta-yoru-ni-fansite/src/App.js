import './App.css';
import {Home} from "./pages/Home";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/aimer">
            <Home/>
          </Route>
        </Routes>

    </div>
  );
}

export default App;
