import playback from "../assets/icons/playback.svg";
import alerts from "../assets/icons/alerts.svg";
import tracking from "../assets/icons/tracking.svg";
import apps from "../assets/icons/apps.svg";
import multiple from "../assets/icons/multiple.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faCloud,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { Partners } from "../Components/Partners";

export const Home = () => {
  return (
    <div className="Page Home">
      <div className="landing"></div>

      <div className="benefits">
        <h2 className="title">Benefits of Vehicle Tracking</h2>

        <div className="benefit tracking">
          <h3>Tracking of Vehicles</h3>
          <p>
            Track individual drivers by measuring their driving pattern
            exceptions such as over-speeding, idling etc. Tracking an individual
            driver helps in customizing the dedicated training program to ensure
            safe driving environment by following all government guidelines.
          </p>
        </div>

        <div className="benefit analysis">
          <h3>Powerful Analysis Tools</h3>
          <p>
            Lions Auto vehicle tracking solution provides detail analysis tools
            to gives businesses the ability to easily monitor vehicles and
            equipment. We offers detailed field reporting and our Fleet tracking
            dashboard shows fleet data in a single location.
          </p>
        </div>

        <div className="benefit replay">
          <h3>Animated Map Replay</h3>
          <p>
            Lions Auto vehicle tracking solution provides Animated map history
            playback so that you can retrace a vehicles route on a map screen
            for a chosen date and time. You can view full animation of the route
            where your fleet travelled during a time interval.
          </p>
        </div>

        <div className="benefit alerts">
          <h3>Customizable Alerts</h3>
          <p>
            Lions Auto vehicle tracking solution very easy to use and
            customizable as per your tracking requirement. Lions Auto&#39;s
            alerts feature to make you aware of exceptions in real time tracking
            of your fleet.
          </p>
        </div>

        <div className="benefit mapping">
          <h3>Real-Time Mapping</h3>
          <p>
            Our GPS vehicle tracking solutions help you manage routes for your
            delivery management. You will get route violation alerts if the
            route is not followed by the driver.
          </p>
        </div>

        <div className="benefit reports">
          <h3>Driver Behavior Reports</h3>
          <p>
            Our GPS vehicle tracking solutions help you manage all the driver
            information of your fleet and also assign drivers and get driver
            specific reports to your inbox everyday.
          </p>
        </div>
      </div>

      <div className="solutions">
        <div className="solution track">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Lions Auto Vehicle Tracking Software</h3>
            <p>
              Using Lions Auto Vehicle Tracking Software you will be able to
              manage multiple fleets, plan efficient routes, monitor driver
              behaviors, and do so much more with Lions Auto&#39;s fleet
              management platform. Lions Auto&#39;s practical features will
              simplify fleet management and give you a competitive edge over
              others. Lions Auto&#39;s tacking software is cost-effictive and
              easy to use
            </p>
            <button>Know More</button>
          </div>
        </div>

        <div className="solution load">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Lions Auto Load Monitoring Solution</h3>
            <p>
              For many types of trucks, knowing the loaded weight is important
              for operating safely and maximizing payload whilst avoiding fines
              for overloading. According to the complexity of in motion load
              weight calculation, our approach is more stable, inexpensive &
              good precision than other methods. In this solution, load weight
              calculated based on monitoring truck suspension changes with a
              matched sensor by vehicle suspension type mechanism.
            </p>
            <button>Know More</button>
          </div>
        </div>

        <div className="solution fuel">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Lions Auto Fuel Monitoring Solution</h3>
            <p>
              Fuel costs can amount up to 30% of all fleet management expenses,
              therefore affecting operating costs and company&#39;s profit in
              general. Lions Auto GPS tracking and telematics platform can help
              you cope with the major challenges related to fuel monitoring and
              management in the most user-friendly way.
            </p>
            <button>Know More</button>
          </div>
        </div>

        <div className="solution generator">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Lions Auto Generator Monitoring Solution</h3>
            <p>
              We install sensors and smart devices, on the generator, that
              monitor various parameters such as – power generated, battery
              voltage, run hours, fuel level, etc. A gateway device then
              communicates these readings to our central server over the
              internet. The gateway works on GPRS, Wireless or Ethernet
              technology. You can then log onto the web application and view
              generator parameters, create reports – anywhere – and any time.
              Typical reports include generator status, fuel and maintenance
              reports etc.
            </p>
            <button>Know More</button>
          </div>
        </div>

        <div className="solution mining">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Lions Auto Mining Equipment Monitoring</h3>
            <p>
              Monitoring of fuel consumption and operation modes of mining and
              quarrying equipment (rock trucks, bulldozers, crawler tractors,
              loaders, power units) allows to reduce operation costs, prevent
              fuel theft and equipment breakdown. The main feature of
              Technoton’s solutions for quarry equipment is using DFM Marine
              fuel flow meters, which were designed for equipment with fuel
              consumption up to 4000 L/h.
            </p>
            <button>Know More</button>
          </div>
        </div>

        <div className="solution battery">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>
          <div className="description">
            <h3>Lions Auto Portable Lithium-ion Battery Solution</h3>
            <p>
              The Speedotrack72V 30Ah portable battery pack is a compact, safe
              and economical lithium-ion battery pack. This standalone battery
              pack was designed for electric scooters, with high-power NMC
              lithium-ion cells. No additional equipment is needed for the safe
              operation of this battery pack. In extreme operating conditions,
              the integrated BMS disconnects the battery from the system. This
              ensures safe operation and protects the battery pack against short
              circuits, over-charge, over discharge, over current, over
              temperature and under temperature events.
            </p>
            <button>Know More</button>
          </div>
        </div>
      </div>

      <Partners />

      <div className="features">
        <h2>Easy to Use Vehicle Tracking Software</h2>

        <div className="card playback">
          <img src={playback} alt="" />
          <h3>Monthly History Playback</h3>
          <p>
            Among Lions Auto&#39;s features is the Animated Map Replay option
            that allows you to retrace a vehicle&#39;s route on a map screen for
            a chosen date and time.
          </p>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </div>

        <div className="card alerts">
          <img src={alerts} alt="" />
          <h3>Real-Time Alerts</h3>
          <p>
            Customize Lions Auto alerts feature to make you aware of exceptions
            — in real time.
          </p>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </div>

        <div className="card tracking">
          <img src={tracking} alt="" />
          <h3>Real-Time Tracking</h3>
          <p>
            One of the major benefits of GPS tracking is that a business can
            view vehicle progress in real time.
          </p>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </div>

        <div className="card apps">
          <img src={apps} alt="" />
          <h3>Mobile Apps</h3>
          <p>
            Lions Auto vehicle tracking solution is mobile friendly and cross
            platform supported track your fleet where ever it goes.
          </p>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </div>

        <div className="card multiple">
          <img src={multiple} alt="" />
          <h3>Monitor Multiple Vehicles</h3>
          <p>
            Monitoring Multiple vehicle using Lions Auto is very easy, user
            friendly and cost effective.
          </p>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </div>
      </div>

      <div className="services">
        <div className="title">
          <span>FEATURES</span>
          <h2>
            Our Features & <br />
            <span>Services</span>
          </h2>
          <p>
            Lions Auto Vehicle Tracking Solutions combine sophisticated GPS
            tracking technology with flexible, advanced mapping and reporting
            software.
          </p>
          <p>
            A GPS-enabled Vehicle Tracking Device is installed on each vehicle
            to collect and transmit tracking data via a cellular and satellite
            network, whichever works best for your operations.
          </p>
          <p>
            The device then delivers the data to the Lions Auto hosted
            application, which you can access through the Web at any time.
          </p>

          <button>Get Started</button>
        </div>

        <div className="features">
          <div className="feature visibility">
            <FontAwesomeIcon className="icon" icon={faBars} />
            <h3>Real Time Visibility</h3>
            <p>
              Monitoring your fleet allows you to know where your fleet is every
              time. you can only manage what you can see!
            </p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </div>

          <div className="feature cloud">
            <FontAwesomeIcon className="icon" icon={faLock} />
            <h3>Private Saas Cloud</h3>
            <p>
              Lions Auto&#39;s GPS tracking is streamed to our own private SaaS
              Cloud. Together with our specialised technicians and fleet system
              you are able to monitor 24/7.
            </p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </div>

          <div className="feature theft">
            <FontAwesomeIcon className="icon" icon={faCloud} />
            <h3>Prevent Fuel Theft</h3>
            <p>
              Our reliable fuel chart, combined with Google Earth and Google
              Street View will simplify the process of monitoring when and where
              your driver fills the fuel tank.
            </p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};
