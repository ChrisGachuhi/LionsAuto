import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faContactBook,
  faEnvelope,
  faPhone,
  faRecycle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
    <div className="Page Contact">
      <div className="card contacts">
        <FontAwesomeIcon icon={faContactBook} />
        <h3>Email & Phone</h3>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> info@lionsauto.co.ke <br />
          <FontAwesomeIcon icon={faPhone} /> +254715132828
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

      <div className="card address">
        <h3>Our Location</h3>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.872136492844!2d36.869619675035906!3d-1.2478357355854177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f142b4a91433d%3A0x9de585f7b9fd8abb!2sGym%20Plaza!5e0!3m2!1sen!2ske!4v1718165608640!5m2!1sen!2ske"
          width="100%"
          height="90%"
          style={{ border: 0, borderRadius: 10 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact
