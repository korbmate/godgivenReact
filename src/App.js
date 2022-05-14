import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import About from "./components/About";
import Media from "./components/Media";
import Tour from "./components/Tour";
import Merch from "./components/Merch";
import Navbar from "./components/Navbar";
import NavbarDesk from "./components/NavbarDesk";
import Footer from "./components/Footer";
import { useState } from "react";
//current color set: #042F39, #075264, #0A758F, #0D98BA, #10BBE5, #32CBF1, #5DD6F4

const viewPortW = document.documentElement.clientWidth;

function App() {

  const [width, setWidth] = useState(viewPortW);

  setInterval(checkWidth, 100);

  function checkWidth(){
    const viewPortW = document.documentElement.clientWidth;
    setWidth(viewPortW);
  }

  return (
    <Router>
      {width<600 &&  <Navbar></Navbar>}
      {width>=600 &&  <NavbarDesk></NavbarDesk>}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/media" element={<Media></Media>}></Route>
        <Route path="/tour" element={<Tour></Tour>}></Route>
        <Route path="/merch" element={<Merch></Merch>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
