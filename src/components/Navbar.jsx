import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarCSS from "./Css/Navbar.module.css";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  function handleClick () {
    setToggle(!toggle);
  }

  return (
    <ul className={NavbarCSS.navBar}>
        <button onClick={handleClick} className={NavbarCSS.navButton}>Navigation</button>
        <div className={NavbarCSS.line}>&nbsp;</div>
        {toggle && <Link to="/" onClick={handleClick} className={NavbarCSS.navItem}><li>Home</li></Link>}
        {toggle && <div className={NavbarCSS.line}>&nbsp;</div>}
        {toggle && <Link to="/about" onClick={handleClick} className={NavbarCSS.navItem}><li>About</li></Link>}
        {toggle && <div className={NavbarCSS.line}>&nbsp;</div>}
        {toggle && <Link to="/media" onClick={handleClick} className={NavbarCSS.navItem}><li>Media</li></Link>}
        {toggle && <div className={NavbarCSS.line}>&nbsp;</div>}
        {toggle && <Link to="/tour" onClick={handleClick} className={NavbarCSS.navItem}><li>Tour</li></Link>}
        {toggle && <div className={NavbarCSS.line}>&nbsp;</div>}
        {toggle && <Link to="/merch" onClick={handleClick} className={NavbarCSS.navItem}><li>Merch</li></Link>}
    </ul>
  )
}

export default Navbar