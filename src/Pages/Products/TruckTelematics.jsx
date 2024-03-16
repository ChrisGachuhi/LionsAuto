import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'

function TruckTelematics() {
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
    // animations for solutions descriptions
    animate.descriptionAnimation('.solution-container', '.description')
  }, {})
  return (
    <div className="Page Software SubPage-Software">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <h1>Truck Telematic Solution</h1>
        </div>

        <p>
          Approximately half of costs of a vehicle fleet is fuel and truck
          maintenance. Reducing expenses for combustibles and lubricants, and
          costs for technical maintenance may help to increase efficiency of
          fleet and generate additional profit from vehicle operation, that can
          be directed to further development of a business.
        </p>

        <p>
          Truck telematics solution by LionsAuto is aimed on monitoring cargo
          status and performance of a freight truck and helps to improve fleet
          management system of a business. By equipping trucks with
          LionsAuto’s telematics hardware, fleet manage/company owner gets an
          opportunity to:
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Task of Truck Telematic Monitoring</h2>
          <div className="features-container">
            <div className="feature label">
              <h3>Engine Operating Hours</h3>
              <p>
                Using our Truck Telematic Solution our customer will be able to
                monitor Engine operating hours that will be helpful for our end
                user to plan their activity to increase the efficiency of
                operation.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature access">
              <h3>Fuel Consumption</h3>
              <p>
                Fuel consumption have very important role in fleet business our
                telematic solution helps our client to monitor their fuel
                consumption and fuel theft to grow their profit.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature business">
              <h3>Monitoring Fuel</h3>
              <p>
                Using our Truck telematic solution our customer will be able to
                monitor fuel consumption per operation and helps them to track
                fuel theft happening behind their back.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature software">
              <h3>Engine Health Check</h3>
              <p>
                Engine health has very important role in fleet business our
                truck telematic solution helps our end user to monitor engine
                health and prevent any major maintenance in future.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature management">
              <h3>Measuring Axle</h3>
              <p>
                Load weight monitoring has many benefits like avoid penalty due
                to over load and load condition for highway to avoid penalty by
                violating government traffic rules & regulation.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature easy">
              <h3>Easy Installation</h3>
              <p>
                Our load Truck Telematic solution is easy to install with our
                expert technician that will install and show live demo after
                installation of essential feature of load monitoring. we will
                also provide 24/7
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>

        <h2>Feature of Truck Telematic Solution</h2>
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/06/Speedotrack-Fuel-Monitoring-Solution.png?w=704&ssl=1"
          alt=""
        />

        <div className="highlight">
          <div className="image first-image">
            <SvgWrapper />
            <img
              className="target-img"
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/04/Speedotrack-GPS-Software-Personal-Account_01.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Fuel Volume Monitoring</h3>
            <p>
              Fuel costs can amount up to 30% of all fleet management expenses,
              therefore affecting operating costs and company’s profit in
              general. Among the major fuel related challenges experts define:
              Fuel theft, Increasing fuel costs.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image second-image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/02/Truck-Telematic-Solution_Axle-Load-Monitoring_01.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Axle Load Monitoring</h3>
            <p>
              Load weight monitoring has many benefits like avoid penalty due to
              over load and load condition for highway to avoid penalty by
              violating government traffic rules & regulation.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image third-image">
            <SvgWrapper />
            <img
              className="target-img"
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/04/Speedotrack-GPS-Software-Personal-Account_01.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Engine Monitoring</h3>
            <p>
              Engine health has very important role in fleet business our truck
              telematic solution helps our end user to monitor engine health and
              prevent any major maintenance in future.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image fourth-image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/02/Truck-Telematic-Solution_Location-Tracking_01.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Location Tracking</h3>
            <p>
              LionsAuto Vehicle Tracking Solutions combine sophisticated GPS
              tracking technology with flexible, advanced mapping and reporting
              software. A GPS-enabled Vehicle Tracking Device is installed on
              each vehicle to collect and transmit tracking data via a cellular
              and satellite network, whichever works best for your operations.
              The device then delivers the data to the LionsAuto hosted
              application, which you can access through the Web at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TruckTelematics
