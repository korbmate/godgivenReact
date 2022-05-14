import React from 'react'
import AboutCSS from './Css/About.module.css'
import ParagraphCard from './ParagraphCard'
import picture001 from './Pictures/us/all04_sq.jpg'
import picture002 from './Pictures/us/mate02_sq.jpg'
import picture003 from './Pictures/us/szike01_sq.jpg'
import picture004 from './Pictures/us/atis01_sq.jpg'
import Loading from './Loading'
import RnRDied from './RnRDied'

const About = () => {
  return (
    <div className={AboutCSS.container}>
    <Loading></Loading>
      <div className={AboutCSS.topImage}>
        <div className={AboutCSS.backgroundPicture}></div>
        <div className={AboutCSS.mask01}></div>
      </div>
      <RnRDied></RnRDied>
      <div className={AboutCSS.content}>
        <ParagraphCard pictureFirst={false} picture={picture001} text="Quis enim vivamus leo integer, varius elit erat urna, commodo ullamcorper, sodales elementum lectus dictumst luctus sit viverra, impedit etiam urna vitae. Nunc sed justo ullamco. Rhoncus risus tincidunt odio id magna, tempor sed imperdiet pede convallis turpis scelerisque, risus non, mus aenean in sed erat, morbi diam. Vitae at nunc quis, massa convallis odio erat tempor, malesuada eget eleifend, sem et porttitor, non massa. Mollis pede semper vitae vel, nulla aliquam quis quis. Fusce libero vitae leo, sed veritatis malesuada urna feugiat, in sit augue quam. In in, pharetra dictum tristique et arcu pede, sed provident augue, mauris elit pede ante a. Aliquam sodales egestas a, nascetur id diam conubia suspendisse eu, gravida ante rutrum a ultrices."></ParagraphCard> 
        <ParagraphCard pictureFirst={true} picture={picture002} text="Amet velit, non sit aenean egestas cum, sed praesent ante, ut sed ac dignissim duis hac. Posuere et vivamus in amet, felis arcu metus, mauris ullamcorper etiam dolor placerat, erat lorem magna fermentum, nibh cras. Sed eros curabitur nunc purus ullamcorper dis, etiam id pulvinar a litora vitae, auctor id tellus justo donec nonummy. Sed vehicula etiam, est praesent. Ultrices turpis a, ipsum nascetur faucibus phasellus parturient nisl. Scelerisque nunc arcu pulvinar dapibus mauris, pariatur sollicitudin. Odio eleifend, sint turpis convallis, felis mollis urna non, potenti sed placerat in, nisl dolor aliquam bibendum amet. Dui sit a sapien eleifend voluptatem, velit faucibus integer viverra augue, amet vitae nibh in a, vitae lectus lectus. Ridiculus aliquam lacus sed morbi imperdiet, dolor et lorem donec et ut etiam. Augue fusce sagittis sodales proin in, et purus, tempus accumsan eu, nec venenatis tincidunt tempora urna."></ParagraphCard> 
        <ParagraphCard pictureFirst={false} picture={picture003} text="Cras sed, suspendisse vestibulum mauris nunc amet parturient amet, pulvinar ut volutpat, dapibus sed vivamus mi curabitur. Suscipit architecto vehicula commodo suspendisse lorem, lorem velit nibh, et quis habitant. Praesent ligula nulla eget egestas, donec sed, cum ut, lobortis lacinia nulla ut laoreet amet aenean. Praesent non id feugiat posuere odio, ultrices at posuere, morbi dictum, interdum lorem sapien est natoque metus porttitor, ipsum sed aliquet tortor mi nec sit. Ipsum lorem vehicula felis aliquet. Eget feugiat pellentesque conubia cras, elit laoreet mus etiam donec arcu magna, consequat amet vel nascetur. Metus nibh venenatis egestas amet mattis, id nullam et in neque mauris ut, in eros, dictum odio ligula dui mattis, euismod dolor."></ParagraphCard> 
        <ParagraphCard pictureFirst={true} picture={picture004} text="Lorem ipsum dolor sit amet, tortor potenti massa praesent et vestibulum. Nec urna proin augue. Ut fames consectetuer aptent integer sollicitudin, aliquam molestie massa quis. Semper pede sit rutrum lobortis libero vestibulum, metus libero pretium lobortis dui ac eget, ligula semper eros cras malesuada, sollicitudin cras etiam. Sed erat, volutpat libero sodales egestas, auctor molestie ante morbi, quis integer blandit aptent. Eget rhoncus, non nec. Sed etiam ultricies iaculis arcu mattis porta, potenti porta dictumst et ac. Semper vestibulum, id rhoncus, luctus luctus lectus lacinia pede hac. Placerat arcu non convallis."></ParagraphCard> 
      </div>
    </div>
  )
}

export default About