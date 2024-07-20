import { useContext, useEffect } from 'react'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'

// Importing images
import fuelSensorsImage from '../../assets/images/updatedimages/fuel-mngmt-pic.jpg'
import whiteLabelImage from '../../assets/images/updatedimages/branding-pic.jpg'
import trackingVehicleImage from '../../assets/images/updatedimages/fuel-monitoring2.jpg'

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
        </div>
        <p>
          Fuel costs can amount up to 30% of all fleet management expenses,
          therefore affecting operating costs and company&apos;s profit in
          general. Among the major fuel related challenges experts define: Lions
          Auto GPS GPS tracking and telematics platform can help you cope with
          the major challenges related to fuel monitoring and management in the
          most user-friendly way.
          <br />
        </p>
      </div>

      <div className="features">
        <h2>Benefits of Our Fuel Monitoring Solution</h2>
        <div className="features-container">
          <div className="feature reach">
            <h3>See amount fueled in litres</h3>
            <p>
              Monitor the amount of fuel added in for each tank in litres as it
              happens
            </p>
          </div>

          <div className="feature reliability">
            <h3>Monitor Fuel Consumption Rate </h3>
            <p>
              Keep track of the amount of fuel consumed per kilometer covered.
            </p>
          </div>

          <div className="feature technology">
            <h3>Prevent Fuel Theft</h3>
            <p>
              Get the ability to see the amount of fuel stolen in litres
              including the time and location where it happened.
            </p>
          </div>

          <div className="feature ux">
            <h3>Fuel Reports</h3>
            <p>
              Easily generate timely fueling reports, which show any fueling
              done, fuel consumed, distance covered etc
            </p>
          </div>

          <div className="feature ux">
            <h3>Fuel Wastage</h3>
            <p>
              With our assistance, you will be able to see the amount of fuel
              wasted during idling
            </p>
          </div>

          <div className="feature technology">
            <h3>Total Fuel Used</h3>
            <p>
              Easily monitor the total amount of fuel used and the total
              distance covered for every vehicle
            </p>
          </div>
        </div>
      </div>

      <div className="opportunities">
        <h2>How our Fuel Monitoring Works</h2>

        <div className="opportunity franchising">
          <div className="image first-image">
            <SvgWrapper />
            <img
              className="target-img"
              src={fuelSensorsImage}
              alt="Fuel Sensors"
            />
          </div>

          <div className="description">
            <h3>Fuel Calibration</h3>
            <p>
              Fuel tank calibration is essential in order to create an accurate
              fuel chart for each vehicle. A well-trained Lions Auto GPS
              technician who is versed in the correct safety procedures will be
              dispatched to perform the fuel tank calibration.
            </p>
          </div>
        </div>

        <div className="opportunity franchising">
          <div className="image second-image">
            <img src={whiteLabelImage} alt="White Label" />
          </div>

          <div className="description">
            <h3>Tracking and Training</h3>
            <p>
              Graphs and fuel reports are easy to read and understand. As such,
              our customers are able to know ata glimpse, how much fueling was
              done, and how much was used, and the distance covered in
              kilometers.
            </p>
          </div>
        </div>

        <div className="opportunity franchising">
          <div className="image third-image">
            <SvgWrapper />
            <img
              className="target-img"
              src={trackingVehicleImage}
              alt="Tracking Vehicle"
            />
          </div>

          <div className="description">
            <h3>Fill Parameters</h3>
            <p>
              All parameters are entered into the Lions Auto GPS&apos;s fleet
              system allowing you to view the completed fuel chart. As you learn
              more and better understand the fuel tank and fuel consumption
              parameters, your fuel chart will reflect more accurate records.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FuelMonitoring
