import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contactus from "./Components/Contactus";
import Home from "./Components/Home";
import Students from "./Components/Students";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/Contactus" element={<Contactus />}></Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
