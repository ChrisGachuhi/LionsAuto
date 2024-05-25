import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'

const WhiteLabel = () => {
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
  }, {})
  return (
    <div className="Page Business SubPage-Software">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <span>
            WELCOME TO <span>LIONS AUTO</span>
          </span>
          <br />

          <h1>White Label</h1>
          {/* <span>Vehicle Load Monitoring Solution</span> */}
        </div>

        <p>
          Are you already in the vehicle tracking business but want to bring the
          best to your customers? LionsAuto white label platform might be just
          what you need. Advanced, reliable and incredibly user friendly GPS
          vehicle tracking system. With your brand on the merchandise.
        </p>

        <p>
          A new approach to GPS tracking platform – we put the user in the first
          place Average user needs only 20 % of the features in daily use – we
          crafted these features to perfection Quick map overview on main
          screen, interactive log book, calendar view for all vehicles.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="features">
        <h2>Why to Choose LionsAuto</h2>

        <div className="features-container">
          <div className="feature reach">
            <h3>Visual Customization</h3>
            <p>
              Starting White Label business with us is very simple and cost
              effective. We will help you to create your own brand. The software
              and hardware visual identity will go with your own. Nobody will
              spot the difference, including yourself!
            </p>
          </div>

          <div className="feature reliability">
            <h3>Customer Support</h3>
            <p>
              LionsAuto customer support is awesome for their White Label
              Business Partner and we are available for your 24/7 for any help.
              We provide reliable round-the-clock tech support and maintenance
              of the system.
            </p>
          </div>

          <div className="feature technology">
            <h3>Customized Modules</h3>
            <p>
              LionsAuto GPS tracking platform is very flexible, In case of any
              customize module we are commited to deliver it.In need of a new
              feature? We will evaluate together the benefits and agree on the
              roadmap to implement it.
            </p>
          </div>
        </div>
      </div>

      <div className="opportunities">
        <h2>White Label Business opportunity</h2>
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/06/Speedotrack-Fuel-Monitoring-Solution.png?w=704&ssl=1"
          alt=""
        />

        <div className="opportunity franchising">
          <div className="image first-image">
            <SvgWrapper />
            <img
              className="target-img"
              src="/src/assets/images/updatedimages/franchising.jpg"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Customized Platform</h3>
            <p>
              At LionsAuto, we often get requests from enterprise clients who
              are looking to develop GPS solutions for tracking the location of
              vehicles, people, or assets. Because this is quite a frequent
              project request, we decided to build our own customizable GPS
              tracking system that would allow our clients to build their
              solutions much faster and easier. The tracking solution we
              developed is comprised of a GPS tracking device and a cloud
              platform that stores the location of assets and displays it to
              users in real time via web and mobile user interfaces.
            </p>
          </div>
        </div>

        <div className="opportunity whitelabel">
          <div className="image second-image">
            <img
              src="/src/assets/images/updatedimages/Advanced-fleet-management.jpg"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Wholesale Prices</h3>
            <p>
              Providing you the best range of gps tracking and gps tracking
              system with effective & timely delivery. Backed by a team of
              dexterous professionals, we are engaged in providing a quality
              approved GPS Tracking System. Our vendors’ professionals
              manufacture this tracking system using superior quality components
              and modern technology in line with industry standards. Our
              tracking system is highly acclaimed in the market due to its
              exceptional quality attributes. To ensure a flawless product
              delivery to our clients, our quality examiners rigorously test
              this tracking system against various quality parameters.
            </p>
          </div>
        </div>

        <div className="opportunity distribution">
          <div className="image third-image">
            <SvgWrapper />
            <img
              className="target-img"
              src="/src/assets/images/updatedimages/web-development.webp"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Your brand. Our system</h3>
            <p>
              Most GPS tracking providers often struggle with customer
              acquisition, training, and support. To address this challenge, we
              have developed a user-friendly and feature-rich platform that will
              delight your customers. By using our platform, you can reduce the
              time spent on customer training and support, allowing you to focus
              on growing a successful tracking business. Impress your clients
              with a professional and intuitive interface that reflects your
              brand identity. In the complex telematics market, our solution
              simplifies the user experience, enabling you to concentrate on
              expanding your business. market can be complicated, and you don’t
              want to spend all your time training and supporting your
              customers, that’s why we created something that looks amazing, but
              is very simple to use. All our clients comment they spend very
              little to no time training new users, and are free to focus on
              building their tracking business.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhiteLabel
