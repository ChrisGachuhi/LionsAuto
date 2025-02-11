import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'
import advancedFleetManagementImg from '/src/assets/images/updatedimages/load-monitoring-pic.jpg'
import trackingVehicleImg from '/src/assets/images/updatedimages/dashboard-pic.jpg'
import mapsImg from '/src/assets/images/updatedimages/geo-fencing.jpg'
import predictivemaintenance from '/src/assets/images/updatedimages/internal-logging-pic.jpg'

function TankerTruck() {
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
  }, [])
  return (
    <div className="Page Software SubPage-Software">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <h1>Tanker Truck Monitoring Solution</h1>
        </div>

        <p>
          Truck tanker monitoring system provides precise fuel level and volume
          measurement in each compartment of cistern, also measurement of truck
          operating parameters, geolocation and route tracking using GPS/GLONASS
          , as well as driver&apos;s behavior – accelerations, harsh breaking
          and turning, speeding, high RPMs.
        </p>

        <p>
          Since the greatest value of tanker is the liquid cargo transported in
          cistern – the main goal of truck tanker monitoring system is to
          register and display status of liquid (diesel, biodiesel, kerosene,
          gasoline or other fuel): volume and temperature of liquid in cistern,
          if there were any manipulations with compartments of cistern (fuel
          theft, mixing with low-quality liquid) and places of liquid fill-up
          and delivery. Lions Auto GPS provides monitoring of more than 250
          operating parameters of fuel transportation and performance of truck.
          <br />
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Task of Tanker Truck Monitoring Solution</h2>
          <div className="features-container">
            <div className="feature label">
              <h3>Fuel monitoring in compartments</h3>
              <p>
                Keep an Eye on Every Drop with Lions Auto GPS. Our Tanker Fuel
                Monitoring solution ensures you have full control over your
                fleet&apos;s fuel usage. Say goodbye to fuel theft and
                wastage—our real-time monitoring technology tracks every litre,
                helping you save on costs and boost efficiency.
              </p>
            </div>

            <div className="feature access">
              <h3>Fuel temperature monitoring</h3>
              <p>
                Keep Your Cargo Safe with Advanced Tanker Temperature
                Monitoring! At Lions Auto GPS, we understand how crucial it is
                to maintain the right temperature for your valuable cargo.
                Whether you&apos;re transporting food, chemicals, or
                pharmaceuticals, we&apos;ve got you covered. With our
                state-of-the-art Tanker Temperature Monitoring solution, you can
                rest assured that your perishable and sensitive goods are always
                in safe hands.
              </p>
            </div>

            <div className="feature business">
              <h3>GPS location tracking</h3>
              <p>
                Never lose sight of your valuable assets again! With our
                advanced GPS tracking for tanker trucks, you can monitor your
                fleet in real-time, ensuring safety and efficiency on every
                journey. Real-time Location Updates,Enhanced Route
                Optimization,Fuel Usage Monitoring,Geo-Fencing for Security
                Alerts. Protect your business and ensure peace of mind with the
                best in GPS tracking technology.
              </p>
            </div>

            <div className="feature software">
              <h3>Fuel theft prevention</h3>
              <p>
                Fuel theft can drain your profits, but with Lions Auto GPS, you
                can put a stop to it! Our cutting-edge tracking system provides
                real-time alerts and monitoring to safeguard your fuel supply.
                Instant Theft Alerts, Precise Location Tracking, Secure Fuel
                Monitoring, Detailed Usage Reports
              </p>
            </div>

            <div className="feature management">
              <h3>Engine health status</h3>
              <p>
                Keep your fleet running smoothly and avoid costly breakdowns
                with our OBD tracking technology. Lions Auto GPS provides
                real-time engine health status, so you can catch issues early
                and maintain peak performanc, Real-Time Engine Diagnostics,
                Early Warning Alerts, Detailed Health Reports, Preventive
                Maintenance Reminders. Stay ahead of engine troubles and ensure
                your tanker trucks are always in top shape.
              </p>
            </div>

            <div className="feature easy">
              <h3>Easy Installation</h3>
              <p>
                Say goodbye to complicated setups! Our tracking devices are
                designed for quick and hassle-free installation, so you can
                start monitoring your tanker trucks in no time. Plug & Play
                Installation, Get Started in Minutes, Reliable GPS Tracking,
                Seamless Integration with Fleet Management. Whether you have one
                truck or an entire fleet,we makes it simple to keep
                track of your valuable assets.
              </p>
            </div>
          </div>
        </div>

        <h2>Feature of Tanker Truck Monitoring</h2>
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/06/Speedotrack-Fuel-Monitoring-Solution.png?w=704&ssl=1"
          alt=""
        />

        <div className="highlight">
          <div className="image first-image">
            <SvgWrapper />
            <img
              className="target-img"
              src={advancedFleetManagementImg}
              alt=""
            />
          </div>
          <div className="description">
            <h3>Resource Optimization</h3>
            <p>
              Tracking your Tanker trucks ensures your waste management company
              can provide superior, reliable service, resulting in happier
              customers and improved efficiency. Speedotrack Tanker Truck
              monitoring solution will help you to optimize your resource
              planning so your entire resource pool is utilized on a daily,
              weekly, or monthly basis. It will help you to ensures that the
              revenue is utilized to maximum effect and balance the workload.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image second-image">
            <img src={trackingVehicleImg} alt="" />
          </div>
          <div className="description">
            <h3>Tracking Progress</h3>
            <p>
              With your own custom tracking system for waste management
              companies from track Your Tanker truck, you will know where your
              garbage trucks are in real time, how fast they are going, and what
              traffic delays they may face. With a historical record of your
              garbage truck activities, you can eliminate inefficient trends.
              This critical information allows you to deliver the type of
              service that your customers demand. If you are looking to improve
              your efficiency and customer service in an affordable and proven
              way, you need waste management fleet tracking.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image third-image">
            <SvgWrapper />
            <img className="target-img" src={mapsImg} alt="" />
          </div>
          <div className="description">
            <h3>Live Tracking</h3>
            <p>
              GPS Tracking Devices for Tanker Trucks Track Your Truck offers all
              of these benefits, and more. With one of our systems, you will be
              able to Easily dispatch a new garbage truck when one is broken
              down. you can Improve routing to eliminate wasted time and fuel.
              You will be able to Ensure that drivers are held accountable for
              their whereabouts while on the job. You can handle customer
              disputes with historical or real-time information about vehicle
              locations. You can Keep customers satisfied with prompt service
              and safe driving habits. you will be able to send specialty
              vehicles to the right locations for large-item pickups.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image fourth-image">
            <img src={predictivemaintenance} alt="" />
          </div>
          <div className="description">
            <h3>Predictive Maintenance</h3>
            <p>
              Our Tanker management fleet tracking is designed to meet the
              unique needs of waste management companies. Our solution helps our
              customer to know predictive maintenance of vehicle to avoid over
              maintenance cost in future.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TankerTruck
