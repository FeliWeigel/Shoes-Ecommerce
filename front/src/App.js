import { Route, Routes } from "react-router-dom";
import Demo from "./routes/Demo";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/register" element={<Register/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/demo" element={<Demo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
