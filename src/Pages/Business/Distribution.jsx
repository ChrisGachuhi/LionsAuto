import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'
import SvgWrapper from '../../Components/SvgWrapper'

// Import images
import trackingVehicleImage from '../../assets/images/updatedimages/speed-monitoring-pic.jpg'
import distribution from '../../assets/images/updatedimages/distribution.jpg'
import fleetManagementImage from '../../assets/images/updatedimages/savings.jpg'

const Distribution = () => {
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
    <div className="Page Business SubPage-Software">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <span>
            WELCOME TO <span>LIONS AUTO</span>
          </span>
          <br />

          <h1>Distribution Solution</h1>
        </div>

        <p>
          Lions Auto GPS distribution solution is the easiest way to start your
          GPS tracking Business at very low investment . You can become
          distributor of our international brand Speedorack GPS which is one of
          the leading GPS tracking software. You will get Wholesale price if you
          become distributor of Lions Auto GPS GPS so that to maximize your
          profit on per sale. If you become Lions Auto GPS distributor partner
          you will get 24/7 support on any issue to run your business smoothly.
          our pricing contains entry fee plus connection fee for every tracking
          unit.
          <br />
        </p>
      </div>

      <div className="features">
        <h2>Why to Choose Lions Auto GPS</h2>

        <div className="features-container">
          <div className="feature reach">
            <h3>We offer fair prices</h3>
            <p>
              Lions Auto GPS provides fair and optimum price to our distributor
              to maximize their profit. The more connected devices, the lower
              the unit cost for you.
            </p>
          </div>

          <div className="feature reliability">
            <h3>We provide support</h3>
            <p>
              Distributor are our real backbone of Lions Auto GPS therefore
              We provide reliable round-the-clock tech support to all partners.
              And we solve problems quickly.
            </p>
          </div>

          <div className="feature technology">
            <h3>High quality hardware</h3>
            <p>
              High quality GPS tracking devices that come pre-set for quick and
              hassle-free installation or tailored for specific usage as per
              requirements.
            </p>
          </div>

          <div className="feature technology">
            <h3>Admin Panel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur eius cupiditate quibusdam perspiciatis unde.
              Consequuntur, nesciunt explicabo culpa, tenetur quidem, ipsum
            </p>
          </div>
        </div>
      </div>

      <div className="opportunities">
        <h2>Features of Distribution Solution</h2>

        <div className="opportunity franchising">
          <div className="image first-image">
            <SvgWrapper />
            <img className="target-img" src={trackingVehicleImage} alt="" />
          </div>

          <div className="description">
            <h3>Vehicle Tracking Business</h3>
            <p>
              GPS tracking technology is used in personal households and
              businesses. The GPS tracking market is rapidly growing and has an
              amazing potential in the future. People are becoming more and more
              concerned about their safety and the safety of their valuables.
              That&apos;s why families are starting to use mobile tracking apps
              and GPS trackers for their children and other loved ones.
              Companies are also tracking and managing their vehicles, delivery
              trucks, cargo or employees. According to Global Market Insights,
              “the vehicle tracking market size was valued at $8 billion in 2015
              and is anticipated to exceed $22 billion by 2022.”
            </p>
          </div>
        </div>

        <div className="opportunity whitelabel">
          <div className="image second-image">
            <img src={distribution} alt="" />
          </div>

          <div className="description">
            <h3>Partner with Lions Auto GPS</h3>
            <p>
              Lions Auto GPS a leading provider of GPS
              vehicle tracking systems aims at offering innovative and
              cost-effective vehicle tracking solutions comprising of hardware
              as well as software. GPS tracking solution is a unique way for
              companies and individuals to monitor and control their cars,
              jeeps, trucks and other vehicles to their precise details by
              sitting in the office. Whether you own one truck or a fleet of
              thousands of vehicles, our highly skilled GPS fleet consultants
              will assist you in selecting the right type of vehicle tracking
              system that will give an edge to your company.
            </p>
          </div>
        </div>

        <div className="opportunity distribution">
          <div className="image third-image">
            <SvgWrapper />
            <img className="target-img" src={fleetManagementImage} alt="" />
          </div>

          <div className="description">
            <h3>Wholesale Price</h3>
            <p>
              Providing you the best range of GPS tracking and GPS tracking
              system with effective & timely delivery. our solution is backed by
              a team of dexterous professionals, we are engaged in providing a
              quality approved GPS Tracking System. Our vendors&apos;
              professionals manufacture this tracking system using superior
              quality components and modern technology in line with industry
              standards. our provided tracking system is highly acknowledged in
              the market owing to its various quality attributes. We offers
              Wholesale price to our partner to grow their GPS tracking business
              and maximize their profits.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Distribution
