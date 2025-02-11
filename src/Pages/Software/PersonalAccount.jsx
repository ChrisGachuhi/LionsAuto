import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'
import lowcost from '/src/assets/images/updatedimages/savings.jpg'
import dashboard from '/src/assets/images/updatedimages/dashboard-pic.jpg'
import geofencing from '/src/assets/images/updatedimages/geo-fencing.jpg'
import maps from '/src/assets/images/updatedimages/maps.jpg'

const PersonalAccount = () => {
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
          <h1>GPS Tracking Software (Personal Account)</h1> <br />
          <span>Grow your business & boost up sale with Lions Auto GPS</span>
        </div>

        {/* in page navigation */}

        <p>
          This solution is recommended for personal use or small company.
          Personal tracking account allows to see location of objects (vehicles,
          family members...) in real time, instantly view historical tracks and
          be notified about events which requires your immediate attention.
        </p>

        <p>
          Generate various group reports, control devices remotely and much
          more. System is easy to use, mobile friendly, has intuitive user
          interface and is designed to communicate with a wide variety of GPS
          tracking devices including mobile phones and tablets.
          <br />
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Features of GPS Personal Account Software</h2>
          <img
            src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/06/Speedotrack-Fuel-Monitoring-Solution.png?w=704&ssl=1"
            alt=""
          />
          <div className="features-container">
            <div className="feature label">
              <h3>White Label</h3>
              <p>
                It is very easy to start you own GPS tracking business with our
                White Label business opportunity with less investment and it is
                cost effective to grow your profit.
              </p>
            </div>

            <div className="feature access">
              <h3>API Access</h3>
              <p>
                Using our API Feature you will be able to develop mobile apps,
                frameworks, management tools, and software applications to
                access and use pertinent data
              </p>
            </div>

            <div className="feature business">
              <h3>GPS Business</h3>
              <p>
                With our White Label business opportunity and Distribution
                solution you can easily build Profitable GPS tracking business
                with your own with our 24/7 support.
              </p>
            </div>

            <div className="feature software">
              <h3>GPS Software</h3>
              <p>
                Our GPS Software comes with cutting edge GPS technology and we
                are one of the market leader in this segment used by many client
                in India and abroad.
              </p>
            </div>

            <div className="feature management">
              <h3>Manage GPS Business</h3>
              <p>
                We also provides dedicated website and CRM solution to our
                partner so that our partner can run and manage GPS tracking
                business smoothly and focus on building new sales.
              </p>
            </div>

            <div className="feature easy">
              <h3>Easy to Manage</h3>
              <p>
                Our CRM solution support will help to run and mange business
                smoothly and will help you increase you revenue and focus on
                customer relationship with our 24/7 support.
              </p>
            </div>

            <div className="feature update">
              <h3>Updated Software</h3>
              <p>
                We update our GPS tracking software on equal interval of time
                with latest cutting edge GPS tracking technology so that our
                partner should competitive enough as per GPS market.
              </p>
            </div>

            <div className="feature language">
              <h3>30+ Languages</h3>
              <p>
                Our GPS tracking software is multilingual and supports more 30+
                major languages so that our partner should not feel any
                difficulty to use and manage their GPS tracking business.
              </p>
            </div>

            <div className="feature backup">
              <h3>Automatic backups</h3>
              <p>
                Back is one the most important activity that has to be performed
                on equal interval of time and we provided automatic backup
                feature with our GPS tracking software.
              </p>
            </div>

            <div className="feature devices">
              <h3>Supported Devices</h3>
              <p>
                Our GPS tracking software comes with latest GPS tracking
                technology and supports all major GPS tracking devices avilable
                in the market and works seamlessly.
              </p>
            </div>

            <div className="feature os">
              <h3>Android and iOS</h3>
              <p>
                Our GPS tracking software supports both Android and iOS so that
                end user should not have any difficulty to run and mange their
                GPS tracking business via App or desktop.
              </p>
            </div>

            <div className="feature server">
              <h3>99.99% Server up-time</h3>
              <p>
                Our GPS tracking Server comes with cutting edge technology with
                solid server uptime with 99.99% uptime so that our partner focus
                on business building and keep rest on us.
              </p>
            </div>
          </div>
        </div>

        <h2>GPS Tracking Software (Personal Account)</h2>

        <div className="highlight">
          <div className="image first-image">
            <SvgWrapper />
            <img className="target-img" src={lowcost} alt="" />
          </div>
          <div className="description">
            <h3>Low Cost Tracking</h3>
            <p>
              With Lions Auto GPS GPS tracking Solution it is very easy to start
              GPS tracking business at very affordable cost. We provides all
              support to our partner like CRM solution, dedicated website and
              marketing material to kick start GPS tracking business. With our
              GPS tracking software you will have peace of mind and keep rest on
              us and focus on growing your GPS tracking business.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image second-image">
            <img src={dashboard} alt="" />
          </div>
          <div className="description">
            <h3>Track Fleet in Single Account</h3>
            <p>
              Our GPS tracking business is smart enough so that you will be able
              to track multiple fleet from single account. We have dedicated
              demo account where user can login and familiar with of GPS
              tracking platform and contact us in case of any doubt we are here
              to help you 24/7.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image third-image">
            <SvgWrapper />
            <img className="target-img" src={maps} alt="" />
          </div>
          <div className="description">
            <h3>Google Map Included</h3>
            <p>
              Google Maps with GPS Tracker shows your physical position in
              real-time on a moving Google Map. A small application on your PC
              uploads your GPS position periodically over either GPRS or 3G,
              which updates your position on a moving Google Map. Our GPS
              tracking solution comes with Google Map which make tracking of
              fleet easier. our multiple vehicle tracking feature comes with
              single account.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image fourth-image">
            <img src={geofencing} alt="" />
          </div>
          <div className="description">
            <h3>Geo-Coding Service Included</h3>
            <p>
              Our GPS tracking Solution comes with Geo-coding and reverse
              geocoding. Geocoding is the process of converting addresses (like
              &quot;City Square, along, Harambee Ave, Nairobi&quot;) into
              geographic coordinates (like latitude -1.2835415250551574, and
              longitude 36.82310269601992), which you can use to place markers
              or position the map.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalAccount
