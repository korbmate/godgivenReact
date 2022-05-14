import React from 'react'
import MediaCSS from './Css/Media.module.css'
import MediaDecor from './MediaDecor'

const Media = () => {
  
  return (
    <div>
    <MediaDecor></MediaDecor>
    <div className={MediaCSS.contOut}>
    <div className={MediaCSS.cont}>

    <iframe title='spoty' style={{borderRadius: 12 + 'px'}} src="https://open.spotify.com/embed/artist/6OjveAxQIYUN5Grx6YCCnq?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/_zvkm-LXjRo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      {/* <iframe title='spoty' className={MediaCSS.spoty} src="https://open.spotify.com/embed/artist/6OjveAxQIYUN5Grx6YCCnq?utm_source=generator&theme=0" width="50%" height="390" frameBorder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}
      {/* <iframe className={MediaCSS.youtube} width="50%" height="315" src="https://www.youtube.com/embed/_zvkm-LXjRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>     */}
    </div>
    </div>
    </div>
  )
}

export default Media