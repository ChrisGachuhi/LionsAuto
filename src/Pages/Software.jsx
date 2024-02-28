import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useContext, useEffect } from 'react'
import LandingAnimation from '../Components/animated-components/LandingAnimation'
import { CurrentAnimationContext } from '../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../Components/SvgWrapper'

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
          <h1>Lions AUto Software Solution</h1> <br />
          <span>
            Mange your Fleet , Fuel ,Drivers and Speed Governor operation
            efficiently!
          </span>
        </div>

        {/* in page navigation */}
        <div className="navigation">
          <Link>GPS Tracking Solution</Link>
          <Link>Fuel Monitoring</Link>
          <Link>Driver Behavior</Link>
          <Link>Speed Governor</Link>
        </div>

        <p>
          Speedotrack Vehicle Tracking Solutions combine sophisticated GPS
          tracking technology with flexible, advanced mapping and reporting
          software. A GPS-enabled Vehicle Tracking Device is installed on each
          vehicle to collect and transmit tracking data via a cellular and
          satellite network, whichever works best for your operations. The
          device then delivers the data to the Speedotrack hosted application,
          which you can access through the Web at any time. You will receive
          real-time vehicle tracking updates, including location, direction,
          speed, idle time, start/stop and more, allowing you to manage a
          tighter schedule and more efficient fleet.
        </p>
      </div>

      <div className="solution-container gps">
        <div className="highlight">
          <div className="image first-image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/04/Speedorack-Vehicle-Tracking-Software_01.png?w=666&ssl=1"
              alt=""
            />
          </div>

          <div className="description">
            <h3>LionsAuto GPS Software</h3>
            <p>
              Speedotrack support our partners & distributors by providing GPS
              tracking system and fleet management system. All Speedotrack
              applications can be white-labeled and customized depending on your
              business needs. So, if you want to start your own white label GPS
              tracking business or expand the existing one—you’ve come to the
              right place. Let’s start tracking with our advanced GPS tracking
              platform.
            </p>
            <Link to={'/GPS-Software'} target="_blank">
              Know More
            </Link>
          </div>
        </div>
      </div>

      <div className="solution-container governor">
        <div className="highlight">
          <div className="image second-image ">
            <SvgWrapper />
            <img
              className="target-img"
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/07/Speedotrack-Hospital-Management-Software_01.png?w=666&ssl=1"
              alt=""
            />
          </div>

          <div className="description">
            <h3>LionsAuto Speed Governor</h3>
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

      <div className="solution-container fuel">
        <div className="highlight">
          <div className="image third-image">
            <SvgWrapper />
            <img
              className="target-img"
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Speedotrack-Fuel-Monitoring-Solution_01.png?w=666&ssl=1"
              alt=""
            />
          </div>

          <div className="description">
            <h3>LionsAuto Fuel Monitoring</h3>
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
            <Link to={'/Fuel-Monitoring'} target="_blank">
              Know More
            </Link>
          </div>
        </div>
      </div>

      <div className="solution-container driver">
        <div className="highlight">
          <div className="image fourth-image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/07/Speedotrack-Hospital-Management-Software_01.png?w=666&ssl=1"
              alt=""
            />
          </div>

          <div className="description">
            <h3>LionsAuto Driver Behavior</h3>
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
