import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'
import trackingVehicleImage from '/src/assets/images/updatedimages/dashboard-pic.jpg'
import loadRestrictionImage from '/src/assets/images/updatedimages/speed-monitoring-pic.jpg'
import dumpTruckImage from '/src/assets/images/updatedimages/dump-truck.jpg'
import garbageTruckImage from '/src/assets/images/updatedimages/garbage-truck-pic.jpg'
import speedGovernorImage from '/src/assets/images/updatedimages/savings.jpg'
import vehiclebalancepic from '/src/assets/images/updatedimages/load-monitoring-pic.jpg'

const LoadMonitoring = () => {
  const animate = useContext(CurrentAnimationContext)
  useEffect(() => {
    // for header section
    animate.headerAnimation()
    // animation for features/benefits
    animate.benefitsArrayAnimation('.features-container', '.feature')

    animate.rightToLeftImage('.target-img', '.first-image')
    animate.leftToRightImage('.second-image', '.second-image')
    animate.rightToLeftImage('.target-img', '.third-image')
    animate.leftToRightImage('.fourth-image', '.fourth-image')
    animate.rightToLeftImage('.target-img', '.fifth-image')
    animate.leftToRightImage('.sixth-image', '.sixth-image')
    // animations for solutions descriptions
    animate.descriptionAnimation('.opportunities', '.description')
  }, [])
  return (
    <div className="Page Business SubPage-Business">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <span>
            WELCOME TO <span>LIONS AUTO</span>
          </span>
          <br />

          <h1>Vehicle Load Monitoring Solution</h1>
          {/* <span>Vehicle Load Monitoring Solution</span> */}
        </div>

        <p>
          For many types of trucks, knowing the loaded weight is important for
          operating safely and maximizing payload whilst avoiding fines for
          overloading. According to the complexity of in motion load weight
          calculation, our approach is more stable, inexpensive & good precision
          than other methods.
        </p>
        <p>
          In this solution, load weight calculated based on monitoring truck
          suspension changes with a matched sensor by vehicle suspension type
          mechanism. Then these data received by tracker device and send for
          server after combined with location and other truck status data.{' '}
          <br />
          <Link to="/contact">
            Please get in touch and our expert team will contact you.
          </Link>
        </p>
      </div>

      <div className="features">
        <h2>Features of Load Weight Monitoring</h2>

        <div className="features-container">
          <div className="feature reach">
            <h3>Load Measurements</h3>
            <p>
              Using our load weight monitoring solution our customer will be
              able to monitor weight based on monitoring truck suspension
              changes with a matched sensor by vehicle suspension type
              mechanism.
            </p>
          </div>

          <div className="feature reliability">
            <h3>Special Design</h3>
            <p>
              In order to monitor load variations in these vehicles, a mechanism
              is installed on the vehicle to convert the elevation changes into
              angular variations and calculate the load weight based on
              calibration data.
            </p>
          </div>

          <div className="feature ux">
            <h3>Vibration Resistant</h3>
            <p>
              Using our load weight monitoring solution our customer will be
              able to control vibration resistant because our solution design as
              per 5G/40Hz. It also comes with protection of IP67 standard.
            </p>
          </div>

          <div className="feature technology">
            <h3>Easy Installation</h3>
            <p>
              Our load weight monitoring solution is easy to install with our
              expert technician that will install and show live demo after
              installation of essential feature of load monitoring. we will also
              provide 24/7 support.
            </p>
          </div>
        </div>
      </div>

      <div className="opportunities">
        <h2>Application of Load Weight Monitoring</h2>
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/06/Speedotrack-Fuel-Monitoring-Solution.png?w=704&ssl=1"
          alt=""
        />
        <div className="opportunity franchising">
          <div className="image first-image">
            <SvgWrapper />
            <img className="target-img" src={trackingVehicleImage} alt="" />
          </div>

          <div className="description">
            <h3>Live Load Monitoring</h3>
            <p>
              Speedotrack Load weight monitoring solution is helpful for
              operating safely and maximizing payload
            </p>
          </div>
        </div>

        <div className="opportunity franchising">
          <div className="image second-image">
            <img src={loadRestrictionImage} alt="" />
          </div>

          <div className="description">
            <h3>Load Restrictions for Highway</h3>
            <p>
              Using our Load weight monitoring solution our customer can easily
              monitor load weight on truck and come to know that weather their
              driver is over loading the truck as per Govt. rules and norms to
              avoid penalty.
            </p>
          </div>
        </div>

        <div className="opportunity franchising">
          <div className="image third-image">
            <SvgWrapper />
            <img className="target-img" src={dumpTruckImage} alt="" />
          </div>

          <div className="description">
            <h3>Dump Truck Management</h3>
            <p>
              Using our Load weight monitoring solution our customer can easily
              monitor load weight on dump truck and come to know that weather
              their driver is over loading the truck as per Govt. rules and
              norms to avoid penalty.
            </p>
          </div>
        </div>

        <div className="opportunity franchising">
          <div className="image fourth-image">
            <img src={garbageTruckImage} alt="" />
          </div>

          <div className="description">
            <h3>Garbage Truck Management</h3>
            <p>
              Using our Load weight monitoring solution our customer can easily
              monitor load weight on Garbage truck and come to know that weather
              their driver is over loading the truck as per Govt. rules and
              norms to avoid penalty.
            </p>
          </div>
        </div>

        <div className="opportunity franchising">
          <div className="image fifth-image">
            <SvgWrapper />
            <img
              className="target-img"
              src={vehiclebalancepic}
              alt="Vehicle Balance Monitoring"
            />
          </div>

          <div className="description">
            <h3>Vehicle Balance Monitoring</h3>
            <p>
              Using our Load weight monitoring solution our customer can easily
              monitor load weight on dump truck and come to know that weather
              truck load is balanced or not which is helpful for end user to
              avoid any future accident.
            </p>
          </div>
        </div>

        <div className="opportunity franchising">
          <div className="image sixth-image">
            <img src={speedGovernorImage} alt="" />
          </div>

          <div className="description">
            <h3>Save your Money</h3>
            <p>
              Using our Load weight monitoring solution our customer can easily
              reduce their fleet cost in many ways like avoid overload
              condition, reduction in penalty for over load, Vehicle load
              balancer to avoid accident etc. main this it is also useful for
              resource planning to run the fleet which ultimately increase the
              revenue of organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadMonitoring
