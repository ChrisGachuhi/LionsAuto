import LandingAnimation from '../../Components/animated-components/LandingAnimation'

import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'

function GpsTracker() {
  const animate = useContext(CurrentAnimationContext)
  useEffect(() => {
    // for header section
    animate.headerAnimation()

    animate.benefitsArrayAnimation('.features', '.feature')
    // animations for solutions descriptions
  }, [])

  return (
    <div className="Page Software SubPage-Software">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <h1>Realtime Vehicle Tracking</h1>
        </div>

        <p>
          Our live vehicle tracking systems puts you in total control of your
          vehicles. We offer an array of benefits from viewing vehicle progress
          in real time to increasing overall fleet productivity. Our state of
          the art Live GPS fleet tracking devices will enable you to gain a full
          understanding and stay on top of your fleet&apos;s daily operations,
          helping you to reduce costs, stay ahead of vehicle maintenance and
          enhance the overall efficiency of operations. Each real-time GPS
          tracking vehicle device comes with extended warranty.
          <br />
        </p>

        <div className="title">
          <h2>What is Realtime Vehicle Tracking</h2>
        </div>
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/AIS-140-GPS-Tracker.png?w=684&ssl=1"
          alt=""
        />
        <p>
          <br />
          Real-time vehicle tracking involves using GPS technology to monitor
          the location, movement, and status of vehicles in real-time. This
          system typically consists of GPS devices installed in our clients
          vehicles, which transmit data to a our central server.
          <br />
        </p>
      </div>

      <div className="solution-container">
        <div className="features">
          <h2>The Benefits of Realtime Vehicle Tracking</h2>
          <div className="features-container">
            <div className="feature label">
              <h3>Fleet Management</h3>
              <p>
                Manage from 1 to thousands of your company vehicles all from the
                same account. Our platform offers total visibility of your
                vehicle movements and statuses in real-time.
              </p>
            </div>

            <div className="feature access">
              <h3>Realtime Tracking System</h3>
              <p>
                Our robust vehicle tracking system ensures accurate vehicle
                locations and movements ensuring safety and real time monitoring
                of your assets.
              </p>
            </div>

            {/* <div className="feature business">
              <h3>GPS Business</h3>
              <p>
                With our White Label business opportunity and Distribution
                solution you can easily build Profitable GPS tracking business
                with your own with our 24/7 support.
              </p>
            </div> */}

            <div className="feature software">
              <h3>Driver Behavior</h3>
              <p>
                Drivers are a vital part of fleet operations. With our systems,
                our clients are able to monitor a driver&apos;s driving
                behaviors such as harsh braking, harsh cornering, harsh
                acceleration, speeding, etc.
              </p>
            </div>

            <div className="feature management">
              <h3>Route Optimization</h3>
              <p>
                Lions Auto GPS tracking system ensures vehicles are driven on
                the shortest route and in the safest way possible. Its very
                possible to monitor routes taken and hold drivers accountable.
              </p>
            </div>

            <div className="feature easy">
              <h3>Service and Maitenance</h3>
              <p>
                Use our system to plan, record and notify you of your vehicles
                service and maintenace schedules to ensure services are not
                missed nor delayed.
              </p>
            </div>

            <div className="feature update">
              <h3> Remote Engine Immobilazation</h3>
              <p>
                Easily send commands from both the app and web to immobilize
                your vehicle. This gives you total control of your assets and
                your drivers.
              </p>
            </div>
          </div>
        </div>

        <div className="highlight">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/AIS-140-GPS-Tracker_0030.png?w=1170&ssl=1"
              alt=""
            />
          </div>

          <div className="description">
            <h4>PSV Tracking</h4>
            <p>
              Monitor and track locations and movements of your matatus in real
              time using our advanced vehicle tracking system.
            </p>

            <h4>AMBULANCE Tracking</h4>
            <p>
              Our system can be optimized for ambulance tracking to ensure
              timely arrival and evacutaion of the persons in need of medical
              assistance.
            </p>

            <h4>TAXI Tracking</h4>
            <p>
              use our tracking system to track and monitor locations and
              distance travelled by your assigned taxi driver to ensure they do
              not cheat on you. At the same time, the system ensures security of
              the vehicles.
            </p>

            <h4>SCHOOL BUS</h4>
            <p>
              Our school bus tracking system ensures accurate location
              monitoring of your school buses. The system can notify the school
              managers and parents when the students are picked and dropped at
              school.
            </p>
          </div>
        </div>
      </div>

      <div className="extras">
        <div className="extra">
          <h3>Real-time GPS Tracking</h3>
          <p>
            Using our Realtime Vehicle Tracking service for your vehicles you
            can check locations, fuel level, parking statuses, distance covered,
            etc.
          </p>
        </div>

        <div className="extra">
          <h3>Unlimited Data Storage</h3>
          <p>
            Our advanced software keeps all the records up to 12 months whci can
            be downloaded via PDF or xlsx formats
          </p>
        </div>

        <div className="extra">
          <h3>SOS call & panic bottom</h3>
          <p>
            SOS call & Panic bottom use for your driver and passenger&apos;s
            safety, if feel unwell in school bus then they can use this for
            quick.
          </p>
        </div>

        <div className="extra">
          <h3>Dust & Water Proof</h3>
          <p>
            Our Realtime Vehicle Tracking device is able to fight with dust &
            water. It&apos;s completely dust & waterproof device.
          </p>
        </div>

        <div className="extra">
          <h3>Door Status Detection</h3>
          <p>
            Now you also get the alert of vehicle doors alert. If the doors are
            not locked properly you receive the alert of it.
          </p>
        </div>

        <div className="extra">
          <h3>Two Way Communications</h3>
          <p>
            With MIC and speaker connected, it&apos;s easy to realize
            voice-monitor or two-way audio.
          </p>
        </div>

        <div className="extra">
          <h3>Multiple Alert Systems</h3>
          <p>
            Now you also get the alert of vehicle doors alert. If the doors are
            not locked properly you receive the alert of it.
          </p>
        </div>

        <div className="extra">
          <h3>Theft Protection</h3>
          <p>
            Using our Realtime Vehicle Tracking for your school buses you can
            check the real-time position of your vehicle.
          </p>
        </div>
      </div>
    </div>
  )
}

export default GpsTracker
