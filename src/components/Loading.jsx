import React from 'react'
import LoadingCSS from './Css/Loading.module.css'

const Loading = () => {
  return (
    <div className={LoadingCSS.container}>
        <div className={LoadingCSS.titleCont}>
          <div className={LoadingCSS.title}>Loading...</div>
        </div>
        <div className={LoadingCSS.triangleCont}>
          <div className={LoadingCSS.triangle01}></div>
          <div className={LoadingCSS.triangle03}></div>
          <div className={LoadingCSS.triangle02}></div>
        </div>
    </div>
  )
}

export default Loading