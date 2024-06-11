import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'
import fuelTankMonitoringImage from '/src/assets/images/updatedimages/savings.jpg'
import trackingVehicleImage from '/src/assets/images/updatedimages/geo-fencing-pic.jpg'
import driverBehaviorImage from '/src/assets/images/updatedimages/dashboard-pic.jpg'
import predictivemaintenance from '/src/assets/images/updatedimages/training-pic.jpg'

function GarbageTruck() {
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
          <h1>Garbage Truck Monitoring Solution</h1>
        </div>

        <p>
          Some of the main difficulties in waste management are illegal dumping
          of solid household waste (SHW) in forbidden places (away from
          landfill) and inefficient collection and transportation of
          garbage.That’s why first and foremost, garbage truck monitoring system
          is focused on truck location tracking and monitoring of operation of
          its attached equipment (blade, plate, etc).
        </p>

        <p>
          Garbage truck monitoring system allows to monitor garbage level in
          truck’s body, track places of SHW (waste) loading and unloading using
          axle load data and GPS coordinates, also helps to detect and prevent
          any attempts of unauthorized unloading of garbage.
        </p>

        <p>
          Waste truck telematics system records main parameters of truck
          operation – route, speed, RPM, fuel consumption, engine health. The
          data is used for detecting inefficient or even malicious truck
          operation, e.g. underload, idling, speeding, harsh braking, fuel theft
          etc.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Task of Garbage Truck Monitoring</h2>
          <div className="features-container">
            <div className="feature label">
              <h3>Tracking Places</h3>
              <p>
                with Speedotrack Garbage truck monitoring solution you will get
                real time location of your garbage truck where ever it goes . it
                will helps to increase efficiency & time management planning of
                your Garbage collection operation.
              </p>
            </div>

            <div className="feature access">
              <h3>Truck Body Filling</h3>
              <p>
                With installation of sensor in truck body driver can easily know
                the filling capacity of garbage truck and can decide when to
                unload it for further filling .This will help to increase the
                efficiency of garbage collection operation.
              </p>
            </div>

            <div className="feature business">
              <h3>Fuel Monitoring</h3>
              <p>
                With installation of fuel sensor in the fuel tank our solution
                provides accurate information about fuel level in the fuel tank.
                it helps in fuel theft detection and also provide control to
                activate vehicle equipment remotely.
              </p>
            </div>

            <div className="feature software">
              <h3>Engine Monitoring</h3>
              <p>
                Each time after vehicle's ignition is switch off, it remembers
                actual fuel level in the vehicles' fuel tank. in case of if fuel
                level drops it will send SMS alert to predefined phone number
                and activate siren.
              </p>
            </div>

            <div className="feature management">
              <h3>Detection of unloading</h3>
              <p>
                Garbage truck Solution comes with monitoring of unloading once
                the garbage truck unloaded SMS alert will be send on predefined
                phone number. It will help to monitor efficiency of your
                operation
              </p>
            </div>

            <div className="feature easy">
              <h3>Easy to Manage</h3>
              <p>
                Speedotrack Garbage truck Solution is easy to install with the
                help of our expert technician. we will show live working demo
                after complete installation. we are available 24/7 for our
                valuable customer.
              </p>
            </div>
          </div>
        </div>

        <h2>Feature of Garbage Truck Monitoring</h2>
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/06/Speedotrack-Fuel-Monitoring-Solution.png?w=704&ssl=1"
          alt=""
        />

        <div className="highlight">
          <div className="image first-image">
            <SvgWrapper />
            <img className="target-img" src={fuelTankMonitoringImage} alt="" />
          </div>
          <div className="description">
            <h3>Resource Optimization</h3>
            <p>
              Tracking your garbage trucks ensures your waste management company
              can provide superior, reliable service, resulting in happier
              customers and improved efficiency. Speedotrack Garbage Truck
              monitoring solution will help you to optimize your resource
              planning so your entire resource pool is utilized on a daily,
              weekly, or monthly basis. It will help you to ensures that the
              revenue is utilized to maximum effect and balance the workload.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image second-image">
            <img src={trackingVehicleImage} alt="" />
          </div>
          <div className="description">
            <h3>Tracking Progress</h3>
            <p>
              With your own custom tracking system for waste management
              companies from Track Your Truck, you will know where your garbage
              trucks are in real time, how fast they are going, and what traffic
              delays they may face. With a historical record of your garbage
              truck activities, you can eliminate inefficient trends. This
              critical information allows you to deliver the type of service
              that your customers demand. If you are looking to improve your
              efficiency and customer service in an affordable and proven way,
              you need waste management fleet tracking.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image third-image">
            <SvgWrapper />
            <img className="target-img" src={driverBehaviorImage} alt="" />
          </div>
          <div className="description">
            <h3>Live Tracking</h3>
            <p>
              GPS Tracking Devices for Garbage Trucks Track Your Truck offers
              all of these benefits, and more. With one of our systems, you will
              be able to Easily dispatch a new garbage truck when one is broken
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
              Our waste management fleet tracking is designed to meet the unique
              needs of waste management companies. Our solution helps our
              customer to know predective manintance of vehicle to avoid over
              maintenance cost in future.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GarbageTruck
