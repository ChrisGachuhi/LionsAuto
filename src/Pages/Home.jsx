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
// import { element } from 'prop-types'

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
        LionsAuto Vehicle Tracking Solutions combine sophisticated GPS tracking
        technology with flexible, advanced mapping and reporting software. A
        GPS-enabled Vehicle Tracking Device is installed on each vehicle to
        collect and transmit tracking data via a cellular and satellite network,
        whichever works best for your operations. The device then delivers the
        data to the LionsAuto hosted application, which you can access through
        the Web at any time. You will receive real-time vehicle tracking
        updates, including location, direction, speed, idle time, start/stop and
        more, allowing you to manage a tighter schedule and more efficient
        fleet.
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
              src="/src/assets/images/updatedimages/track-vehicle.jpg"
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
              src="/src/assets/images/updatedimages/load-monitoring.jpg"
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
              id="whyme"
              src="/src/assets/images/updatedimages/fuel-monitoring2.jpg"
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
              src="/src/assets/images/updatedimages/generator-monitoring.jpg"
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
              src="/src/assets/images/updatedimages/mining-tools.jpg"
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
