import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function LandingAnimation() {
  useEffect(() => {
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        '.floating-circle',
        { xPercent: -2000, yPercent: 0 },
        {
          xPercent: 4000,
          duration: 30,
          yPercent: 4000,
        }
      )
      .fromTo(
        '.floating-circle',
        { xPercent: 4000, yPercent: 4000 },
        { xPercent: 3000, duration: 30, yPercent: 0 }
      )
      .fromTo(
        '.floating-circle',
        { xPercent: 3000, yPercent: 0 },
        { xPercent: 3500, duration: 30, yPercent: 4000 }
      )
      .fromTo(
        '.floating-circle',
        { xPercent: 3500, yPercent: 4000 },
        { xPercent: -2000, duration: 30, yPercent: 0 }
      )
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        '.larger-floating-circle',
        { xPercent: 0, yPercent: 3000 },
        {
          xPercent: 1000,
          duration: 10,
          yPercent: 100,
        }
      )
      .fromTo(
        '.larger-floating-circle',
        { xPercent: 1000, yPercent: 100 },
        { xPercent: 3000, duration: 10, yPercent: 100 }
      )
      .fromTo(
        '.larger-floating-circle',
        { xPercent: 3000, yPercent: 100 },
        { xPercent: 4000, duration: 10, yPercent: 2000 }
      )
      .fromTo(
        '.larger-floating-circle',
        { xPercent: 4000, yPercent: 2000 },
        { xPercent: 0, duration: 10, yPercent: 3000 }
      )
  }, [])

  return (
    <div className="background-animations">
      <div className="floating-circle"></div>
      <div className="larger-floating-circle"></div>

      <div className="testcontainer"></div>
    </div>
  )
}

export default LandingAnimation
