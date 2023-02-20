import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Students from "./Components/Students";
import AddVehicle from "./Components/AddVehicle";
import AddScenario from "./Components/AddScenario";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/AddScenario" element={<AddScenario />}></Route>
          <Route path="/AddVehicle" element={<AddVehicle />}></Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
