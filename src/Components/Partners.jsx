import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import amazi from '../assets/images/clients/LO_Page_1.png'
import cure from '../assets/images/clients/LO_Page_2.png'
import limurudairy from '../assets/images/clients/LO_Page_3.png'
import ncba from '../assets/images/clients/logo 2_Page_2.png'
import egl from '../assets/images/clients/logo 2_Page_3.png'
import farmworks from '../assets/images/clients/logo 2_Page_4.png'
import fpfk from '../assets/images/clients/logo 2_Page_6.png'
import odex from '../assets/images/clients/logo 2_Page_7.png'
import neuce from '../assets/images/clients/logo 2_Page_8.png'


export const Partners = () => {
  const [ countState, setCountState] = useState(false)
  return (
    <div className="Partners">
      <div className="partner">
        <img src={amazi} alt="" />
        <img src={cure} alt="" />
        <img src={limurudairy} alt="" />
        <img src={ncba} alt="" />
        <img src={egl} alt="" />
        <img src={farmworks} alt="" />
        <img src={fpfk} alt="" />
        <img src={odex} alt="" />
        <img src={neuce} alt="" />
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
