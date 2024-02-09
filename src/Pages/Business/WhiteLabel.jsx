import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const WhiteLabel = () => {
  return (
    <div className="Page Business">
      <div className="landing">
        <div className="title">
          <span>
            WELCOME TO <span>LIONS AUTO</span>
          </span>
          <br />

          <h1>White Label</h1>
          {/* <span>Vehicle Load Monitoring Solution</span> */}
        </div>

        <p>
          Are you already in the vehicle tracking business but want to bring the
          best to your customers? Speedotrack white label platform might be just
          what you need. Advanced, reliable and incredibly user friendly GPS
          vehicle tracking system. With your brand on the merchandise.
        </p>

        <p>
          A new approach to GPS tracking platform – we put the user in the first
          place Average user needs only 20 % of the features in daily use – we
          crafted these features to perfection Quick map overview on main
          screen, interactive log book, calendar view for all vehicles.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="features">
        <h2>Why to Choose LionsAuto</h2>

        <div className="features-container">
          <div className="feature reach">
            <h3>Visual Customization</h3>
            <p>
              Starting White Label business with us is very simple and cost
              effective. We will help you to create your own brand. The software
              and hardware visual identity will go with your own. Nobody will
              spot the difference, including yourself!
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature reliability">
            <h3>Customer Support</h3>
            <p>
              Speedotrack customer support is awesome for their White Label
              Business Partner and we are available for your 24/7 for any help.
              We provide reliable round-the-clock tech support and maintenance
              of the system.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature technology">
            <h3>Customized Modules</h3>
            <p>
              Speedotrack GPS tracking platform is very flexible, In case of any
              customize module we are commited to deliver it.In need of a new
              feature? We will evaluate together the benefits and agree on the
              roadmap to implement it.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>

      <div className="opportunities">
        <h2>White Label Business opportunity</h2>

        <div className="opportunity franchising">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Customized Platform</h3>
            <p>
              At Speedotrack, we often get requests from enterprise clients who
              are looking to develop GPS solutions for tracking the location of
              vehicles, people, or assets. Because this is quite a frequent
              project request, we decided to build our own customizable GPS
              tracking system that would allow our clients to build their
              solutions much faster and easier. The tracking solution we
              developed is comprised of a GPS tracking device and a cloud
              platform that stores the location of assets and displays it to
              users in real time via web and mobile user interfaces.
            </p>
            <button>Explore More</button>
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
            <h3>Wholesale Prices</h3>
            <p>
              Providing you the best range of gps tracking and gps tracking
              system with effective & timely delivery. Backed by a team of
              dexterous professionals, we are engaged in providing a quality
              approved GPS Tracking System. Our vendors’ professionals
              manufacture this tracking system using superior quality components
              and modern technology in line with industry standards.
              Furthermore, our provided tracking system is highly acknowledged
              in the market owing to its various quality attributes. In order to
              offer a flawless product at client's end, this tracking system is
              checked by our quality examiners against different quality
              parameters.
            </p>
            <button>Explore More</button>
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
            <h3>Your brand. Our system</h3>
            <p>
              Most GPS Tracking providers spend too much time trying to win,
              train & support customers, So we created an easy-to-use &
              feature-packed platform your customers will love. You'll spend
              less time training and supporting customers, and more time growing
              a profitable tracking business. When trying to sell to your
              clients, you can quickly impress them with a great looking and
              easy to use interface, that is branded as your own. The telematics
              market can be complicated, and you don’t want to spend all your
              time training and supporting your customers, that’s why we created
              something that looks amazing, but is very simple to use. All our
              clients comment they spend very little to no time training new
              users, and are free to focus on building their tracking business.
            </p>
            <button>Explore More</button>
          </div>
        </div>
      </div>
      {/* <Partners /> */}
    </div>
  )
}

export default WhiteLabel;
