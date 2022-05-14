import React from 'react';
import { Link } from 'react-router-dom';
import NavbarCSS from "./Css/Navbar.module.css";


const NavbarDesc = () => {

  return (
    <ul className={NavbarCSS.navBar}>
        <Link to="/" className={NavbarCSS.navItem}><li>Home</li></Link>
        <div className={NavbarCSS.line}>&nbsp;</div>
        <Link to="/about" className={NavbarCSS.navItem}><li>About</li></Link>
        <div className={NavbarCSS.line}>&nbsp;</div>
        <Link to="/media" className={NavbarCSS.navItem}><li>Media</li></Link>
        <div className={NavbarCSS.line}>&nbsp;</div>
        <Link to="/tour" className={NavbarCSS.navItem}><li>Tour</li></Link>
        <div className={NavbarCSS.line}>&nbsp;</div>
        <Link to="/merch" className={NavbarCSS.navItem}><li>Merch</li></Link>
    </ul>
  )
}

export default NavbarDesc