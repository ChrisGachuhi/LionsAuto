import { Link } from 'react-router-dom'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
import { useContext, useEffect } from 'react'
import LandingAnimation from '../Components/animated-components/LandingAnimation'
import { CurrentAnimationContext } from '../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../Components/SvgWrapper'
import { HashLink } from 'react-router-hash-link'

import trackingsoftware from '/src/assets/images/updatedimages/geo-fencing.jpg'
import speedgovernor from '/src/assets/images/updatedimages/speed-monitoring-pic.jpg'
import driverbehaviour from '/src/assets/images/updatedimages/dashboard-pic.jpg'
import fuelmonitoring from '/src/assets/images/updatedimages/fuel-mngmt-pic.jpg'
// import fuelmonitoring from

const Software = () => {
  const animate = useContext(CurrentAnimationContext)
  useEffect(() => {
    // for header section
    animate.headerAnimation()
    // for opportunities section
    animate.leftToRightImage('.first-image', '.gps')
    animate.rightToLeftImage('.target-img', '.governor')
    animate.rightToLeftImage('.target-img', '.fuel')
    animate.leftToRightImage('.fourth-image', '.driver')

    // animations for solutions descriptions
    animate.descriptionAnimation('.Software', '.description')
  }, [])
  return (
    <div className="Page Software">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <h1>Lions Auto Software Solution</h1> <br />
          <span>
            Mange your Fleet , Fuel ,Drivers and Speed Governor operation
            efficiently!
          </span>
        </div>

        {/* in page navigation */}
        <div className="navigation">
          <HashLink to="#GPS-tracking">GPS Tracking Solution</HashLink>
          <HashLink to="#fuel-monitoring">Fuel Monitoring</HashLink>
          <HashLink to="#driver-behavior">Driver Behavior</HashLink>
          <HashLink to="#speed-governor">Speed Governor</HashLink>
        </div>

        <p>
          Lions Auto GPS Vehicle Tracking Solutions combine sophisticated GPS
          tracking technology with flexible, advanced mapping and reporting
          software. A GPS-enabled Vehicle Tracking Device is installed on each
          vehicle to collect and transmit tracking data via a cellular and
          satellite network, whichever works best for your operations. The
          device then delivers the data to the Lions Auto GPS hosted
          application, which you can access through the Web at any time. You
          will receive real-time vehicle tracking updates, including location,
          direction, speed, idle time, start/stop and more, allowing you to
          manage a tighter schedule and more efficient fleet.
        </p>
      </div>

      <div className="solution-container gps" id="GPS-tracking">
        <div className="highlight">
          <div className="image first-image">
            <img src={trackingsoftware} alt="" />
          </div>

          <div className="description">
            <h3>Lions Auto GPS GPS Software</h3>
            <p>
              Lions Auto GPS support our partners & distributors by providing
              GPS tracking system and fleet management system. All Lions Auto
              GPS applications can be white-labeled and customized depending on
              your business needs. So, if you want to start your own white label
              GPS tracking business or expand the existing one—you&apos;ve come
              to the right place. Let&apos;s start tracking with our advanced
              GPS tracking platform.
            </p>
            <Link to={'/GPS-Software'} target="_blank">
              Know More
            </Link>
          </div>
        </div>
      </div>

      <div className="solution-container governor" id="speed-governor">
        <div className="highlight">
          <div className="image second-image ">
            <SvgWrapper />
            <img className="target-img" src={speedgovernor} alt="" />
          </div>

          <div className="description">
            <h3>Lions Auto GPS Speed Governor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem ratione explicabo rem voluptatibus, vel eos error quis.
              Ipsa nulla aut aliquam, laboriosam doloribus, voluptate dolore,
              sint amet placeat aliquid quod necessitatibus sunt delectus iste!
              A tempora voluptatem dignissimos esse praesentium beatae deleniti
              suscipit eum non delectus doloribus dolore consectetur corporis
              veniam quaerat, atque est quia explicabo tenetur autem sint
              aspernatur?
            </p>
            <Link to={'/Speed-Governor'} target="_blank">
              Know More
            </Link>
          </div>
        </div>
      </div>

      <div className="solution-container fuel" id="fuel-monitoring">
        <div className="highlight">
          <div className="image third-image">
            <SvgWrapper />
            <img className="target-img" src={fuelmonitoring} alt="" />
          </div>

          <div className="description">
            <h3>Lions Auto GPS Fuel Monitoring</h3>
            <p>
              Fuel costs can amount up to 30% of all fleet management expenses,
              therefore affecting operating costs and company&apos;s profit in
              general. Lions Auto GPS tracking and telematics platform can help
              you cope with the major challenges related to fuel monitoring and
              management in the most user-friendly way.
            </p>
            <Link to={'/Fuel-Monitoring'} target="_blank">
              Know More
            </Link>
          </div>
        </div>
      </div>

      <div className="solution-container driver" id="driver-behavior">
        <div className="highlight">
          <div className="image fourth-image">
            <img src={driverbehaviour} alt="" />
          </div>

          <div className="description">
            <h3>Lions Auto GPS Driver Behavior</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem ratione explicabo rem voluptatibus, vel eos error quis.
              Ipsa nulla aut aliquam, laboriosam doloribus, voluptate dolore,
              sint amet placeat aliquid quod necessitatibus sunt delectus iste!
              A tempora voluptatem dignissimos esse praesentium beatae deleniti
              suscipit eum non delectus doloribus dolore consectetur corporis
              veniam quaerat, atque est quia explicabo tenetur autem sint
              aspernatur?
            </p>
            <Link to={'/Driver-Behavior'} target="_blank">
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Software
