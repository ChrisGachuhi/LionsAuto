import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function MotorcycleTracker() {
  return (
    <div className="Page Software">
      <div className="landing">
        <div className="title">
          <h1>Smart Motorcycle Tracking Solution</h1>
        </div>

        <p>
          WeTrack2 GPS vehicle tracker is designed to meet the needs of various
          peripherals. Its wide voltage range ensures its stable running on
          electro mobiles, motorcycles, cars and trucks. Small but compact, its
          highly reliable electric circuit and internal battery design-functions
          not only basic tracking but SOS call, tele-cutoff fuel, geo-fence,
          over-speed alert, historical data upload and more.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Features of Motorcycle Tracking Solution</h2>
          <div className="features-container">
            <div className="feature label">
              <h3>Light and compact</h3>
              <p>
                Our WeTrack2 (ET200) GPS vehicle tracker is Small in size
                allowing covert & easy mounting on any vehicle.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature access">
              <h3>Battery Protection</h3>
              <p>
                Our GPS vehicle tracker comes with optimum battery performance.
                it never drain out of the battery .
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature business">
              <h3>Multiple Tracking</h3>
              <p>
                Our GPS vehicle tracker Reports location in real time through
                different interfaces and inform end user.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature software">
              <h3>Multiple alarms</h3>
              <p>
                Our GPS tracker send Instant alert for vibration, overspeed,
                power cutoff and also comes with geo-fence feature.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature management">
              <h3>Configurable Tracking</h3>
              <p>
                Our tracking solution comes with Location uploaded following
                fixed distance, time interval, preset cornering.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature easy">
              <h3>Ignition Status</h3>
              <p>
                Our vehicle tracking solution comes with ignition status
                notification so that whenever you need to know status.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature update">
              <h3>Remote power Cutoff</h3>
              <p>
                Our vehicle tracking solution comes with Compel the vehicle to
                stop by breaking off the fuel connection.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature language">
              <h3>Easy Installation</h3>
              <p>
                Our vehicle tracking solution comes with easy installation on
                any vehicle with our expert technician .
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MotorcycleTracker
