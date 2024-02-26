import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LandingAnimation from '../../Components/animated-components/LandingAnimation'
import { useContext, useEffect } from 'react'
import { CurrentAnimationContext } from '../../Components/AnimationContext/CurrentAnimationContext'

function PersonalTracker() {
  const animate = useContext(CurrentAnimationContext)

  useEffect(() => {
    // for header section
    animate.headerAnimation()
    // animation for features/benefits
    animate.benefitsArrayAnimation('.features-container', '.feature')
  }, [])
  return (
    <div className="Page Software SubPage-Software">
      <div className="landing">
        <LandingAnimation />
        <div className="title">
          <h1>Personal GPS Tracker Solution</h1>
        </div>

        <p>
          How many times have you worried about certain members of your family
          when you weren’t around? What about when that person left the house
          for something? This can be an elderly member of your family or a
          child. How much better would you feel if you knew you could keep tabs
          on them and they could easily notify you if something was wrong? Well
          that’s what personal GPS trackers can provide you with.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="solution-container gps">
        <div className="features">
          <h2>Task of Personal Tracker Solution</h2>
          <div className="features-container">
            <div className="feature label">
              <h3>GPS+LBS positioning</h3>
              <p>
                Allow the location to be pin pointed in the real time or
                periodically. Allow the location to be pin pointed in the real
                time or periodically. Allow the location to be pin pointed in
                the real time or periodically.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature access">
              <h3>Fall alarm</h3>
              <p>
                Allow the location to be pin pointed in the real time or
                periodically. Allow the location to be pin pointed in the real
                time or periodically. Allow the location to be pin pointed in
                the real time or periodically.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature business">
              <h3>IP65 waterproof grade</h3>
              <p>
                Allow the location to be pin pointed in the real time or
                periodically. Allow the location to be pin pointed in the real
                time or periodically. Allow the location to be pin pointed in
                the real time or periodically.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature software">
              <h3>Voice monitor</h3>
              <p>
                Allow the location to be pin pointed in the real time or
                periodically. Allow the location to be pin pointed in the real
                time or periodically. Allow the location to be pin pointed in
                the real time or periodically.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature management">
              <h3>Two-way talk</h3>
              <p>
                Allow the location to be pin pointed in the real time or
                periodically. Allow the location to be pin pointed in the real
                time or periodically. Allow the location to be pin pointed in
                the real time or periodically.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div className="feature easy">
              <h3>Easy Installation</h3>
              <p>
                Allow the location to be pin pointed in the real time or
                periodically. Allow the location to be pin pointed in the real
                time or periodically. Allow the location to be pin pointed in
                the real time or periodically.
              </p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalTracker
