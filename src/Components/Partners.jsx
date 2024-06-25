import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import hebatullah from '../assets/images/clients/logos_Page_01.jpg'
import royalfresh from '../assets/images/clients/logos_Page_02.jpg'
import kijabe from '../assets/images/clients/logos_Page_03.jpg'
import amanzi from '../assets/images/clients/logos_Page_04.jpg'
import greenlife from '../assets/images/clients/logos_Page_05.jpg'
import kenagro from '../assets/images/clients/logos_Page_06.jpg'
import limurufresh from '../assets/images/clients/logos_Page_07.jpg'
import gransolafrica from '../assets/images/clients/logos_Page_08.jpg'
import sineria from '../assets/images/clients/logos_Page_09.jpg'
import phoenixaviation from '../assets/images/clients/logos_Page_10.jpg'
import aak from '../assets/images/clients/logos_Page_12.jpg'
import koolbreeze from '../assets/images/clients/logos_Page_13.jpg'
import arwa from '../assets/images/clients/logos_Page_14.jpg'
import ecofuels from '../assets/images/clients/logos_Page_15.jpg'
import dellochem from '../assets/images/clients/logos_Page_16.jpg'
import frontier from '../assets/images/clients/logos_Page_17.jpg'
import coopbank from '../assets/images/clients/logos_Page_18.jpg'

export const Partners = () => {
  const [ countState, setCountState] = useState(false)
  return (
    <div className="Partners">
      <div className="partner">
       <img src={hebatullah} alt="" />
       <img src={royalfresh} alt="" />
       <img src={kijabe} alt="" />
       <img src={amanzi} alt="" />
       <img src={greenlife} alt="" />
       <img src={kenagro} alt="" />
       <img src={limurufresh} alt="" />
       <img src={gransolafrica} alt="" />
       <img src={sineria} alt="" />
       <img src={phoenixaviation} alt="" />
       <img src={aak} alt="" />
       <img src={koolbreeze} alt="" />
       <img src={arwa} alt="" />
       <img src={ecofuels} alt="" />
       <img src={dellochem} alt="" />
       <img src={frontier} alt="" />
       <img src={coopbank} alt="" />
      </div>

        <ScrollTrigger 
        onEnter={()=>setCountState(true)} 
        // onExit={()=>setCountState(false)}
        >
      <div className="stats">
        <p className="stat">
          <span>{
            countState &&
            <CountUp
            start={0}
            end={18}
            duration={4}
            ></CountUp>}
            
            +</span>
          <span>Language</span>
        </p>

        <p className="stat">
          <span>
          {
            countState &&
            <CountUp
            start={0}
            end={502}
            duration={4}
            ></CountUp>}+</span>
          <span>Partners</span>
        </p>

        <p className="stat">
          <span>
          {
            countState &&
            <CountUp
            start={0}
            end={13}
            duration={4}
            ></CountUp>}+</span>
          <span>Years</span>
        </p>

        <p className="stat">
          <span>{
            countState &&
            <CountUp
            start={0}
            end={703}
            duration={4}
            ></CountUp>}+</span>
          <span>Devices</span>
        </p>

        <p className="stat">
          <span>
          {
            countState &&
            <CountUp
            start={0}
            end={114}
            duration={4}
            ></CountUp>}+</span>
          <span>Countries</span>
        </p>

        <p className="stat">
          <span>
          {
            countState &&
            <CountUp
            start={0}
            end={50}
            duration={4}
            ></CountUp>}+</span>
          <span>Developers</span>
        </p>
      </div>
        </ScrollTrigger>
    </div>
  )
};
