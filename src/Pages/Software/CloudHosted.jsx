import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'

import geofencing from '/src/assets/images/updatedimages/geo-fencing-pic.jpg'
import dashboard from '/src/assets/images/updatedimages/dashboard-pic.jpg'
import api from '/src/assets/images/updatedimages/API-pic.jpg'
import dataprotection from '/src/assets/images/updatedimages/training-pic.jpg'

const CloudHosted = () => {
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
          <h1>GPS Tracking Software (Cloud Hosted)</h1>
        </div>

        <p>
          Hosted software is a great choice for GPS tracking business. It helps
          to avoid extra expenses when hosting GPS tracking software in own
          server. Server with software resides in GPS-Server.net Data Center and
          we undertake all technical aspects, while you will be able to
          concentrate on your core business. Our team will prepare server with
          software for you, support your service, ensure physical and electronic
          security and keep it up to date. You will get ready to go GPS tracking
          server in less than 24 hours, no technical skills needed.
        </p>

        <p>
          Monthly or annual cost of service depends on number of devices which
          will be connected to server, choose pricing plan according to your
          needs. Plan can be upgraded at any time. Hosted software is a complete
          white label GPS tracking system. To personalize software, use your
          company name, logo, domain, change colors and login page look.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Features of GPS Cloud Hosted Software</h2>
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

        <h2>GPS Tracking Software (Cloud Hosted)</h2>
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/06/Speedotrack-Fuel-Monitoring-Solution.png?w=704&ssl=1"
          alt=""
        />

        <div className="highlight">
          <div className="image first-image">
            <SvgWrapper />
            <img className="target-img" src={geofencing} alt="" />
          </div>
          <div className="description">
            <h3>White label GPS Tracking Software</h3>
            <p>
              Already in the business? Step on our platform. It’s fast and easy.
              A white-label product is a product or service produced by one
              company that other companies rebrand to make it appear as if they
              had made it. The name derives from the image of a white label on
              the packaging that can be filled in with the marketer's trade
              dress.. Our templating is flexible unlike any other. We provide
              our cloud based GPS tracking platform incl. API for connecting all
              your running units. We provide 24/7 support for our client. our
              pricing contains entry fee plus connection fee for every tracking
              unit.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image second-image">
            <img src={dashboard} alt="" />
          </div>
          <div className="description">
            <h3>Control Panel</h3>
            <p>
              Our GPS server comes with cutting edge technology and our control
              panel is very easy to use it does not requires any prior
              experience to use our GPS tracking dashboard. We also provide demo
              account so that end user can familiar with our control panel
              dashboard. In case of any doubt we are available 24/7 to help you
              to understand our control our dashboard.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image third-image">
            <SvgWrapper />
            <img className="target-img" src={api} alt="" />
          </div>
          <div className="description">
            <h3>API Integration</h3>
            <p>
              API access is the process of allowing mobile apps, developers'
              frameworks, building management tools, and software applications
              to access and use pertinent data from a given API. Using our API
              Feature you will be able to develop mobile apps, frameworks,
              management tools, and software applications to access and use
              pertinent data.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image fourth-image">
            <img src={dataprotection} alt="" />
          </div>
          <div className="description">
            <h3>Data Protection</h3>
            <p>
              Data protection is the process of safeguarding important data from
              corruption, compromise or loss and providing the capability to
              restore the data to a functional state should something happen to
              render the data inaccessible or unusable. our GPS tracking comes
              with Solid data protection feature so that our partner focus on
              building GPS tracking business and leave rest on us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CloudHosted
