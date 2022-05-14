import React from 'react'
import FooterCSS from "./Css/Footer.module.css"
import insta from './Pictures/instagram.png';
import face from './Pictures/facebook.png'
import spotify from './Pictures/spotify.png'
import apple from './Pictures/apple.png'
import youtube from './Pictures/youtube.png'

const Footer = () => {
  return (
    <div className={FooterCSS.container}>
      <ul className={FooterCSS.ulFooter}>
        <li className={FooterCSS.liFooter}> <a href="https://www.instagram.com/godgivenband/" target="_blank" rel="noopener noreferrer"> <img className={FooterCSS.logo} src={insta} /> </a> </li>
        <li className={FooterCSS.liFooter}> <a href="https://www.facebook.com/godgivenband" target="_blank" rel="noopener noreferrer"> <img className={FooterCSS.logo} src={face} /> </a> </li>
        <li className={FooterCSS.liFooter}> <a href="https://www.youtube.com/user/godgivenband" target="_blank" rel="noopener noreferrer"> <img className={FooterCSS.logo} src={youtube} /> </a> </li>
        <li className={FooterCSS.liFooter}> <a href="https://open.spotify.com/artist/6OjveAxQIYUN5Grx6YCCnq" target="_blank" rel="noopener noreferrer"> <img className={FooterCSS.logo} src={spotify} /> </a> </li>
        <li className={FooterCSS.liFooter}> <a href="https://music.apple.com/ng/artist/godgiven/1347516574" target="_blank" rel="noopener noreferrer"> <img className={FooterCSS.logo} src={apple} /> </a> </li>
      </ul>
    </div>
  )
}

export default Footer