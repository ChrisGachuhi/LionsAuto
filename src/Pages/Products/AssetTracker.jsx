import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'

function AssetTracker() {
  const animate = useContext(CurrentAnimationContext)
  useEffect(() => {
    // for header section
    animate.headerAnimation()
    // animation for features/benefits
    animate.benefitsArrayAnimation('.features-container', '.feature')
  }, [])
  return (
    <div className="Page Software SubPage-Software">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <h1>Asset Tracker Solution</h1>
        </div>

        <p>
          Have you ever worried about the security safety of your house and
          belongings in the event that the house is empty without anyone in? Or
          have you ever come across trespasses like your house, office, or
          garage is robbed by someone unfriendly? Then, Speedotrack Asset
          Tracker Solution is for you to safe guard your asset—It is your own
          DIY home security alarm and very easy to setup and use.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Benefits of Speedotrack Asset Tracker</h2>
          <div className="features-container">
            <div className="feature label">
              <h3>GPS+LBS positioning</h3>
              <p>
                Our Asset tracking solution supports both LBS and GPS tracking.
                LBS is less precise when compared to GPS because the device
                estimates its position in the area of the cell tower.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature access">
              <h3>Listen-in Surrounding</h3>
              <p>
                Speedotrack Asset Tracking solution allows you to Listen to the
                surroundings by sending a text message via your phone to know
                any problem around your asset to take any further action.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature business">
              <h3>IP65 waterproof grade</h3>
              <p>
                Allow the location to be pin pointed in the real time or
                periodically. Allow the location to be pin pointed in the real
                time or periodically. Allow the location to be pin pointed in
                the real time or periodically.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature software">
              <h3>IPX5 Water Proof</h3>
              <p>
                Speedotrack Personal Tracker is Water proof with IPX5 Global
                Standard to ensure stable operation in tough environment
                especially in rainy season for smooth tracking.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature management">
              <h3>10,000mAh Battery</h3>
              <p>
                Speedotrack Personal Tracker comes with long lasting battery
                capacity so that you have no need to frequent charging. Which
                result solid tracking for long duration for your asset.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature easy">
              <h3>Power Management</h3>
              <p>
                Personal Tracker is smart enough so that it comes with long
                lasting battery capacity so that you have no need to frequent
                charging and device provide solid tracking.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature easy">
              <h3>Strong Magnet</h3>
              <p>
                Speedotrack Personal tracker comes with Strong magnetic cover so
                that you can easily mount it on any vehicle or on an any asset
                and track your asset wherever you go.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature easy">
              <h3>Tamper Alert</h3>
              <p>
                Our asset tracker comes with temper alert which will sent you
                alert Once the device is disassembled or tempered, you will get
                instant alert on your device .
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature easy">
              <h3>Multiple Tracking</h3>
              <p>
                Speedotrack personal Tracking device offers multiple tracking.
                you can track using sending SMS, using Mobile App and via web
                app also.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetTracker
