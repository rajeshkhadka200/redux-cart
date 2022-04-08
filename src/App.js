import { BrowserRouter, Routes, Route } from "react-router-dom";

//imports for the components
import Navbar from "./components/Navbar";
import "./css/index.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

// import for the redux libs
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
