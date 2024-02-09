import { Link } from 'react-router-dom'

const GpsSoftware = () => {
  return (
    <div className="Page Business">
      <div className="landing">
        <div className="title">
          <span>
            WELCOME TO <span>LIONS AUTO</span>
          </span>
          <br />

          <h1>GPS Tracking Software</h1>
          <span>Vehicle tracking software for GPS tracking business</span>
        </div>

        <div className="navigation">
          {/* in page navigation */}
          <Link>Cloud Hosted</Link>
          <Link>Self Hosted</Link>
          <Link>Personal Account</Link>
        </div>

        <p>
          Speedotrack GPS Software Solutions combine sophisticated GPS tracking
          technology with flexible, advanced mapping and reporting software. A
          GPS-enabled Vehicle Tracking Device is installed on each vehicle to
          collect and transmit tracking data via a cellular and satellite
          network, whichever works best for your operations. The device then
          delivers the data to the Speedotrack hosted application, which you can
          access through the Web at any time. You will receive real-time vehicle
          tracking updates, including location, direction, speed, idle time,
          start/stop and more, allowing you to manage a tighter schedule and
          more efficient fleet. <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      {/* <div className="features">
        <h2>Features Lions Auto of Business Model</h2>

        <div className="features-container">
          <div className="feature reach">
            <h3>Worldwide Reach</h3>
            <p>
              Lions Auto GPS tracking platform is one of the oldest market
              player in India as well as abroad. Our GPS tracking system track
              thousand of units in Europe, Asia and Africa at this moment.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature reliability">
            <h3>Solid Reliability</h3>
            <p>
              After more than 10 years in the GPS tracking business, we
              perfected all parts of the process. The result is the new
              generation Lions Auto GPS tracking platform.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature ux">
            <h3>Awesome UX</h3>
            <p>
              Fleet management is done by machines, but controlled by humans. We
              used all your customer&#39;s experience to build a product that
              has everything they need. And we got rid of all the nerdy stuff.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature technology">
            <h3>New Technology</h3>
            <p>
              Lions Auto uses latest GPS tracking technology to optimize your
              cost and increase your revenue. our constant maintenance, it will
              last and serve your customer for many years to come.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature migration">
            <h3>Easy Migration</h3>
            <p>
              Looking to migrate your existing customer on our new platform but
              hasitating. No need to worry we can migrate you existing customer
              with no downtime and in very short span of time.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature start">
            <h3>Easy to start</h3>
            <p>
              Either it is new onboarding on Lions Auto GPS tracking or
              migrating your existing customer on our GPS tracking platform we
              will do it seamlessly without any down time.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div> */}

      <div className="opportunities">
        <div className="opportunity franchising">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Speedotrack GPS Software (Cloud Hosted)</h3>
            <p>
              Hosted software is a great choice for GPS tracking business. It
              helps to avoid extra expenses when hosting GPS tracking software
              in own server. Server with software resides in Speedotrack Data
              Center and we undertake all technical aspects, while you will be
              able to concentrate on your core business. Our team will prepare
              server with software for you, support your service, ensure
              physical and electronic security and keep it up to date. You will
              get ready to go GPS tracking server in less than 24 hours, no
              technical skills needed.
            </p>
            <Link to={'/GPS-Software/Cloud-Hosted'} target="_blank">
              Explore More
            </Link>
          </div>
        </div>

        <div className="opportunity whitelabel">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Speedotrack GPS Software (Self Hosted)</h3>
            <p>
              Speedotrack team developed unique GPS tracking platform - tracking
              software which is designed to build independent tracking server.
              GPS tracking platform is web based application which can operate
              globally. One physical GPS tracking server allows simultaneously
              monitor thousands of GPS trackers and smartphones, display their
              location on map, generate reports and alerts. GPS tracking
              platform has billing system which allows to charge customers for
              services.
            </p>
            <Link to={'/GPS-Software/Self-Hosted'} target="_blank">
              Explore More
            </Link>
          </div>
        </div>

        <div className="opportunity distribution">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Speedotrack GPS Software (Personal Account)</h3>
            <p>
              This solution is recommended for personal use or small company.
              Personal tracking account allows to see location of objects
              (vehicles, family members...) in real time, instantly view
              historical tracks and be notified about events which requires your
              immediate attention. Generate various group reports, control
              devices remotely and much more. System is easy to use, mobile
              friendly, has intuitive user interface and is designed to
              communicate with a wide variety of GPS tracking devices including
              mobile phones and tablets.
            </p>
            <Link to={'/GPS-Software/Personal-Account'} target="_blank">
              Explore More
            </Link>
          </div>
        </div>
      </div>

      {/* <Partners /> */}
    </div>
  )
}

export default GpsSoftware;
