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
          In the fast-paced world of vehicle lease management and asset finance,
          the Lions Auto GPS Magnetic Vehicle Asset Tracker offers a
          revolutionary solution that combines portability, ease of use, and
          advanced tracking capabilities. This innovative device is designed to
          provide real-time GPS tracking for vehicles and valuable assets,
          making it an ideal choice for fleet managers, businesses, and
          individuals who require reliable tracking with minimal installation
          hassle.
        </p>

        <p>
          The standout feature of the Lions Auto GPS Magnetic Tracker is its
          powerful magnetic mount, which allows for quick and secure attachment
          to any metal surface. This design eliminates the need for permanent
          installation, providing users with the flexibility to move the tracker
          between different vehicles or assets as needed. Whether it’s a company
          fleet, construction equipment, or personal vehicles, the magnetic
          mount ensures the tracker stays firmly in place even in challenging
          environments.
        </p>

        <p>
          With its real-time GPS tracking capabilities, the Lions Auto Tracker
          offers precise location updates that can be accessed through a
          user-friendly mobile app or web interface. This feature enables users
          to monitor their assets’ whereabouts at any given moment, enhancing
          operational efficiency and security. The device also supports
          geofencing, allowing users to set up virtual boundaries on a map. If a
          vehicle or asset moves outside these boundaries, instant alerts are
          sent, helping to prevent unauthorized use and theft.
        </p>

        <p>
          Built to endure harsh conditions, the Lions Auto GPS Magnetic Tracker
          is housed in a rugged, weather-resistant casing. This durability
          ensures that the tracker remains functional in various environmental
          conditions, from extreme temperatures to heavy rain. Additionally, the
          device’s long-lasting battery provides extended operational periods
          between charges, minimizing maintenance and ensuring continuous
          tracking.
        </p>

        <p>
          The Lions Auto GPS Magnetic Vehicle Asset Tracker also includes
          features such as historical data tracking, speed monitoring, and
          driver behavior analysis. These functionalities help businesses
          optimize routes, manage fuel consumption, and improve overall fleet
          efficiency. With its easy installation, reliable performance, and
          advanced features, the Lions Auto GPS Magnetic Vehicle Asset Tracker
          is a top choice for anyone looking to enhance their asset security and
          management capabilities.
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Benefits of Lions Auto GPS Asset Tracker</h2>
          <div className="features-container">
            <div className="feature label">
              <h3>GPS+LBS positioning</h3>
              <p>
                Our Asset tracking solution supports both LBS and GPS tracking.
                LBS is less precise when compared to GPS because the device
                estimates its position in the area of the cell tower.
              </p>
            </div>

            <div className="feature access">
              <h3>Listen-in Surrounding</h3>
              <p>
                Lions Auto GPS Asset Tracking solution allows you to Listen to
                the surroundings by sending a text message via your phone to
                know any problem around your asset to take any further action.
              </p>
            </div>

            <div className="feature business">
              <h3>IP65 waterproof grade</h3>
              <p>
                Allow the location to be pin pointed in the real time or
                periodically. Allow the location to be pin pointed in the real
                time or periodically. Allow the location to be pin pointed in
                the real time or periodically.
              </p>
            </div>

            <div className="feature software">
              <h3>IPX5 Water Proof</h3>
              <p>
                Lions Auto GPS Personal Tracker is Water proof with IPX5 Global
                Standard to ensure stable operation in tough environment
                especially in rainy season for smooth tracking.
              </p>
            </div>

            <div className="feature management">
              <h3>10,000mAh Battery</h3>
              <p>
                Lions Auto GPS Personal Tracker comes with long lasting battery
                capacity so that you have no need to frequent charging. Which
                result solid tracking for long duration for your asset.
              </p>
            </div>

            <div className="feature easy">
              <h3>Power Management</h3>
              <p>
                Personal Tracker is smart enough so that it comes with long
                lasting battery capacity so that you have no need to frequent
                charging and device provide solid tracking.
              </p>
            </div>

            <div className="feature easy">
              <h3>Strong Magnet</h3>
              <p>
                Lions Auto GPS Personal tracker comes with Strong magnetic cover
                so that you can easily mount it on any vehicle or on an any
                asset and track your asset wherever you go.
              </p>
            </div>

            <div className="feature easy">
              <h3>Tamper Alert</h3>
              <p>
                Our asset tracker comes with temper alert which will sent you
                alert Once the device is disassembled or tempered, you will get
                instant alert on your device .
              </p>
            </div>

            <div className="feature easy">
              <h3>Multiple Tracking</h3>
              <p>
                Lions Auto GPS personal Tracking device offers multiple
                tracking. you can track using sending SMS, using Mobile App and
                via web app also.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetTracker
