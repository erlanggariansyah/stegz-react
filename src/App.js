import { Route, Routes } from "react-router-dom";
import Indonesia from "./pages/Indonesia";
import Home from "./pages/Home";
import Province from "./pages/Province";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/indonesia" element={<Indonesia />}/>
      <Route path="/provinsi" element={<Province />}/>
    </Routes>
  );
}

export default App;
