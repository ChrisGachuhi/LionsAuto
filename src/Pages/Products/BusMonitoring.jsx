import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function BusMonitoring() {
  return (
    <div className="Page Software SubPage-Software">
      <div className="landing">
        <div className="title">
          <h1>Bus Monitoring Solution</h1>
        </div>

        <p>
          Speedotrack Bus monitoring system includes monitoring of technical
          condition of fleet, tracking real route of buses, monitoring driving
          behavior, additionally, the system allows to plan maintenance based on
          actual condition of the equipment. Speedotrack Monitoring system for
          bus can significantly reduce fuel costs and operating costs by
          optimizing routes, preventing downtime and minimizing draining of
          precious fuel. Monitoring system is suitable for city transport,
          inter-city buses, school buses, shuttle buses, airport buses etc.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Task of Bus Monitoring Solution</h2>
          <div className="features-container">
            <div className="feature label">
              <h3>Driver Behaviour Monitoring</h3>
              <p>
                Track individual drivers by measuring their driving pattern
                exceptions such as over-speeding, idling etc. Tracking an
                individual driver helps in customizing the dedicated training
                program to ensure safe driving environment.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature access">
              <h3>Maintenance optimization</h3>
              <p>
                Maintenance optimization help to minimize the downtime while
                providing the most effective use of systems in order to secure
                the desired results at the lowest possible costs, considering
                all possible constraints.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature business">
              <h3>Load measurement</h3>
              <p>
                Speedotrack Bus Monitoring Solution help to measure load of
                passenger inside the bus so that it will help to know the owner
                weather driver violating the Government law for overloading the
                passenger vehicle or any traffic law.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature software">
              <h3>Precise fuel monitoring</h3>
              <p>
                Fuel monitoring solution is designed for precision fuel level
                analysis in all kinds of vehicle tanks, also in tanks of fixed
                connections. It helps to interchange the standard fuel meter of
                a vehicle in order to detect and prevent fuel theft.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature management">
              <h3>Geo-fencing Alerts</h3>
              <p>
                Geofencing is a service that triggers an action when a device
                enters a set location. Coupons, notifications, engagement
                features, security alerts — businesses are finding creative ways
                to make use of these virtual boundaries.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature easy">
              <h3>Easy Installation</h3>
              <p>
                Speedotrack Bus Monitoring Solution is easy to install and
                setup. You will get all essential support from Speedotrack from
                installation to live tracking. using Speedotrack GPS solution is
                very simple and also cost effective.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>

        <div className="highlight">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/04/Speedotrack-GPS-Software-Personal-Account_01.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Fuel Calibration</h3>
            <p>
              Using Speedotrack Bus Monitoring Solution you will be ale to
              measure Precise measurement of remaining fuel in tank and fuel
              consumption, sending data to dashboard. This would be helpful to
              know actual mileage of bus or your Bus driver doing any misleading
              activity behind you. Speedotrack Bus monitoring Solution helped
              many customer in India and Abroad to reduce their operating cost
              and maximize their revenue.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Dangerous-Driving_02.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Dangerous Driving</h3>
            <p>
              Dangerous driving is defined as when an individual's driving falls
              below the expected level of a careful and competent driver.
              Examples of dangerous driving would include racing or aggressive
              driving, driving while tired, or being involved in a police chase.
              using Speedotrack Bus Monitoring Solution you will be able to
              monitor the behavior of your Bus driver weather your driver
              following proper traffic rules or not.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/04/Speedotrack-GPS-Software-Personal-Account_01.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Predictive maintenance</h3>
            <p>
              Predictive maintenance techniques are designed to help determine
              the condition of in-service equipment in order to estimate when
              maintenance should be performed. This approach promises cost
              savings over routine or time-based preventive maintenance, because
              tasks are performed only when warranted. Speedotrack Bus
              Monitoring Solution helps to reduce your maintenance cost and help
              to maximise your profit with its maintance alert.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Operation-Management_03.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Operation Monitoring</h3>
            <p>
              Using Speedotrack Bus Monitoring Solution you can track and
              optimize overall operation time of your Bus. You can use
              intelligent route replay. You can use Geo fencing feature which
              will alert you if Bus cross fencing area decided by you. Yuu can
              use Location Geo-tagging to tag place co-ordinates (latitude and
              longitude), bearings, altitude, distances, or even place names.
              The best part of is you will get real time over speeding alert if
              your bus driver cross standard speed limit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusMonitoring
