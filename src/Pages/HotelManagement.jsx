import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const HotelManagement = () => {
  return (
    <div className="Page Business">
      <div className="landing">
        <div className="title">
          <span>
            WELCOME TO <span>LIONS AUTO</span>
          </span>
          <br />
          <h1>Speedotrack Hotel Management Software</h1> <br />
          <span>Award-winning Hotel Management Software.</span>
        </div>

        <p>
          Do you run Travel agency, tour operator, hotel chain or just an owner
          of several hotels, resorts or spa? Speedotrack Hotel Management
          Software is built for you! Just Add your hotels and rooms. Manage your
          prices. Create original activities and tours, extra services and
          follow up your bookings! Speedotrack Hotel Management software is
          designed to simplify and accelerate operations , delivering greater
          greater efficiency and profitability. As an award-winning hotel
          management software, our range of built-in features allows you to
          expand as your needs grow.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="features">
        <h2>Features of Hotel Management Software</h2>

        <div className="features-container">
          <div className="feature reach">
            <h3>Booking System</h3>
            <p>
              Speedotrack Hotel Management Software comes with advance booking
              system that let your customer check the availabilities of the
              rooms for all hotels using the search engine and make their
              booking until the payment.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature reliability">
            <h3>Booking Overview</h3>
            <p>
              Speedotrack Hotel Management Software comes with advance booking
              system that let your customer check the availabilities of the
              rooms for all hotels using the search engine and make their
              booking until the payment.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature technology">
            <h3>iCal Sync</h3>
            <p>
              Speedotrack Hotel Management Software Provides all booking
              overview that you can access from any devices. our advance
              dashboard shows occupancy rate, status of the reservation about
              check-in/out.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature technology">
            <h3>Manage Services</h3>
            <p>
              Best part of Speedotrack Hotel Management software is it
              Synchronize your website with all online travel agencies like
              Booking.com, Yatra.com etc. so do not waste time and keep your
              calendars up to date with this feature.
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
            <h3>Powerful Admin Panel</h3>
            <p>
              Speedotrack Hotel Management Software comes with very powerful
              admin panel that you can access from any devices which is very
              help to manage your hotel wherever you go. our Hotel management
              software has specific module like Booking, Hotels, room, package,
              rates, activities etc. Apart from Hotel our software also be used
              for to manage resorts and Spa. Just Add your hotels and rooms.
              Manage your prices. Create original activities and tours, extra
              services and follow up your bookings!
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
            <h3>Advance Booking System</h3>
            <p>
              Speedotrack Hotel Management Software comes with advance booking
              system that let your customer check the availabilities of the
              rooms for all hotels using the search engine and make their
              booking until the payment. Our Software helps to manage inventory,
              rates and bookings with its centralized reservation system which
              let your customer check the availabilities of the rooms for all
              hotels using the search engine and make their booking until the
              payment.
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
            <h3>Auto Sync with iCal</h3>
            <p>
              Speedotrack Hotel Management Software Provides all booking
              overview that you can access from any devices. our advance
              dashboard shows occupancy rate, status of the reservation about
              check-in/out. You can easily Synchronize your website with all
              online travel agencies like Booking.com, Yatra.com etc. our
              software easily Synchronize your calendar up to date so save your
              time.
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
            <h3>Easy to Manage Services</h3>
            <p>
              Speedotrack Hotel Management Software helps you to easily manage
              the price. It also allows you to Set restriction on the days of
              the week or the check-in/out day. Add discount and extra price per
              guest and Send coupon. our software contains a simple, ergonomic
              and complete admin panel which allows you to manage easily the
              content of your website coupled with an easily customizable
              template. Our Software contains several new specific modules:
              bookings, hotels, rooms, rates, currencies, extra services and
              facilities.
            </p>
            <button>Explore More</button>
          </div>
        </div>
      </div>
      {/* <Partners /> */}
    </div>
  )
}
