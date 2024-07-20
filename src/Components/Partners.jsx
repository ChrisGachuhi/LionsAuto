import { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

import greenlife from '../assets/images/clients/logos_Page_05.jpg'
import kenagro from '../assets/images/clients/logos_Page_06.jpg'
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
import amazi from '../assets/images/clients/LO_Page_1.png'
import limurudairy from '../assets/images/clients/LO_Page_3.png'
import cure from '../assets/images/clients/LO_Page_2.png'
import ncba from '../assets/images/clients/logo 2_Page_2.png'
import egl from '../assets/images/clients/logo 2_Page_3.png'
import farmworks from '../assets/images/clients/logo 2_Page_4.png'
import fpfk from '../assets/images/clients/logo 2_Page_6.png'
import odex from '../assets/images/clients/logo 2_Page_7.png'
import neuce from '../assets/images/clients/logo 2_Page_8.png'
import hebatullah from '../assets/images/clients/logos_Page_01.jpg'
import royalfresh from '../assets/images/clients/logos_Page_02.jpg'
import kijabe from '../assets/images/clients/logos_Page_03.jpg'
import faholo from '../assets/images/clients/faholo.png'

export const Partners = () => {
  const [countState, setCountState] = useState(false)
  return (
    <div className="Partners">
      <div className="partner">
        <h2>Our Client Portfolio</h2>
        <img src={hebatullah} alt="" />
        <img src={royalfresh} alt="" />
        <img src={kijabe} alt="" />
        <img src={cure} alt="" />
        <img src={ncba} alt="" />
        <img src={egl} alt="" />
        <img src={farmworks} alt="" />
        <img src={fpfk} alt="" />
        <img src={odex} alt="" />
        <img src={neuce} alt="" />
        <img src={amazi} alt="" />
        <img src={greenlife} alt="" />
        <img src={kenagro} alt="" />
        <img src={limurudairy} alt="" />
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
        <img src={faholo} alt="" />
      </div>

      <ScrollTrigger
        onEnter={() => setCountState(true)}
        // onExit={()=>setCountState(false)}
      >
        <div className="stats">
          <p className="stat">
            <span>
              {countState && (
                <CountUp start={0} end={18} duration={4}></CountUp>
              )}
              +
            </span>
            <span>Language</span>
          </p>

          <p className="stat">
            <span>
              {countState && (
                <CountUp start={0} end={502} duration={4}></CountUp>
              )}
              +
            </span>
            <span>Partners</span>
          </p>

          <p className="stat">
            <span>
              {countState && (
                <CountUp start={0} end={13} duration={4}></CountUp>
              )}
              +
            </span>
            <span>Years</span>
          </p>

          <p className="stat">
            <span>
              {countState && (
                <CountUp start={0} end={703} duration={4}></CountUp>
              )}
              +
            </span>
            <span>Devices</span>
          </p>

          <p className="stat">
            <span>
              {countState && (
                <CountUp start={0} end={114} duration={4}></CountUp>
              )}
              +
            </span>
            <span>Countries</span>
          </p>

          <p className="stat">
            <span>
              {countState && (
                <CountUp start={0} end={50} duration={4}></CountUp>
              )}
              +
            </span>
            <span>Developers</span>
          </p>
        </div>
      </ScrollTrigger>
    </div>
  )
}
