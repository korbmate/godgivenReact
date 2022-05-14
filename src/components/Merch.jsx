import React from 'react';
import MerchCSS from './Css/Merch.module.css';
import SmallCard from './SmallCard';
import Loading from './Loading';
import pic001 from './Pictures/us/IMG_3845-1-2.jpg'
import pic002 from './Pictures/us/IMG_3848-1-2.jpg'
import pic003 from './Pictures/us/IMG_3851-1-2.jpg'
import pic004 from './Pictures/us/IMG_3853-1-2.jpg'
import MediaDecor from './MediaDecor'

const Merch = () => {
  return (
    <div>
    <Loading></Loading>
    <div className={MerchCSS.container}>
    <MediaDecor></MediaDecor>
    <div className={MerchCSS.titleCont}>
    <h1 className={MerchCSS.title}>Contact us for merch!</h1>
    </div>
    <div className={MerchCSS.cont}>
      <SmallCard text="Man T-shirt" pictureFront={pic001} pictureBack={pic002}></SmallCard>
      <SmallCard text="Woman T-shirt" pictureFront={pic003} pictureBack={pic004}></SmallCard>
    </div>
    </div>
    </div>
  )
}

export default Merch