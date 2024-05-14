import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faContactBook,
  faEnvelope,
  faMapPin,
  faMobile,
  faPhone,
  faRecycle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
    <div className="Page Contact">
      <div className="card address">
        <FontAwesomeIcon icon={faMapPin} />
        <h3>Our Location</h3>
        <p>
          Gym Plaza 3rd Floor, Oilibya, Outer Ring Road, Ruaraka, Nairobi, Kenya
        </p>
      </div>
      <div className="card contacts">
        <FontAwesomeIcon icon={faContactBook} />
        <h3>Email & Phone</h3>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> info@lionsauto.co.ke <br />
          <FontAwesomeIcon icon={faPhone} /> +254712345678
        </p>
      </div>
      <div className="card socials">
        <FontAwesomeIcon icon={faRecycle} />
        <h3>Get In Touch</h3>
        <p>Also find us social media below</p>
        <p>
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
        </p>
      </div>
    </div>
  )
}

export default Contact
