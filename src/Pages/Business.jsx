import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
// import { Partners } from "../Components/Partners";

export const Business = () => {
  const navigate = useNavigate()
  return (
    <div className="Page Business">
      <div className="landing">
        <div className="title">
          <span>
            WELCOME TO <span>LIONS AUTO</span>
          </span>
          <br />

          <h1>GPS Tracking for Business</h1>
          <span>Vehicle tracking software for GPS tracking business</span>
        </div>

        <div className="navigation">
          {/* in page navigation */}
          <Link>Distribution Solution</Link>
          <Link>White Label</Link>
          <Link>Lions Auto Franchising</Link>
        </div>

        <p>
          GPS tracking technology is widely used in personal households and
          businesses. The GPS tracking market is rapidly growing and has an
          amazing potential in the future. People are becoming more and more
          concerned about their safety and the safety of their valuables.
        </p>

        <p>
          That’s why families are starting to use mobile tracking apps and GPS
          trackers for their children and other loved ones. Companies are also
          tracking and managing their vehicles, delivery trucks, cargo or
          employees.
        </p>

        <p>
          According to Global Market Insights, “the vehicle tracking market size
          was valued at $8 billion in 2015 and is anticipated to exceed $22
          billion by 2022.” Really, there’s no doubt you should start GPS
          tracking business today! <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="features">
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
      </div>

      <div className="opportunities">
        <div className="opportunity franchising">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Franchising opportunity</h3>
            <p>
              Franchising is based on a marketing concept which can be adopted
              by an organization as a strategy for business expansion. Lions
              Auto will provide reliable brand and tested template, Tracking
              platform, tracking units and technical support to run your
              business smoothly. Apart from that Lions Auto will also provide
              marketing material to grow your sales. Lions Auto will also help
              you get a modern optimized website. We will also assure you to
              tracking system is up to date and running. our pricing contains
              entry fee plus connection fee for every tracking unit.
            </p>
            <button onClick={() => navigate("/Business/Franchising")}>
              Explore More
            </button>
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
            <h3>White Label Business</h3>
            <p>
              Already in the business? Step on our platform. It&#39;s fast and
              easy. A white-label product is a product or service produced by
              one company that other companies rebrand to make it appear as if
              they had made it. The name derives from the image of a white label
              on the packaging that can be filled in with the marketer&#39;s
              trade dress.. Our templating is flexible unlike any other. We
              provide our cloud based GPS tracking platform incl. API for
              connecting all your running units. We provide 24/7 support for our
              client. our pricing contains entry fee plus connection fee for
              every tracking unit.
            </p>
            <button onClick={() => navigate("/Business/White-Label")}>
              Explore More
            </button>
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
            <h3>Distribution Solution</h3>
            <p>
              Lions Auto Wholesale solution is the easiest way to start your GPS
              tracking Business at very effective cost . You can become
              distributor of our international brand Lions Auto GPS which is
              World&#39;s No.1 GPS tracking software. You will get Wholesale
              price if you become distributor of Lions Auto GPS so that to
              maximise your profit on per sale. If you become Lions Auto
              distributor partner you will get 24/7 support on any issue to run
              your bussiness smoothly. Our pricing contains entry fee plus
              connection fee for every tracking unit.
            </p>
            <button onClick={() => navigate("/Business/Distribution")}>
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* <Partners /> */}
    </div>
  );
};
