import { Link } from 'react-router-dom'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'

import whitelabel from '/src/assets/images/updatedimages/White-label.jpg'
import trackingsoftware from '/src/assets/images/updatedimages/geo-fencing.jpg'
import franchising from '/src/assets/images/updatedimages/internal-logging-pic.jpg'
import trackingVehicle from '/src/assets/images/updatedimages/dashboard-pic.jpg' // Added import for tracking-vehicle.jpg

const GpsSoftware = () => {
  const animate = useContext(CurrentAnimationContext)
  useEffect(() => {
    // for header section
    animate.headerAnimation()

    animate.leftToRightImage('.whitelabel .image', '.opportunity.whitelabel')
    animate.rightToLeftImage('.target-img', '.opportunity.franchising')
    animate.rightToLeftImage(
      '.distribution .image',
      '.opportunity.distribution'
    )
    // animations for solutions descriptions
    animate.descriptionAnimation('.opportunities', '.description')
  }, [])
  return (
    <div className="Page Business">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <span>
            WELCOME TO <span>LIONS AUTO</span>
          </span>
          <br />

          <h1>GPS Tracking Software</h1>
          <span>Vehicle tracking software for GPS tracking business</span>
        </div>

        <div className="navigation">
          {/* in page navigation */}
          <Link>Cloud Hosted</Link>
          <Link>Self Hosted</Link>
          <Link>Personal Account</Link>
        </div>

        <p>
          LionsAuto GPS Software Solutions combine sophisticated GPS tracking
          technology with flexible, advanced mapping and reporting software. A
          GPS-enabled Vehicle Tracking Device is installed on each vehicle to
          collect and transmit tracking data via a cellular and satellite
          network, whichever works best for your operations. The device then
          delivers the data to the LionsAuto hosted application, which you can
          access through the Web at any time. You will receive real-time vehicle
          tracking updates, including location, direction, speed, idle time,
          start/stop and more, allowing you to manage a tighter schedule and
          more efficient fleet. <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="opportunities">
        <div className="opportunity franchising">
          <div className="image">
            <SvgWrapper />
            <img className="target-img" src={franchising} alt="" />
          </div>

          <div className="description">
            <h3>LionsAuto GPS Software (Cloud Hosted)</h3>
            <p>
              Hosted software is a great choice for GPS tracking business. It
              helps to avoid extra expenses when hosting GPS tracking software
              in own server. Server with software resides in LionsAuto Data
              Center and we undertake all technical aspects, while you will be
              able to concentrate on your core business. Our team will prepare
              server with software for you, support your service, ensure
              physical and electronic security and keep it up to date. You will
              get ready to go GPS tracking server in less than 24 hours, no
              technical skills needed.
            </p>
            <Link to={'/GPS-Software/Cloud-Hosted'} target="_blank">
              Explore More
            </Link>
          </div>
        </div>

        <div className="opportunity whitelabel">
          <div className="image">
            <img src={trackingsoftware} alt="" />
          </div>
          <div className="description">
            <h3>LionsAuto GPS Software (Self Hosted)</h3>
            <p>
              LionsAuto team developed unique GPS tracking platform - tracking
              software which is designed to build independent tracking server.
              GPS tracking platform is web based application which can operate
              globally. One physical GPS tracking server allows simultaneously
              monitor thousands of GPS trackers and smartphones, display their
              location on map, generate reports and alerts. GPS tracking
              platform has billing system which allows to charge customers for
              services.
            </p>
            <Link to={'/GPS-Software/Self-Hosted'} target="_blank">
              Explore More
            </Link>
          </div>
        </div>

        <div className="opportunity distribution">
          <div className="image">
            <img
              src={trackingVehicle} // Updated the src attribute to use the imported variable
              alt=""
            />
          </div>
          <div className="description">
            <h3>LionsAuto GPS Software (Personal Account)</h3>
            <p>
              This solution is recommended for personal use or small company.
              Personal tracking account allows to see location of objects
              (vehicles, family members...) in real time, instantly view
              historical tracks and be notified about events which requires your
              immediate attention. Generate various group reports, control
              devices remotely and much more. System is easy to use, mobile
              friendly, has intuitive user interface and is designed to
              communicate with a wide variety of GPS tracking devices including
              mobile phones and tablets.
            </p>
            <Link to={'/GPS-Software/Personal-Account'} target="_blank">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GpsSoftware
