import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'

const GeneratorMonitoring = () => {
  const animate = useContext(CurrentAnimationContext)
  useEffect(() => {
    // for header section
    animate.headerAnimation()
    // animation for features/benefits
    animate.benefitsArrayAnimation('.features-container', '.feature')

    animate.rightToLeftImage('.target-img', '.first-image')
    animate.leftToRightImage('.second-image', '.second-image')
    animate.rightToLeftImage('.target-img', '.third-image')
    // animations for solutions descriptions
    animate.descriptionAnimation('.opportunities', '.description')
  }, {})
  return (
    <div className="Page Business">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <span>
            WELCOME TO <span>LIONS AUTO</span>
          </span>
          <br />

          <h1>Generator Monitoring Solution</h1>
          {/* <span>Vehicle Load Monitoring Solution</span> */}
        </div>

        <p>
          We install sensors and smart devices on the generator that monitor
          various parameters such as power generated, battery voltage, run
          hours, fuel level, etc. A gateway device then communicates these
          readings to our central server over the internet. The gateway works on
          GPRS, Wireless, or Ethernet technology. You can then log onto the web
          application and view generator parameters, create reports anywhere and
          anytime. Typical reports include generator status, fuel, and
          maintenance reports, etc.
          <br />
          <Link to="/Contact">
            Please get in touch and our expert team will contact you.
          </Link>
        </p>
      </div>

      <div className="features">
        <h2>Use cases of Generator Monitoring</h2>

        <div className="features-container">
          <div className="feature reach">
            <h3>Industries & Buildings</h3>
            <p>
              Our solution helps in easy management of fuel & energy
              consumption. Our solution helps in enhanced efficiency and
              reliability of the generator. Using our solution, the end-user can
              also monitor the generator location to help prevent theft of the
              generator.
            </p>
          </div>

          <div className="feature reliability">
            <h3>Leasing Companies</h3>
            <p>
              Leasing companies can monitor all generators from a central
              location. Our solution helps reduce costs through fewer site
              visits and workforce. Companies can monitor generator location and
              prevent theft.
            </p>
          </div>

          <div className="feature technology">
            <h3>Generator OEMs</h3>
            <p>
              Our solution helps OEMs deliver smarter generators to your
              customers. OEMs will be able to create new revenue opportunities
              in spares, consumables, and support. OEMs will be able to roll out
              their own generator monitoring solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="opportunities">
        <div className="opportunity franchising">
          <div className="image first-image">
            <SvgWrapper />
            <img
              className="target-img"
              src="/src/assets/images/updatedimages/electrical-performance.png"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Generator Performance</h3>
            <p>
              Monitor key generator performance metrics like total energy
              produced, energy produced per liter of fuel, power quality, and
              RMS parameters. If performance falls, you can take timely actions
              to bring performance back to an acceptable level.
            </p>
          </div>
        </div>

        <div className="opportunity whitelabel">
          <div className="image second-image">
            <img
              src="/src/assets/images/updatedimages/electrical-maintenance.png"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Reduce Maintenance Costs</h3>
            <p>
              Get information like hours run, battery voltages, and temperature
              trends. You can use this information to schedule maintenance. This
              can reduce sudden downtime, overall maintenance costs, and fuel
              consumption.
            </p>
          </div>
        </div>

        <div className="opportunity distribution">
          <div className="image third-image">
            <SvgWrapper />
            <img
              className="target-img"
              src="/src/assets/images/updatedimages/fuel-tank-monitoring.jpg"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Prevent Fuel Theft</h3>
            <p>
              With the sustained rise of global energy prices, fuel costs are a
              major part of the total cost of ownership. Fuel costs could be as
              high as 60% of the total cost of operations for a typical diesel
              generator running for about seven hours per day. This cost is
              driving many organizations to manage their generators more
              efficiently or consider other power system options. If you believe
              that your generators are consuming more than required fuel, a
              possible reason could be fuel theft. You can easily identify fuel
              theft by comparing fuel consumption with actual power generation
              and fuel receipts.
            </p>
          </div>
        </div>
      </div>
      {/* <Partners /> */}
    </div>
  )
}

export default GeneratorMonitoring
