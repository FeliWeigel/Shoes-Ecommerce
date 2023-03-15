import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Products from "./routes/Products";
import Register from "./routes/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/register" element={<Register/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/products" element={<Products/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
