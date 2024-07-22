import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'

function DriverBehavior() {
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
          <h1>Lions Auto GPS Driver Behavior Monitoring</h1>
        </div>

        <p>
          At Lions Auto GPS, we understand that driver behavior is a critical
          factor in ensuring fleet safety, efficiency, and cost-effectiveness.
          Our Driver Behavior GPS Monitoring system is designed to give fleet
          managers comprehensive insights into their drivers&apos; habits,
          enabling them to take proactive measures to improve performance and
          reduce risks.
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Features of Our Driver Behavior Monitoring System</h2>

          <div className="features-container">
            <div className="feature label">
              <h3>Real-Time Tracking and Alerts</h3>
              <p>
                Our system provides real-time tracking of vehicle locations and
                driver activities. Instant alerts for unsafe driving behaviors
                such as harsh braking, rapid acceleration, speeding, and
                aggressive cornering. Customizable alert settings to meet
                specific fleet management needs.
              </p>
            </div>

            <div className="feature access">
              <h3>Detailed Driver Performance Reports</h3>
              <p>
                Comprehensive reports that highlight individual driver behavior
                over time. Insights into patterns and trends, allowing managers
                to identify areas for improvement. Scorecards that rank drivers
                based on their driving performance, fostering a culture of
                accountability and healthy competition.
              </p>
            </div>

            <div className="feature business">
              <h3>Fuel Efficiency and Cost Reduction</h3>
              <p>
                Monitoring driver behavior helps in identifying and curbing
                fuel-wasting practices. Encouraging smooth driving reduces fuel
                consumption, leading to significant cost savings. Maintenance
                alerts based on driving behavior to prevent wear and tear,
                extending vehicle life.
              </p>
            </div>

            <div className="feature software">
              <h3>Safety and Risk Management</h3>
              <p>
                Proactive identification of risky behaviors helps in mitigating
                potential accidents. Training programs can be tailored based on
                the data collected, focusing on areas where drivers need
                improvement. Enhanced safety leads to fewer incidents, lowering
                insurance premiums and liability.
              </p>
            </div>

            <div className="feature management">
              <h3>Driver Engagement and Training</h3>
              <p>
                Transparent monitoring and feedback mechanisms improve driver
                engagement and motivation. Regular training sessions based on
                monitoring data to enhance driving skills. Positive
                reinforcement through reward programs for safe driving behavior.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="landing">
          <div className="title">
            <h1>
              Benefits of Using Lions Auto GPS for Driver Behavior Monitoring
            </h1>
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
        </div> */}

        <div className="features">
          <h2>
            Benefits of Using Lions Auto GPS for Driver Behavior Monitoring
          </h2>

          <div className="features-container">
            <div className="feature label">
              <h3>Improved Fleet Efficiency</h3>
              <p>
                By monitoring and improving driver behavior, fleet operations
                become more efficient, reducing downtime and enhancing
                productivity.
              </p>
            </div>

            <div className="feature access">
              <h3>Enhanced Safety</h3>
              <p>
                With a focus on safe driving practices, the likelihood of
                accidents is minimized, protecting both drivers and assets.
              </p>
            </div>

            <div className="feature business">
              <h3>Cost Savings</h3>
              <p>
                Better driving habits lead to lower fuel costs, reduced
                maintenance expenses, and lower insurance premiums. •⁠
                ⁠*Data-Driven Decisions*: Our system provides actionable
                insights that help fleet managers make informed decisions to
                optimize operations.
              </p>
            </div>

            <div className="feature software">
              <h3>Data-Driven Decisions</h3>
              <p>
                Our system provides actionable insights that help fleet managers
                make informed decisions to optimize operations.
              </p>
            </div>

            <div className="feature software">
              <h3>Environmental Impact</h3>
              <p>
                Efficient driving reduces the carbon footprint of your fleet,
                contributing to environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DriverBehavior
