import React from 'react'
import ParagraphCardLCSS from './Css/ParagraphCardLeft.module.css'
import ParagraphCardRCSS from './Css/ParagraphCardRight.module.css'

const ParagraphCard = (props) => {
  const pictureFirst = props.pictureFirst; 
  return (<div>
    {pictureFirst && <div className={ParagraphCardLCSS.container}>
      <div className={ParagraphCardLCSS.decor01}></div>
      <div className={ParagraphCardLCSS.decor02}></div>
      <div className={ParagraphCardLCSS.decor03}></div>
      <div className={ParagraphCardLCSS.decor04}></div>
      <img src={props.picture} alt="Lpicture" className={ParagraphCardLCSS.picture}/>
      <p className={ParagraphCardLCSS.para}>{props.text}</p>
    </div>}
    {!pictureFirst && <div className={ParagraphCardRCSS.container}>
      <div className={ParagraphCardRCSS.decor01}></div>
      <div className={ParagraphCardRCSS.decor02}></div>
      <div className={ParagraphCardRCSS.decor03}></div>
      <div className={ParagraphCardRCSS.decor04}></div>
      <p className={ParagraphCardRCSS.para}>{props.text}</p>
      <img src={props.picture} alt="Rpicture" className={ParagraphCardRCSS.picture}/>
    </div>}
    </div>
  );
}

export default ParagraphCard;