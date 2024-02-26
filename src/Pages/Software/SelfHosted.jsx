import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'

const SelfHosted = () => {
  const animate = useContext(CurrentAnimationContext)
  useEffect(() => {
    // animation for features/benefits
    animate.benefitsArrayAnimation('.features-container', '.feature')

    animate.rightToLeftImage('.first-image', '.first-image')
    animate.leftToRightImage('.second-image', '.second-image')
  }, {})
  return (
    <div className="Page Software SubPage-Software">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <h1>GPS Tracking Software (Self Hosted)</h1> <br />
          <span>Grow your business & boost up sale with Speedotrack</span>
        </div>

        {/* in page navigation */}

        <p>
          Self Hosted GPS Tracking Software 01 | Speedotrack GPS GPS Tracking
          Software (Self Hosted) Grow your business & boost up sale with
          Speedotrack Get Started NowSee live demo. shape 66 | Speedotrack
          GPSshape 56 | Speedotrack GPS Speedotrack team developed unique GPS
          tracking platform - tracking software which is designed to build
          independent tracking server. GPS tracking platform is web based
          application which can operate globally. One physical GPS tracking
          server allows simultaneously monitor thousands of GPS trackers and
          smartphones, display their location on map, generate reports and
          alerts. GPS tracking platform has billing system which allows to
          charge customers for services.
        </p>

        <p>
          Tracking platform can be used with custom server name, logo and
          design. Open source code allows to extend functionality and change
          design - possibilities are endless. Tracking platform software is
          perfect solution for companies who are getting into GPS tracking
          business. Our product will work for you, not against you. Start your
          own GPS tracking business and earn as much profit as possible, become
          independent GPS service provider.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Features of GPS Self Hosted Software</h2>
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
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature access">
              <h3>API Access</h3>
              <p>
                Using our API Feature you will be able to develop mobile apps,
                frameworks, management tools, and software applications to
                access and use pertinent data
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature business">
              <h3>GPS Business</h3>
              <p>
                With our White Label business opportunity and Distribution
                solution you can easily build Profitable GPS tracking business
                with your own with our 24/7 support.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature software">
              <h3>GPS Software</h3>
              <p>
                Our GPS Software comes with cutting edge GPS technology and we
                are one of the market leader in this segment used by many client
                in India and abroad.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature management">
              <h3>Manage GPS Business</h3>
              <p>
                We also provides dedicated website and CRM solution to our
                partner so that our partner can run and manage GPS tracking
                business smoothly and focus on building new sales.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature easy">
              <h3>Easy to Manage</h3>
              <p>
                Our CRM solution support will help to run and mange business
                smoothly and will help you increase you revenue and focus on
                customer relationship with our 24/7 support.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature update">
              <h3>Updated Software</h3>
              <p>
                We update our GPS tracking software on equal interval of time
                with latest cutting edge GPS tracking technology so that our
                partner should competitive enough as per GPS market.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature language">
              <h3>30+ Languages</h3>
              <p>
                Our GPS tracking software is multilingual and supports more 30+
                major languages so that our partner should not feel any
                difficulty to use and manage their GPS tracking business.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature backup">
              <h3>Automatic backups</h3>
              <p>
                Back is one the most important activity that has to be performed
                on equal interval of time and we provided automatic backup
                feature with our GPS tracking software.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature devices">
              <h3>Supported Devices</h3>
              <p>
                Our GPS tracking software comes with latest GPS tracking
                technology and supports all major GPS tracking devices avilable
                in the market and works seamlessly.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature os">
              <h3>Android and iOS</h3>
              <p>
                Our GPS tracking software supports both Android and iOS so that
                end user should not have any difficulty to run and mange their
                GPS tracking business via App or desktop.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature server">
              <h3>99.99% Server up-time</h3>
              <p>
                Our GPS tracking Server comes with cutting edge technology with
                solid server uptime with 99.99% uptime so that our partner focus
                on business building and keep rest on us.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>

        <h2>GPS Tracking Software (Self Hosted)</h2>

        <div className="highlight">
          <div className="image first-image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/04/Speedotrack-GPS-Software-Personal-Account_01.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>GPS tracking platform features</h3>
            <p>
              Our GPS tracking is very cost effective so that anybody can start
              their own GPS tracking business at very low investment. You can
              explore our GPS tracking platform with demo account and know
              silent feature of GPS tracking. In case of any doubt we are ready
              to help you and solve your query to understand our platform.
            </p>
          </div>
        </div>

        <div className="highlight">
          <div className="image second-image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/04/Speedotrack-GPS-Software-Personal-Account_01.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Supported GPS trackers</h3>
            <p>
              Our GPS tracking software comes with latest GPS tracking
              technology and supports all major GPS tracking devices available
              in the market and works seamlessly. Speedotrack tracking platform
              software communicates with a wide variety of GPS trackers, it
              gives more freedom to use hardware you prefer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelfHosted
