import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'

function SpeedGovernor() {
  const animate = useContext(CurrentAnimationContext)
  useEffect(() => {
    // for header section
    animate.headerAnimation()
    // animation for features/benefits
    animate.benefitsArrayAnimation('.features-container', '.feature')

    animate.rightToLeftImage('.target-img', '.first-image')
    animate.leftToRightImage('.second-image', '.second-image')
    // animations for solutions descriptions
    animate.descriptionAnimation('.solution-container', '.description')
  }, [])

  return (
    <div className="Page Software SubPage-Software">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <h1>Lions Auto GPS Speed Governor Solution</h1> <br />
        </div>

        <p>
          Lions Auto GPS proudly presents its state-of-the-art Speed Limiter
          solution, designed to promote road safety, enhance vehicle
          performance, and ensure regulatory compliance. Our Speed Limiter is a
          critical tool for fleet managers and individual vehicle owners who
          prioritize safety and efficiency.
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Features of the Lions Auto GPS Speed Limiter</h2>

          <div className="features-container">
            <div className="feature label">
              <h3>Precise Speed Control</h3>
              <p>
                Limits the vehicle&apos; maximum speed to a pre-configured
                threshold. Guarantees adherence to speed regulations,
                preventing speeding.
              </p>
            </div>

            <div className="feature access">
              <h3>Advanced GPS Integration</h3>
              <p>
                Real-time vehicle tracking combined with speed monitoring.
                Alerts and notifications sent directly to fleet managers in case
                of speed violations.
              </p>
            </div>

            <div className="feature business">
              <h3>User-Friendly Interface</h3>
              <p>
                Intuitive dashboard for easy monitoring and management.
                Comprehensive reporting features for detailed analysis of speed
                data and driver behavior.
              </p>
            </div>

            <div className="feature software">
              <h3>Seamless Installation</h3>
              <p>
                Designed for quick and easy installation on various types of
                vehicles. Minimal disruption to fleet operations during
                installation.
              </p>
            </div>

            <div className="feature management">
              <h3>Remote Configuration and Updates</h3>
              <p>
                Allows fleet managers to remotely set and adjust speed limits.
                Firmware updates can be applied over-the-air to ensure the
                device remains current with the latest features and regulations.
              </p>
            </div>
          </div>
        </div>

        <div className="landing">
          <div className="title">
            <h1>Why Choose Lions Auto GPS Speed Limiter?</h1>
          </div>

          <p>
            Proven Reliability: Our Speed Limiter solution is trusted by
            numerous transport companies and individual users across East
            Africa. We have a strong track record of delivering dependable and
            high-performing devices.
          </p>

          <p>
            Innovative Technology*: We leverage cutting-edge technology to
            ensure precise speed control and seamless integration with our GPS
            tracking system.
          </p>

          <p>
            Exceptional Support*: Our dedicated customer service team is always
            ready to provide support, from installation to ongoing maintenance
            and updates.
          </p>
        </div>

        <div className="features">
          <h2>Benefits of Using Lions Auto GPS Speed Limiter</h2>

          <div className="features-container">
            <div className="feature label">
              <h3>Enhanced Road Safety</h3>
              <p>
                Reduces the risk of accidents by preventing overspeeding.
                Encourages safer driving habits, protecting drivers, passengers,
                and pedestrians.
              </p>
            </div>

            <div className="feature access">
              <h3>Regulatory Compliance*</h3>
              <p>
                Helps fleet operators comply with local and national speed
                regulations. Avoids fines and penalties associated with speed
                violations.
              </p>
            </div>

            <div className="feature business">
              <h3>Operational Efficiency</h3>
              <p>
                Improves fuel efficiency by maintaining optimal speed levels.
                Reduces vehicle maintenance costs by minimizing wear and tear.
              </p>
            </div>

            <div className="feature software">
              <h3>Cost Savings</h3>
              <p>
                Decreases the likelihood of accidents, resulting in lower repair
                and insurance costs. Boosts overall profitability through
                improved operational efficiencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpeedGovernor
