import React from 'react'
import LogoAnimationCSS from './Css/LogoAnimation.module.css'

const LogoAnimation = () => {
  return (
    <div className={LogoAnimationCSS.logoContainer}>
    <div className={LogoAnimationCSS.welcomeAnimationContainer}>
          <div className={LogoAnimationCSS.godgivenTextContainer}>
            <h1 className={LogoAnimationCSS.godgivenText}>GODGIVEN</h1>
            <h1 className={LogoAnimationCSS.godgivenElectric01}>GODGIVEN</h1>
            <h1 className={LogoAnimationCSS.godgivenElectric02}>GODGIVEN</h1>
            <h1 className={LogoAnimationCSS.godgivenElectric03}>GODGIVEN</h1>
            <h1 className={LogoAnimationCSS.godgivenElectric04}>GODGIVEN</h1>
            <h1 className={LogoAnimationCSS.godgivenElectric05}>GODGIVEN</h1>
            <h1 className={LogoAnimationCSS.godgivenElectric06}>GODGIVEN</h1>
          </div>
          <div className={LogoAnimationCSS.maskContainer}>
            <div className={LogoAnimationCSS.maskLeft}>

            </div>
            <div className={LogoAnimationCSS.maskMiddle}>

            </div>
            <div className={LogoAnimationCSS.maskRight}>

            </div>
            <div className={LogoAnimationCSS.maskShine}>

            </div>
            <div className={LogoAnimationCSS.maskShine}>

            </div>
            <div className={LogoAnimationCSS.maskShadow}>

            </div>
            <div className={LogoAnimationCSS.maskShadowMask}>

            </div>
          </div>
          <div className={LogoAnimationCSS.godgivenAlbumContainer}>
            <h1 className={LogoAnimationCSS.godgivenAlbumText}>NOT THAT GODLY</h1>
          </div>
        </div>
    </div>
  )
}

export default LogoAnimation;