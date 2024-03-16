// import playback from '../../assets/icons/playback.svg'
import playback from '../assets/icons/playback.svg'
import alerts from '../assets/icons/alerts.svg'
import tracking from '../assets/icons/tracking.svg'
import apps from '../assets/icons/apps.svg'
import multiple from '../assets/icons/multiple.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faBars,
  faCloud,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import { Partners } from '../Components/Partners'
import { Link } from 'react-router-dom'
import { useRef, useEffect, useContext } from 'react'
import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LandingAnimation from '../Components/animated-components/LandingAnimation'
import { CurrentAnimationContext } from '../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../Components/SvgWrapper'
import { element } from 'prop-types'

const Home = () => {
  
  const animate = useContext(CurrentAnimationContext)

  const h1Ref = useRef()
  const CTARef = useRef()
  const leftImgRef = useRef()
  const rightImgRef = useRef()
  const spanRef = useRef()

  useEffect(() => {
    const rightImg = rightImgRef.current
    const leftImg = leftImgRef.current
    const span = spanRef.current
    const h1Tag = h1Ref.current
    const CTA = CTARef.current

    gsap.fromTo(
      h1Tag,
      { y: 250, opacity: 0.5 },
      { y: 0, opacity: 1, duration: 1.5, repeat: 0 }
    )
    gsap.fromTo(
      CTA,
      { x: -150, opacity: 0.7 },
      { x: 0, opacity: 1, duration: 2, repeat: 0 }
    )
    gsap.fromTo(
      span,
      { opacity: 0.5 },
      { opacity: 1, duration: 2.5, repeat: 1 }
    )
    gsap.fromTo(
      leftImg,
      { x: -500, opacity: 0.4 },
      { x: 0, duration: 1.5, opacity: 1, repeat: 0 }
    )
    gsap.fromTo(
      rightImg,
      { x: 500, opacity: 0.4 },
      { x: 0, duration: 1.5, opacity: 1, repeat: 0 }
    )

    animate.benefitsArrayAnimation('.benefits', '.benefit')

    // animations for solutions images
    animate.leftToRightImage('.track .image', '.solution.track')
    animate.rightToLeftImage('.load .target-img', '.solution.load')
    animate.leftToRightImage('.fuel .image', '.solution.fuel')
    animate.rightToLeftImage('.generator .target-img', '.solution.generator')
    animate.leftToRightImage('.mining .image', '.solution.mining')

    // animations for solutions descriptions
    animate.descriptionAnimation('.solutions', '.description')
  }, [])

  return (
    <div className="Page Home">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <h1 ref={h1Ref}> GPS Fleet Management Platform</h1>
          <span ref={spanRef}>Award-winning GPS Tracking Software.</span>
          <Link to={'/Contact'} target="_blank" ref={CTARef}>
            Get Started
          </Link>
        </div>

        <div className="image">
          <img
            src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Untitled-design-22.png?w=225&ssl=1"
            alt=""
            ref={leftImgRef}
          />
          <img
            src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2020/08/shoot2.png?w=312&ssl=1"
            alt=""
            ref={rightImgRef}
          />
        </div>
      </div>

      <p className="Description">
        LionsAuto Vehicle Tracking Solutions combine sophisticated GPS
        tracking technology with flexible, advanced mapping and reporting
        software. A GPS-enabled Vehicle Tracking Device is installed on each
        vehicle to collect and transmit tracking data via a cellular and
        satellite network, whichever works best for your operations. The device
        then delivers the data to the LionsAuto hosted application, which you
        can access through the Web at any time. You will receive real-time
        vehicle tracking updates, including location, direction, speed, idle
        time, start/stop and more, allowing you to manage a tighter schedule and
        more efficient fleet.
      </p>

      <div className="benefits">
        <h2 className="title">Benefits of Vehicle Tracking</h2>

        <div className="benefit tracking">
          <h3>Tracking of Vehicles</h3>
          <p>
            Track individual drivers by measuring their driving pattern
            exceptions such as over-speeding, idling etc. Tracking an individual
            driver helps in customizing the dedicated training program to ensure
            safe driving environment by following all government guidelines.
          </p>
        </div>

        <div className="benefit analysis">
          <h3>Powerful Analysis Tools</h3>
          <p>
            Lions Auto vehicle tracking solution provides detail analysis tools
            to gives businesses the ability to easily monitor vehicles and
            equipment. We offers detailed field reporting and our Fleet tracking
            dashboard shows fleet data in a single location.
          </p>
        </div>

        <div className="benefit replay">
          <h3>Animated Map Replay</h3>
          <p>
            Lions Auto vehicle tracking solution provides Animated map history
            playback so that you can retrace a vehicles route on a map screen
            for a chosen date and time. You can view full animation of the route
            where your fleet travelled during a time interval.
          </p>
        </div>

        <div className="benefit alerts">
          <h3>Customizable Alerts</h3>
          <p>
            Lions Auto vehicle tracking solution very easy to use and
            customizable as per your tracking requirement. Lions Auto&#39;s
            alerts feature to make you aware of exceptions in real time tracking
            of your fleet.
          </p>
        </div>

        <div className="benefit mapping">
          <h3>Real-Time Mapping</h3>
          <p>
            Our GPS vehicle tracking solutions help you manage routes for your
            delivery management. You will get route violation alerts if the
            route is not followed by the driver.
          </p>
        </div>

        <div className="benefit reports">
          <h3>Driver Behavior Reports</h3>
          <p>
            Our GPS vehicle tracking solutions help you manage all the driver
            information of your fleet and also assign drivers and get driver
            specific reports to your inbox everyday.
          </p>
        </div>
      </div>

      <div className="solutions">
        <div className="solution track">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/04/Speedorack-Vehicle-Tracking-Software_01.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Lions Auto Vehicle Tracking Software</h3>
            <p>
              Using Lions Auto Vehicle Tracking Software you will be able to
              manage multiple fleets, plan efficient routes, monitor driver
              behaviors, and do so much more with Lions Auto&#39;s fleet
              management platform. Lions Auto&#39;s practical features will
              simplify fleet management and give you a competitive edge over
              others. Lions Auto&#39;s tacking software is cost-effictive and
              easy to use
            </p>
            <Link to={'/GPS-Software'} target="_blank" className="first-link">
              Know More
            </Link>
          </div>
        </div>

        <div className="solution load">
          <div className="image">
            <SvgWrapper />
            <img
              src="https://pbs.twimg.com/media/FOoO_wvXIAM2-Mz?format=jpg&name=medium"
              alt=""
              className="target-img"
            />
          </div>
          <div className="description">
            <h3>Lions Auto Load Monitoring Solution</h3>
            <p>
              For many types of trucks, knowing the loaded weight is important
              for operating safely and maximizing payload whilst avoiding fines
              for overloading. According to the complexity of in motion load
              weight calculation, our approach is more stable, inexpensive &
              good precision than other methods. In this solution, load weight
              calculated based on monitoring truck suspension changes with a
              matched sensor by vehicle suspension type mechanism.
            </p>
            <Link
              to={'/Load-Monitoring'}
              target="_blank"
              className="second-link"
            >
              Know More
            </Link>
          </div>
        </div>

        <div className="solution fuel">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Speedotrack-Fuel-Monitoring-Solution_01.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Lions Auto Fuel Monitoring Solution</h3>
            <p>
              Fuel costs can amount up to 30% of all fleet management expenses,
              therefore affecting operating costs and company&#39;s profit in
              general. Lions Auto GPS tracking and telematics platform can help
              you cope with the major challenges related to fuel monitoring and
              management in the most user-friendly way.
            </p>
            <Link
              to={'/Fuel-Monitoring'}
              target="_blank"
              className="third-link"
            >
              Know More
            </Link>
          </div>
        </div>

        <div className="solution generator">
          <div className="image">
            <SvgWrapper />
            <img
              className="target-img"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Lions Auto Generator Monitoring Solution</h3>
            <p>
              We install sensors and smart devices, on the generator, that
              monitor various parameters such as – power generated, battery
              voltage, run hours, fuel level, etc. A gateway device then
              communicates these readings to our central server over the
              internet. The gateway works on GPRS, Wireless or Ethernet
              technology. You can then log onto the web application and view
              generator parameters, create reports – anywhere – and any time.
              Typical reports include generator status, fuel and maintenance
              reports etc.
            </p>
            <Link
              to={'/Generator-Monitoring'}
              target="_blank"
              className="fourth-link"
            >
              Know More
            </Link>
          </div>
        </div>

        <div className="solution mining">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Lions Auto Mining Equipment Monitoring</h3>
            <p>
              Monitoring of fuel consumption and operation modes of mining and
              quarrying equipment (rock trucks, bulldozers, crawler tractors,
              loaders, power units) allows to reduce operation costs, prevent
              fuel theft and equipment breakdown. The main feature of
              Technoton’s solutions for quarry equipment is using DFM Marine
              fuel flow meters, which were designed for equipment with fuel
              consumption up to 4000 L/h.
            </p>
            <Link
              to={'/Mining-Equipment-Monitoring'}
              target="_blank"
              className="fifth-link"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>

      <Partners />

      <div className="Features">
        <h2>Easy to Use Vehicle Tracking Software</h2>

        <div className="card playback">
          <img src={playback} alt="" />
          <h3>Monthly History Playback</h3>
          <p>
            Among Lions Auto&#39;s features is the Animated Map Replay option
            that allows you to retrace a vehicle&#39;s route on a map screen for
            a chosen date and time.
          </p>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </div>

        <div className="card alerts">
          <img src={alerts} alt="" />
          <h3>Real-Time Alerts</h3>
          <p>
            Customize Lions Auto alerts feature to make you aware of exceptions
            — in real time.
          </p>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </div>

        <div className="card tracking">
          <img src={tracking} alt="" />
          <h3>Real-Time Tracking</h3>
          <p>
            One of the major benefits of GPS tracking is that a business can
            view vehicle progress in real time.
          </p>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </div>

        <div className="card apps">
          <img src={apps} alt="" />
          <h3>Mobile Apps</h3>
          <p>
            Lions Auto vehicle tracking solution is mobile friendly and cross
            platform supported track your fleet where ever it goes.
          </p>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </div>

        <div className="card multiple">
          <img src={multiple} alt="" />
          <h3>Monitor Multiple Vehicles</h3>
          <p>
            Monitoring Multiple vehicle using Lions Auto is very easy, user
            friendly and cost effective.
          </p>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </div>
      </div>

      <div className="services">
        <div className="title">
          <span>FEATURES</span>
          <h2>
            Our Features & <br />
            <span>Services</span>
          </h2>
          <p>
            Lions Auto Vehicle Tracking Solutions combine sophisticated GPS
            tracking technology with flexible, advanced mapping and reporting
            software.
          </p>
          <p>
            A GPS-enabled Vehicle Tracking Device is installed on each vehicle
            to collect and transmit tracking data via a cellular and satellite
            network, whichever works best for your operations.
          </p>
          <p>
            The device then delivers the data to the Lions Auto hosted
            application, which you can access through the Web at any time.
          </p>

          <Link target="_blank">Get Started</Link>
        </div>

        <div className="features">
          <div className="feature visibility">
            <FontAwesomeIcon className="icon" icon={faBars} />
            <h3>Real Time Visibility</h3>
            <p>
              Monitoring your fleet allows you to know where your fleet is every
              time. you can only manage what you can see!
            </p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </div>

          <div className="feature cloud">
            <FontAwesomeIcon className="icon" icon={faLock} />
            <h3>Private Saas Cloud</h3>
            <p>
              Lions Auto&#39;s GPS tracking is streamed to our own private SaaS
              Cloud. Together with our specialised technicians and fleet system
              you are able to monitor 24/7.
            </p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </div>

          <div className="feature theft">
            <FontAwesomeIcon className="icon" icon={faCloud} />
            <h3>Prevent Fuel Theft</h3>
            <p>
              Our reliable fuel chart, combined with Google Earth and Google
              Street View will simplify the process of monitoring when and where
              your driver fills the fuel tank.
            </p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
