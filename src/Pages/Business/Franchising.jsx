import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'
import franchisingImage from '../../assets/images/updatedimages/load-monitoring-pic.jpg'
import brandingImage from '../../assets/images/updatedimages/branding-pic.jpg'
import techSupportImage from '../../assets/images/updatedimages/tech-support.jpg'
import trackingSoftwareImage from '../../assets/images/updatedimages/gps-pic.jpg'
import trackingVehicleImage from '../../assets/images/updatedimages/geo-fencing.jpg'
import webDevelopmentImage from '../../assets/images/updatedimages/web-development.webp'
import crmImage from '../../assets/images/updatedimages/crm-pci.jpg'
import marketingMaterialImage from '../../assets/images/updatedimages/marketing-material.jpg'
import franchising from '../../assets/images/updatedimages/landingimage.jpg'


const Franchising = () => {
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
    animate.rightToLeftImage('.target-img', '.fifth-image')
    animate.leftToRightImage('.sixth-image', '.sixth-image')
    animate.rightToLeftImage('.target-img', '.seventh-image')
    animate.leftToRightImage('.eigth-image', '.eigth-image')
    // animations for solutions descriptions
    animate.descriptionAnimation('.opportunities', '.description')
  }, [])
  return (
    <div className="Page Business SubPage-Software">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <span>
            WELCOME TO <span>LIONS AUTO</span>
          </span>
          <br />

          <h1>Franchising Opportunity</h1>
        </div>
        <p>
          Start your own vehicle tracking business – franchise the Lions Auto
          GPS GPS platform. Don&apos;t miss the opportunity to franchise the
          most user friendly GPS tracking platform on the market. Start making
          money from day one.
          <br />
        </p>
      </div>

      <div className="features">
        <h2>Features of Lions Auto GPS Franchising</h2>

        <div className="features-container">
          <div className="feature reach">
            <h3>Ready to go</h3>
            <p>
              Yesterday, you knew nothing about GPS vehicle tracking. Tomorrow,
              your franchise is up and running.
            </p>
          </div>

          <div className="feature reliability">
            <h3>Professional support</h3>
            <p>
              We provide you with round-the-clock tech support as well as
              consulting, knowledge base and marketing materials.
            </p>
          </div>

          <div className="feature technology">
            <h3>Great product</h3>
            <p>
              We are proud of our GPS tracking platform. It is based on our
              extensive long-term experience in the vehicle tracking business.
            </p>
          </div>
        </div>
      </div>

      <div className="opportunities">
        <h2>Benefit of Lions Auto GPS Franchising</h2>
        <img
          src={franchising}
          alt=""
        />

        <div className="opportunity franchising">
          <div className="image first-image">
            <SvgWrapper />
            <img className="target-img" src={franchisingImage} alt="" />
          </div>

          <div className="description">
            <h3>All-inclusive Franchise Solution</h3>
            <p>
              GPS Franchise Solutions helps people make the transition from
              employee to entrepreneur. We take the guesswork out of selecting
              the right business for you and your lifestyle goals. Our
              proprietary streamlined process enables clients to build a
              reliable, independent financial future through franchise
              ownership. It comes at no cost to you. Everything is taken care
              of: from branded website to marketing materials, you are ready to
              go from day one
            </p>
          </div>
        </div>

        <div className="opportunity whitelabel">
          <div className="image second-image">
            <img src={brandingImage} alt="" />
          </div>

          <div className="description">
            <h3>Unique Identity</h3>
            <p>
              Brand identity is a collection of visible elements that makes your
              business unique and different from other businesses. Brand
              identity is what you, customers, and prospective customers can
              see. Get a country-specific variety of our franchise brand and
              logo
            </p>
          </div>
        </div>

        <div className="opportunity distribution">
          <div className="image third-image">
            <SvgWrapper />
            <img className="target-img" src={techSupportImage} alt="" />
          </div>

          <div className="description">
            <h3>Full tech support</h3>
            <p>
              Customer support is a range of customer services to assist
              customers in making cost effective and correct use of a product.
              It includes assistance in planning, installation, training,
              troubleshooting, maintenance, upgrading, and disposal of a
              product. Enjoy our dedicated 24/7 technical, marketing and
              knowledge support
            </p>
          </div>
        </div>

        <div className="opportunity distribution">
          <div className="image fourth-image">
            <img src={trackingSoftwareImage} alt="" />
          </div>

          <div className="description">
            <h3>High-tech GPS devices</h3>
            <p>
              To ensure the best customer experience, we provide not only our
              superb software, bud also reliable and time-proven hardware
            </p>
          </div>
        </div>

        <div className="opportunity distribution">
          <div className="image fifth-image">
            <SvgWrapper />
            <img className="target-img" src={trackingVehicleImage} alt="" />
          </div>

          <div className="description">
            <h3>Pre-configured GPS Devices</h3>
            <p>
              Check on workforce idling even when they are underground and
              out-of-sight! See your business progress in real-time! Check on
              workforce idling even when they are underground and out-of-sight!
              See your business progress in real-time!Check on workforce idling
              even when they are underground and out-of-sight! See your business
              progress in real-time!
            </p>
          </div>
        </div>

        <div className="opportunity distribution">
          <div className="image sixth-image">
            <img src={webDevelopmentImage} alt="" />
          </div>

          <div className="description">
            <h3>Website Development</h3>
            <p>
              A flawless web experience is crucial. We&apos;ll make sure that
              your customers will get one. As our partner, you will receive our
              assistance with your website development.
            </p>
          </div>
        </div>

        <div className="opportunity distribution">
          <div className="image seventh-image">
            <SvgWrapper />
            <img className="target-img" src={crmImage} alt="" />
          </div>

          <div className="description">
            <h3>CRM Solution</h3>
            <p>
              Check on workforce idling even when they are underground and
              out-of-sight! See your business progress in real-time! Check on
              workforce idling even when they are underground and out-of-sight!
              See your business progress in real-time!Check on workforce idling
              even when they are underground and out-of-sight! See your business
              progress in real-time!
            </p>
          </div>
        </div>

        <div className="opportunity distribution">
          <div className="image eigth-image">
            <img src={marketingMaterialImage} alt="" />
          </div>

          <div className="description">
            <h3>Marketing Material</h3>
            <p>
              A flawless web experience is crucial. We&apos;ll make sure that
              your customers will get one. As our partner, you will receive our
              assistance with your website development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Franchising
