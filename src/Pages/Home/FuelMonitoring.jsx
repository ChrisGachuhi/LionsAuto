import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'

const FuelMonitoring = () => {
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

          <h1>Fuel Monitoring Solution</h1>
          {/* <span>Vehicle Load Monitoring Solution</span> */}
        </div>

        <p>
          Fuel costs can amount up to 30% of all fleet management expenses,
          therefore affecting operating costs and company’s profit in general.
          Among the major fuel related challenges experts define: LionsAuto GPS
          tracking and telematics platform can help you cope with the major
          challenges related to fuel monitoring and management in the most
          user-friendly way.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="features">
        <h2>Task of Fuel Monitoring Solution</h2>

        <div className="features-container">
          <div className="feature reach">
            <h3>Robust GPS Tracking</h3>
            <p>
              Track individual drivers by measuring their driving pattern
              exceptions such as over-speeding, idling etc. Tracking an
              individual driver helps in customizing the dedicated training
              program to ensure safe driving environment.
            </p>
          </div>

          <div className="feature reliability">
            <h3>LionsAuto Cloud</h3>
            <p>
              Maintenance optimization help to minimize the downtime while
              providing the most effective use of systems in order to secure the
              desired results at the lowest possible costs, considering all
              possible constraints.
            </p>
          </div>

          <div className="feature technology">
            <h3>Useful graphs</h3>
            <p>
              LionsAuto Bus Monitoring Solution help to measure load of
              passenger inside the bus so that it will help to know the owner
              weather driver violating the Government law for overloading the
              passenger vehicle or any traffic law.
            </p>
          </div>

          <div className="feature ux">
            <h3>Regular Reports</h3>
            <p>
              LionsAuto Bus Monitoring Solution help to measure load of
              passenger inside the bus so that it will help to know the owner
              weather driver violating the Government law for overloading the
              passenger vehicle or any traffic law.
            </p>
          </div>

          <div className="feature ux">
            <h3>User-Friendly</h3>
            <p>
              LionsAuto Bus Monitoring Solution help to measure load of
              passenger inside the bus so that it will help to know the owner
              weather driver violating the Government law for overloading the
              passenger vehicle or any traffic law.
            </p>
          </div>

          <div className="feature technology">
            <h3>Cross-Platform</h3>
            <p>
              LionsAuto Bus Monitoring Solution help to measure load of
              passenger inside the bus so that it will help to know the owner
              weather driver violating the Government law for overloading the
              passenger vehicle or any traffic law.
            </p>
          </div>

          <div className="feature technology">
            <h3>Fuel Monitoring</h3>
            <p>
              LionsAuto Bus Monitoring Solution help to measure load of
              passenger inside the bus so that it will help to know the owner
              weather driver violating the Government law for overloading the
              passenger vehicle or any traffic law.
            </p>
          </div>

          <div className="feature technology">
            <h3>Air Notification</h3>
            <p>
              LionsAuto Bus Monitoring Solution help to measure load of
              passenger inside the bus so that it will help to know the owner
              weather driver violating the Government law for overloading the
              passenger vehicle or any traffic law.
            </p>
          </div>

          <div className="feature technology">
            <h3>Remote Engine Shutdown</h3>
            <p>
              LionsAuto Bus Monitoring Solution help to measure load of
              passenger inside the bus so that it will help to know the owner
              weather driver violating the Government law for overloading the
              passenger vehicle or any traffic law.
            </p>
          </div>

          <div className="feature technology">
            <h3>Fuel Graph Monitoring</h3>
            <p>
              LionsAuto Bus Monitoring Solution help to measure load of
              passenger inside the bus so that it will help to know the owner
              weather driver violating the Government law for overloading the
              passenger vehicle or any traffic law.
            </p>
          </div>

          <div className="feature technology">
            <h3>Prevent Fuel Theft</h3>
            <p>
              LionsAuto Bus Monitoring Solution help to measure load of
              passenger inside the bus so that it will help to know the owner
              weather driver violating the Government law for overloading the
              passenger vehicle or any traffic law.
            </p>
          </div>

          <div className="feature technology">
            <h3>Managed 24/7 Monitoring</h3>
            <p>
              LionsAuto Bus Monitoring Solution help to measure load of
              passenger inside the bus so that it will help to know the owner
              weather driver violating the Government law for overloading the
              passenger vehicle or any traffic law.
            </p>
          </div>
        </div>
      </div>

      <div className="opportunities">
        <h2>How our Fuel Monitoring Works</h2>
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/06/Speedotrack-Fuel-Monitoring-Solution.png?w=704&ssl=1"
          alt=""
        />

        <div className="opportunity franchising">
          <div className="image first-image">
            <SvgWrapper />
            <img
              className="target-img"
              src="/src/assets/images/updatedimages/fuel-sensors.jpg"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Fuel Calibration</h3>
            <p>
              Fuel tank calibration is essential in order to create an accurate
              fuel chart for each vehicle. A well-trained LionsAuto technician
              who is versed in the correct safety procedures will be dispatched
              to perform the fuel tank calibration.
            </p>
          </div>
        </div>

        <div className="opportunity franchising">
          <div className="image second-image">
            <img
              src="/src/assets/images/updatedimages/White-label.jpg"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Tracking and Training</h3>
            <p>
              While graph monitoring can appear to be an intimidating prospect,
              you will find that it is simple to understand and interpret these
              graphs thanks to regular in-house and on-site training for users.
            </p>
          </div>
        </div>

        <div className="opportunity franchising">
          <div className="image third-image">
            <SvgWrapper />
            <img
              className="target-img"
              src="/src/assets/images/updatedimages/tracking-vehicle.jpg"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Fill Parameters</h3>
            <p>
              All parameters are entered into the LionsAuto’s fleet system
              allowing you to view the completed fuel chart. As you learn more
              and better understand the fuel tank and fuel consumption
              parameters, your fuel chart will reflect more accurate records.
            </p>
          </div>
        </div>

        <p className="telematics">
          Truck telematics solution by LionsAuto is aimed on monitoring cargo
          status and performance of a freight truck and helps to improve fleet
          management system of a business. Truck telematics helps to reduce
          expenses on vehicle maintenance by using predictive maintenance
          approach – i.e. carrying out truck maintenance depending on real
          operation modes of engine, replacing fuel filters, tires and other
          consumable items when they are really actually worn out, rather than
          using schedule-based approach. Fuel tank calibration is essential in
          order to create an accurate fuel chart for each vehicle. A
          well-trained LionsAuto technician who is versed in the correct safety
          procedures will be dispatched to perform the fuel tank calibration.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>
    </div>
  )
}

export default FuelMonitoring
