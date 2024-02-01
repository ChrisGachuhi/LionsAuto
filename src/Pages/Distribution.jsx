import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const Distribution = () => {
  return (
    <div className="Page Business">
      <div className="landing">
        <div className="title">
          <span>
            WELCOME TO <span>LIONS AUTO</span>
          </span>
          <br />

          <h1>Distribution Solution</h1>
          {/* <span>Vehicle Load Monitoring Solution</span> */}
        </div>

        <p>
          Speedotrack distribution solution is the easiest way to start your GPS
          tracking Business at very low investment . You can become distributor
          of our international brand Speedorack GPS which is one of the leading
          GPS tracking software. You will get Wholesale price if you become
          distributor of Speedotrack GPS so that to maximize your profit on per
          sale. If you become Speedotrack distributor partner you will get 24/7
          support on any issue to run your business smoothly. our pricing
          contains entry fee plus connection fee for every tracking unit.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="features">
        <h2>Why to Choose LionsAuto</h2>

        <div className="features-container">
          <div className="feature reach">
            <h3>We offer fair prices</h3>
            <p>
              Speedotrack provides fair and optimum price to our distributor to
              maximize their profit. The more connected devices, the lower the
              unit cost for you.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature reliability">
            <h3>We provide support</h3>
            <p>
              Distributor are our real backbone of Speedotrack therefore We
              provide reliable round-the-clock tech support to all partners. And
              we solve problems quickly.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature technology">
            <h3>High quality hardware</h3>
            <p>
              High quality GPS tracking devices that come pre-set for quick and
              hassle-free installation or tailored for specific usage as per
              requirements.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>

      <div className="opportunities">
        <h2>Features of Distribution Solution</h2>

        <div className="opportunity franchising">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Vehicle Tracking Business</h3>
            <p>
              GPS tracking technology is used in personal households and
              businesses. The GPS tracking market is rapidly growing and has an
              amazing potential in the future. People are becoming more and more
              concerned about their safety and the safety of their valuables.
              That’s why families are starting to use mobile tracking apps and
              GPS trackers for their children and other loved ones. Companies
              are also tracking and managing their vehicles, delivery trucks,
              cargo or employees. According to Global Market Insights, “the
              vehicle tracking market size was valued at $8 billion in 2015 and
              is anticipated to exceed $22 billion by 2022.”
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
            <h3>Partner of Speedotrack GPS</h3>
            <p>
              Speedotrack GPS a leading provider of GPS vehicle tracking systems
              aims at offering innovative and cost-effective vehicle tracking
              solutions comprising of hardware as well as software. GPS tracking
              solution is a unique way for companies and individuals to monitor
              and control their cars, jeeps, trucks and other vehicles to their
              precise details by sitting in the office. Whether you own one
              truck or a fleet of thousands of vehicles, our highly skilled GPS
              fleet consultants will assist you in selecting the right type of
              vehicle tracking system that will give an edge to your company.
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
            <h3>Wholesale Price</h3>
            <p>
              Providing you the best range of GPS tracking and GPS tracking
              system with effective & timely delivery. our solution is backed by
              a team of dexterous professionals, we are engaged in providing a
              quality approved GPS Tracking System. Our vendors’ professionals
              manufacture this tracking system using superior quality components
              and modern technology in line with industry standards. our
              provided tracking system is highly acknowledged in the market
              owing to its various quality attributes. We offers Wholesale price
              to our partner to grow their GPS tracking business and maximize
              their profits.
            </p>
            <button>Explore More</button>
          </div>
        </div>
      </div>
      {/* <Partners /> */}
    </div>
  )
}
