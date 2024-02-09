import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const LoadMonitoring = () => {
  return (
    <div className="Page Business">
      <div className="landing">
        <div className="title">
          <span>
            WELCOME TO <span>LIONS AUTO</span>
          </span>
          <br />

          <h1>Vehicle Load Monitoring Solution</h1>
          {/* <span>Vehicle Load Monitoring Solution</span> */}
        </div>

        <p>
          For many types of trucks, knowing the loaded weight is important for
          operating safely and maximizing payload whilst avoiding fines for
          overloading. According to the complexity of in motion load weight
          calculation, our approach is more stable, inexpensive & good precision
          than other methods.
        </p>
        <p>
          In this solution, load weight calculated based on monitoring truck
          suspension changes with a matched sensor by vehicle suspension type
          mechanism. Then these data received by tracker device and send for
          server after combined with location and other truck status data.{" "}
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>
      <div className="features">
        <h2>Features of Load Weight Monitoring</h2>

        <div className="features-container">
          <div className="feature reach">
            <h3>Load Measurements</h3>
            <p>
              Using our load weight monitoring solution our customer will be
              able to monitor weight based on monitoring truck suspension
              changes with a matched sensor by vehicle suspension type
              mechanism.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature reliability">
            <h3>Special Design</h3>
            <p>
              In order to monitor load variations in these vehicles, a mechanism
              is installed on the vehicle to convert the elevation changes into
              angular variations and calculate the load weight based on
              calibration data.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature ux">
            <h3>Vibration Resistant</h3>
            <p>
              Using our load weight monitoring solution our customer will be
              able to control vibration resistant because our solution design as
              per 5G/40Hz. It also comes with protection of IP67 standard.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature technology">
            <h3>Easy Installation</h3>
            <p>
              Our load weight monitoring solution is easy to install with our
              expert technician that will install and show live demo after
              installation of essential feature of load monitoring. we will also
              provide 24/7 support.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>

      <div className="opportunities">
        <h1>Application of Load Weight Monitoring</h1>
        <div className="opportunity franchising">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Live Load Monitoring</h3>
            <p>
              Speedotrack Load weight monitoring solution is helpful for
              operating safely and maximizing payload
            </p>
            <button>Explore More</button>
          </div>
        </div>

        <div className="opportunity franchising">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Load Restrictions for Highway</h3>
            <p>
              Using our Load weight monitoring solution our customer can easily
              monitor load weight on truck and come to know that weather their
              driver is over loading the truck as per Govt. rules and norms to
              avoid penalty.
            </p>
            <button>Explore More</button>
          </div>
        </div>

        <div className="opportunity franchising">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Dump Truck Management</h3>
            <p>
              Using our Load weight monitoring solution our customer can easily
              monitor load weight on dump truck and come to know that weather
              their driver is over loading the truck as per Govt. rules and
              norms to avoid penalty.
            </p>
            <button>Explore More</button>
          </div>
        </div>

        <div className="opportunity franchising">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Garbage Truck Management</h3>
            <p>
              Using our Load weight monitoring solution our customer can easily
              monitor load weight on Garbage truck and come to know that weather
              their driver is over loading the truck as per Govt. rules and
              norms to avoid penalty.
            </p>
            <button>Explore More</button>
          </div>
        </div>

        <div className="opportunity franchising">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Vehicle Balance Monitoring</h3>
            <p>
              Using our Load weight monitoring solution our customer can easily
              monitor load weight on dump truck and come to know that weather
              truck load is balanced or not which is helpful for end user to
              avoid any future accident.
            </p>
            <button>Explore More</button>
          </div>
        </div>

        <div className="opportunity franchising">
          <div className="image">
            <img
              src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/01/Mining-Equipment-Monitoring-Solution_03.png?w=666&ssl=1"
              alt=""
            />
          </div>

          <div className="description">
            <h3>Save your Money</h3>
            <p>
              Using our Load weight monitoring solution our customer can easily
              reduce their fleet cost in many ways like avoid overload
              condition, reduction in penalty for over load, Vehicle load
              balancer to avoid accident etc. main this it is also useful for
              resource planning to run the fleet which ultimately increase the
              revenue of organization.
            </p>
            <button>Explore More</button>
          </div>
        </div>
      </div>
      {/* <Partners /> */}
    </div>
  );
};

export default LoadMonitoring;
