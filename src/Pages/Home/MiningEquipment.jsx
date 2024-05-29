import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'

function MiningEquipment() {
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
    animate.descriptionAnimation('.solution-container', '.description')
  }, [])
  return (
    <div className="Page Software SubPage-Software">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <h1>Mining Equipment Monitoring Solution</h1>
        </div>

        <p>
          Monitoring of fuel consumption and operation modes of mining and
          quarrying equipment (rock trucks, bulldozers, crawler tractors,
          loaders, power units) allows to reduce operation costs, prevent fuel
          theft and equipment breakdown.
        </p>

        <p>
          The main feature of Technoton’s solutions for quarry equipment is
          using DFM Marine fuel flow meters, which were designed for equipment
          with fuel consumption up to 4000 L/h. Also solution can include DUT-E
          fuel level sensors, which are installed in fuel tanks and determine
          accurate fuel level. The solution can be extended with axle load
          and/or bucket position monitoring by adding GNOM axle load/shift
          sensor. All received data is proceed by CANUp telematics gateway and
          sent to the web-based ORF4 telematics service, or directly by SMS,
          e-mail or messenger. <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Task of Mining Equipment Monitoring</h2>
          <div className="features-container">
            <div className="feature label">
              <h3>Machine Runtime</h3>
              <p>
                Our mining equipment monitoring solution comes with machine
                runtime tracking so that end user can track machine efficiency
                and plan their further activity to improve machine efficiency.
              </p>
            </div>

            <div className="feature access">
              <h3>Location Control</h3>
              <p>
                Our mining equipment monitoring solution comes with location
                control feature so that end user can track and locate their
                mining equipment in real time and mange their work force.
              </p>
            </div>

            <div className="feature business">
              <h3>Fuel Theft Prevention</h3>
              <p>
                Our solution comes with fuel theft prevention so that our
                customer can reduce their fuel consumption and maximize their
                revenue with our sensor installation in fuel tank.
              </p>
            </div>

            <div className="feature software">
              <h3>Fuel Consumption Monitoring</h3>
              <p>
                Fuel cost have very important role in mining business. our
                solution comes with fuel theft prevention so that our customer
                can reduce their fuel consumption and maximize their revenue
                with our sensor installation in fuel tank.
              </p>
            </div>

            <div className="feature management">
              <h3>Axle Load Weight</h3>
              <p>
                Load monitoring have very important role in mining business. our
                solution comes with Load monitoring feature so that our customer
                can know over load on mining equipment and avoid and penalty due
                to overload by traffic law.
              </p>
            </div>

            <div className="feature easy">
              <h3>Easy Installation</h3>
              <p>
                Our Mining equipment monitoring solution is easy to install with
                our expert technician that will install and show live demo after
                installation of all useful feature. we will also provide 24/7
                support in case of ant doubt or query.
              </p>
            </div>
          </div>
        </div>

        <h2>Mining Equipment Monitoring Solution</h2>
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/06/Speedotrack-Fuel-Monitoring-Solution.png?w=704&ssl=1"
          alt=""
        />

        <div className="highlight">
          <div className="image first-image">
            <SvgWrapper />
            <img
              className="target-img"
              src="/src/assets/images/updatedimages/fuel-theft-prevention.jpg"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Fuel Consumption Control</h3>
            <p>
              Our solution comes with Hourly fuel consumption in
              “Forward”/“Return” line with Total fuel consumption. end user will
              also be able to Total fuel consumption in
              “Idling”/“Optimal”/“Overload” mode of engine operation.Total fuel
              consumption in “Negative” mode of flow meter operation (return
              exceeds supply).
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image second-image">
            <img src="/src/assets/images/updatedimages/operations.png" alt="" />
          </div>
          <div className="description">
            <h3>Operating Parameter</h3>
            <p>
              Our solution comes with monitoring of fuel temperature with
              temperature correction status, Correction coefficient value &
              battery charge. end user will be able to Engine operating time in
              “Tampering” mode as well as “Interference” mode.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image third-image">
            <SvgWrapper />
            <img
              className="target-img"
              src="/src/assets/images/updatedimages/fuel-tank-monitoring.jpg"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Data for Reports</h3>
            <p>
              Our mining equipment monitoring solution comes with rich data
              reports. using our solution end user will be able to create report
              according to operating time of engine, Milage of equipment, Fuel
              consumption per shift and weight on equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiningEquipment
