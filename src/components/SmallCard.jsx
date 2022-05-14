import React from 'react'
import SmallCardCSS from './Css/SmallCard.module.css'

const SmallCard = (props) => {
  return (
    <div className={SmallCardCSS.card}>
        <div className={SmallCardCSS.picDiv}>
        <img className={SmallCardCSS.pictureFront} src={props.pictureFront} alt="img" />
        <img className={SmallCardCSS.pictureBack} src={props.pictureBack} alt="img" />
        </div>
        <h2 className={SmallCardCSS.text} >{props.text}</h2>
    </div>
  )
}

export default SmallCard