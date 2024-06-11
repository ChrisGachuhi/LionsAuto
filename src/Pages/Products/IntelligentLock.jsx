import { Link } from 'react-router-dom'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'
import whiteLabelImage from '/src/assets/images/updatedimages/dashboard-pic.jpg'
import driverBehaviorImage from '/src/assets/images/updatedimages/cellular-connectivity.jpg'
import crmImage from '/src/assets/images/updatedimages/internal-logging-pic.jpg'

function IntelligentLock() {
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
          <h1>Electronic Cargo Tracking</h1>
        </div>

        <p>
          Built-in GPS module supporting both continuous and interval tracking.
          In the interval mode the device is in sleeping mode most of the time,
          and wakes only when needed (the vibration is detected, SMS, phone
          call, RFID event, or by timer). This allows for a long battery life,
          fitting for stationary assets security. The device also support LBS,
          but only by one BTS (Base Transciever Station).
        </p>

        <p>
          Intelligent Remote GPS Lock is a tracking and asset management
          applications, provides enhanced functionality, easy installation, and
          caters to a wide range of applications. Speedotrack intelligent GPS
          lock can greatly reduce the financial losses incurred by the
          difficulty in tracking such as trailers, containers, construction
          machines and other valuable mobile and fixed assets.
        </p>

        <p>
          The unit are equipped with improved IP67 enclosure and dual tampering
          detection mechanism, with a durable and long-life battery, as well as
          IP67 waterproof casing, without direct access to a power supply
          casing, without direct access to a power supply and ongoing
          maintenance, which enable this unit one of the best choice for
          valuable mobile assets monitoring.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Features of GPS Electronic Lock</h2>
          <div className="features-container">
            <div className="feature label">
              <h3>Standalone unit</h3>
              <p>
                Our Intelligent GPS Electronic Lock is a A standalone unit
                operated by rechargeable batteries. our GPS Electronic lock
                comes with good battery backup.
              </p>
            </div>

            <div className="feature access">
              <h3>Fast & Easy</h3>
              <p>
                Our GPS Electronic lock is easy mountable can be installed by
                attaching the unit to the container door frame and track it with
                our software dashboard.
              </p>
            </div>

            <div className="feature business">
              <h3>Damage Prevention</h3>
              <p>
                Our GPS Electronic lock comes with dimage prevention end user
                will get notification in case if someone cut the lock rope or
                open the back case cover.
              </p>
            </div>

            <div className="feature software">
              <h3>Flexible to use</h3>
              <p>
                You can configure it according to your need. Examples: Real time
                door open/closed, temperature high/low, battery charge level,
                location status, etc.
              </p>
            </div>

            <div className="feature management">
              <h3>Geo-Fencing</h3>
              <p>
                Our GPS Electronic lock comes with geo-fencing feature.
                Geo-fencing function raises notifcations when a container has
                entered or left a location.
              </p>
            </div>

            <div className="feature easy">
              <h3>Accelerometer Sensor</h3>
              <p>
                Our GPS Electronic lock comes with The built-in accelerometer
                keeps you informed about your fleet and changes in movement of
                your fleet.
              </p>
            </div>

            <div className="feature update">
              <h3>Offline Data</h3>
              <p>
                When the unit is out of coverage, all location and sensor
                information is saved to the memory and later transmitted once
                the unit is back in cellular coverage.
              </p>
            </div>

            <div className="feature language">
              <h3>Cross-Platform</h3>
              <p>
                Our GPS Electronic lock comes with multiple tracking feature
                provide multiple monitoring platform, which include web based
                tracking software and App.
              </p>
            </div>

            <div className="feature backup">
              <h3>SSD-Cloud</h3>
              <p>
                Our GPS Electronic lock comes with powerful local cloud hosted
                platform with SSD storage to provide awesome solution to our
                client with cutting edge technology. It reduces latency and
                response time.
              </p>
            </div>

            <div className="feature devices">
              <h3>Maximum Control</h3>
              <p>
                Intelligent Electronic Lock will supervise all openings and
                closings and informs you of all entries and exits to and from
                defined areas. Its unique design will enable 24/7 protection of
                your cargo efficiently.
              </p>
            </div>

            <div className="feature os">
              <h3>Real-time Monitoring</h3>
              <p>
                Our GPS electronic Lock is consistently informed about the
                status of your property or valuables. Real time information is
                at your fingertips at all times, including any irregularities or
                breaches.
              </p>
            </div>

            <div className="feature server">
              <h3>Easy Installation</h3>
              <p>
                With GPS and RFID combination, will make your assets information
                available in the palm of your control, in addition, will
                increase delivery operation efficiency and satisfy your
                customers needs.
              </p>
            </div>
          </div>
        </div>

        <h2>Features of GPS Electronic Lock</h2>
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/06/Speedotrack-Fuel-Monitoring-Solution.png?w=704&ssl=1"
          alt=""
        />

        <div className="highlight">
          <div className="image first-image">
            <SvgWrapper />
            <img className="target-img" src={whiteLabelImage} alt="" />
          </div>
          <div className="description">
            <h3>Easy to Manage</h3>
            <p>
              Our GPS Electronic lock controlable with Programmable events can
              be defined to both transmit and act on complex events. For
              example, you’ll be alerted if the lock rope is cut.Geo-fencing
              alerts when a container is entering/leaving a specified designated
              area at a specified time.Geo-fencing alerts when a container is
              entering/leaving a specified designated area at a specified
              time.he unit can be unlocked by sending SMS or GPRS commands, or
              swipping RFID card.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image second-image">
            <img src={driverBehaviorImage} alt="" />
          </div>
          <div className="description">
            <h3>Cellular Connectivity</h3>
            <p>
              Our GPS Electronic lock controlable with Cellular Connectivity and
              supports for GSM networks (GPRS or optional 3G), while using both
              the SMS channel and the data channel. Supported bands are
              850/900/1800/1900 MHz. Optional support for CDMA and HSDPA
              networks. It also supports for the GPRS/1x TCP/ IP networks by
              either staying online at all times, or coming online when a
              transmission is initiated.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image third-image">
            <SvgWrapper />
            <img className="target-img" src={crmImage} alt="" />
          </div>
          <div className="description">
            <h3>Internal Logging</h3>
            <p>
              Whenever a transmission fails to be sent, the entire message is
              saved to the memory for later transmission. 25000 complete
              messages including statuses can be recorded this way.Whenever a
              transmission fails to be sent, the entire message is saved to the
              memory for later transmission.25000 complete messages including
              statuses can be recorded this way.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntelligentLock
