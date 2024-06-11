import { Link } from 'react-router-dom'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'
import driverBehaviorImg from '/src/assets/images/updatedimages/geo-fencing-pic.jpg'
import whiteLabelImg from '/src/assets/images/updatedimages/internal-logging-pic.jpg'

function SmartCar() {
  const animate = useContext(CurrentAnimationContext)
  useEffect(() => {
    // for header section
    animate.headerAnimation()
    // animation for features/benefits
    animate.benefitsArrayAnimation('.features-container', '.feature')

    animate.leftToRightImage('.second-image', '.second-image')
    animate.rightToLeftImage('.target-img', '.third-image')
    animate.leftToRightImage('.fourth-image', '.fourth-image')
    animate.rightToLeftImage('.target-img', '.fifth-image')
    // animations for solutions descriptions
    animate.descriptionAnimation('.solution-container', '.description')
  }, [])
  return (
    <div className="Page Software SubPage-Software">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <h1>Smart Car Solution</h1>
        </div>

        <p>
          We offer a wide range of dashcams using 4G/WiFi networks, such as
          front-facing camera, driver-facing camera, interior (cabin-view)
          camera, rear camera, and backup camera. If the car cameras displayed
          cannot meet your requirements or if you need further assistance,
          please do not hesitate to contact us. We look forward to assisting you
          in finding the perfect solution.
        </p>

        <p>
          You can choose our products with no worries, as we provide a 13-month
          warranty for all tracking and DVR devices. If you choose to bind your
          devices with our platform Tracksolid/Tracksolid Pro, the warranty
          period extends to 24 months. Users can choose to upgrade their app if
          a newer version is available and get firmware upgrade services for
          free. Our app upgrades at least once every 2 weeks and the firmware
          for our products on sale upgrade at least once every 3 months. You can
          choose to subscribe to access all functions of our platform
          (app/web)and get better services.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="solution-container gps">
        <h2>LionsAuto Smart Car Solution</h2>
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/06/Speedotrack-Fuel-Monitoring-Solution.png?w=704&ssl=1"
          alt=""
        />

        <div className="highlight">
          <div className="image second-image">
            <img src={driverBehaviorImg} alt="" />
          </div>
          <div className="description">
            <h3>Driving Behavior Monitoring</h3>
            <p>
              Driver behavior is most important fact or for any fleet
              management. our JC400P provides complete solution to manage driver
              behavior it provides Leveraging data on the driving behavior of
              your drivers, including harsh acceleration, harsh braking, and
              sharp turn will help reduce accident rate and improve fuel economy
              of your fleet.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image third-image">
            <SvgWrapper />
            <img
              className="target-img"
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/02/Smart-Car-Solution_Highly-Integrated-Design_01.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Highly Integrated Design</h3>
            <p>
              The two high-definition camera lens are integrated into one
              housing, making the streamlined JC400P more compact for mounting
              to the windshield without taking any space on the dashboard. Just
              remove the protective liner on the 3M tape, attach it to the best
              place on the windshield, and you are ready to hit the road.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image fourth-image">
            <img src={whiteLabelImg} alt="" />
          </div>
          <div className="description">
            <h3>Event Video to Cloud</h3>
            <p>
              In the event of a serious accident, collision or improper driving
              behavior, the JC400D will, as required, capture event videos and
              send them to the cloud for storage. With a 4G connection, you can
              have faster data speeds and wider network coverage, enabling you
              to respond or take action immediately.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image fifth-image">
            <SvgWrapper />
            <img
              className="target-img"
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/02/Smart-Car-Solution_Panic-Button_01.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Panic Button</h3>
            <p>
              In the event of an accident or other emergency, one-press of the
              panic SOS will trigger the device to help the driver or passenger
              initiate an emergency call to pre-set SOS numbers and the back
              office until the call is answered and to flag important video
              footage for review. The external SOS button can be installed
              within easy reach of the driver or passenger for quick activation,
              giving peace of mind to all.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartCar
