import { faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="Section Footer">
      <div className="column address">
        <h3>Office Location</h3>
        <p>
          Lions Auto Services EA Ltd <br /> Gym Plaza <br /> Outer Ring Rd,
          Ruaraka <br />
          Nairobi
          <br />
        </p>
      </div>

      <div className="column quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <Link to={'/Products'}>Products & Services</Link>
          </li>
          <li>
            <Link to={'/PrivacyPolicy'}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={'/Terms&Conditions'}>Terms & Conditions</Link>
          </li>
        </ul>
      </div>

      <div className="column useful-contact">
        <h3>Useful Contacts</h3>
        <ul>

          <li>
            <Link>Telephone: +254 715 13 28 28</Link>
          </li>
        </ul>
      </div>

      <div className="column get-in-touch">
        <h3>Connect with us</h3>
        <ul>
          <li>
            <Link>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              info@lionsautogps.com
            </Link>         
            <br />
            <Link>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              +254 715 13 28 28
            </Link>
          </li>

          <li className="socials">
            <Link to={'https://facebook.com/LionsAutoGPS'} target="_blank">
              <FontAwesomeIcon icon={faFacebookF} className="icon" />
            </Link>

            <Link to={'https://x.com/LionsAutoGPS'} target="_blank">
              <FontAwesomeIcon icon={faXTwitter} className="icon" />
            </Link>
          </li>
        </ul>
      </div>

      <span>&copy; copyright {year} powered by Lions Auto GPS </span>
    </footer>
  )
}
