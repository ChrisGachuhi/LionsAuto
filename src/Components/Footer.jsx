import { faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="Section Footer">
      <div className="column address">
        <h3>LionsAuto</h3>
        <p>
          Speedotrack GPS Private Limited, Sector-II Market, H.E.C Colony, Near
          Vidhan Sabha, Ranchi, Jharkhand, 834004, India
        </p>
      </div>

      <div className="column quick-links">
        <h3>Quick Link</h3>
        <ul>
          <li>
            <Link>FAQ</Link>
          </li>
          <li>
            <Link to={'/Products'}>Products & Services</Link>
          </li>
          <li>
            <Link to={'/Software'}>Software</Link>
          </li>
          <li>
            <Link to={'https://www.lionsautogps.com/privacy-policy'}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to={'https://www.lionsautogps.com/terms-conditions'}>
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>

      <div className="column useful-contact">
        <h3>Useful Contacts</h3>
        <ul>
          <li>
            <Link>Accounts & Billing: +254 712345678</Link>
          </li>
          <li>
            <Link>Customer Support: +254 712345678</Link>
          </li>
        </ul>
      </div>

      <div className="column get-in-touch">
        <h3>Get in touch</h3>
        <ul>
          <li>
            <Link>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              info@lionsauto.co.ke
            </Link>
            <br />
            <Link>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              +254 712345678
            </Link>
          </li>

          <li className="socials">
            <Link to={'https://facebook.com/LionsAuto'} target="_blank">
              <FontAwesomeIcon icon={faFacebookF} className="icon" />
            </Link>

            <Link to={'https://x.com/LionsautoKE'} target="_blank">
              <FontAwesomeIcon icon={faXTwitter} className="icon" />
            </Link>
          </li>
        </ul>
      </div>

      <span>&copy; copyright 2024 powered by Lions Auto </span>
    </footer>
  )
}
