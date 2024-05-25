import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'

function SchoolBusTracker() {
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
  }, {})
  return (
    <div className="Page Software SubPage-Software">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <h1>GPS Tracker For School Bus</h1>
        </div>

        <p>
          Tracking of multiple school bus, driver activity, fuel tracking, and
          speed tracking is a most complicated work for school admin staff and
          transport manager. Sppedtrack GPS make your work simple by using AIS
          140 GPS tracker for the school bus with RFID Attendance System. Our
          RFID attendance system sends auto SMS notification to parents when
          their child board and board from the school bus. The school admin
          staff can generate the bus attendance report online.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Task of GPS tracker for School Bus</h2>
          <div className="features-container">
            <div className="feature label">
              <h3>Assign Route & Stop</h3>
              <p>
                Assign route for all bus and store all stoppage details in our
                software. New Driver can easily drive according it.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature access">
              <h3>Allocate Student</h3>
              <p>
                Allocate students for separate bus route wise & stoppage wise.
                Transport manager can easily get report of seat availability.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature business">
              <h3>RFID Attendance System</h3>
              <p>
                We also provide RFID Attendance system for school bus. Parents
                get automatic SMS notification when their child board .
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature software">
              <h3>Live Monitoring</h3>
              <p>
                Live monitor your students and driver activity using our NDVR,
                or store it for further use.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature management">
              <h3>Estimate Arrival Time(ETA)</h3>
              <p>
                Now parents also get Estimate Arrival time of school bus in
                their mobile app
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature easy">
              <h3>Online fee collection</h3>
              <p>
                Collect your school bus fee online by using our school
                management software.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>

        <h2>Features of School Bus Monitoring</h2>

        <div className="highlight">
          <div className="image first-image">
            <SvgWrapper />
            <img
              className="target-img"
              src="/src/assets/images/updatedimages/geo-fencing.jpg"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Route Optimization</h3>
            <p>
              Route optimization is the process of determining the most
              cost-efficient route. It's more complex than simply finding the
              shortest path between two points. Using LionsAuto School bus
              monitoring solution, the school administrator will be able to
              monitor the entire fleet of buses. They can also optimize the
              route to avoid traffic. Both parents and school authorities can
              monitor bus route violation, over speed incidents, unscheduled
              stops and driver information.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image second-image">
            <img
              src="/src/assets/images/updatedimages/responsible-parent.jpg"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Alerts for Parents</h3>
            <p>
              The school bus GPS tracking system allows the school and parents
              to gain visibility, safety and control into the GPS location of
              the school buses along with arrival and departure times at every
              stop along the route, including how long the bus spent at any
              stop, pick up and drop off of students and alerting if buses are
              running late. LionsAuto School bus Monitoring Solution provides
              peace of mind to the parents after onboarding their childeren on
              school bus.Both Parent and school authorities can monitor bus
              route violation, over speed incidents, unscheduled stops and
              driver information.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image third-image">
            <SvgWrapper />
            <img
              className="target-img"
              src="/src/assets/images/updatedimages/tracking-vehicle.jpg"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Compliant Driving</h3>
            <p>
              Using our GPS tracker for School Bus School administration can
              monitor driver behavior weather driver is following all traffic
              guidelines or not. On and off-road facing cameras to ensure ideal
              driver behavior. ftware applications to access and use pertinent
              data.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolBusTracker
