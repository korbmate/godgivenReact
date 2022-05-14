import React from 'react'
import MediaDecorCSS from './Css/MediaDecor.module.css'

const MediaDecor = () => {
  return (
    <div className={MediaDecorCSS.decorDiv}>
        <div className={MediaDecorCSS.decor01}></div>
        <div className={MediaDecorCSS.decor02}></div>
        <div className={MediaDecorCSS.decor03}></div>
        <div className={MediaDecorCSS.decor04}></div>
    </div>
  )
}

export default MediaDecor