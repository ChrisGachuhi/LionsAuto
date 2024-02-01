import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const GeneratorMonitoring = () => {
  return (
    <div className="Page Business">
      <div className="landing">
        <div className="title">
          <span>
            WELCOME TO <span>LIONS AUTO</span>
          </span>
          <br />

          <h1>Generator Monitoring Solution</h1>
          {/* <span>Vehicle Load Monitoring Solution</span> */}
        </div>

        <p>
          We install sensors and smart devices, on the generator, that monitor
          various parameters such as – power generated, battery voltage, run
          hours, fuel level, etc. A gateway device then communicates these
          readings to our central server over the internet. The gateway works on
          GPRS, Wireless or Ethernet technology. You can then log onto the web
          application and view generator parameters, create reports – anywhere –
          and any time. Typical reports include generator status, fuel and
          maintenance reports etc.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="features">
        <h2>Use cases of Generator Monitoring</h2>

        <div className="features-container">
          <div className="feature reach">
            <h3>Industries & Buildings</h3>
            <p>
              Our solution helps in easy to manage fuel & energy consumption.
              Our Solution Helps in enhanced efficiency and reliability of
              Generator . using our solution end user can also monitor generator
              location help in theft of generator.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature reliability">
            <h3>Leasing Companies</h3>
            <p>
              Leasing companies can monitor all generators from a central
              location. Our solution helps in Reduce cost through lesser site
              visits and work-force. companies can Monitor generator location
              and prevent theft.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature technology">
            <h3>Generator OEM's</h3>
            <p>
              Our solution helps OEM to deliver smarter generators to your
              customers . OEM's will be able to Create new revenue opportunities
              in spares, consumables and support. OEM's will be able to Roll out
              your own generator monitoring solutions.
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
            <h3>Generator Performance</h3>
            <p>
              Monitor key generator performance metrics like – total energy
              produced, energy produced per liter of fuel, power quality and RMS
              parameters. If performance falls, you can take timely actions to
              bring performance back to acceptable level.
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
            <h3>Reduce Maintenance Costs</h3>
            <p>
              Get information like hours run, battery voltages and temperature
              trends. You can use this information to schedule maintenance. This
              can reduce sudden downtime, overall maintenance cost and fuel
              consumption.
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
            <h3>Prevent Fuel Theft</h3>
            <p>
              With the sustained rise of global energy prices, fuel costs are a
              major part of the total cost of ownership. Fuel cost could be as
              high as 60% of total cost of operations for a typical diesel
              generator running for about seven hours per day. This cost is
              driving many organizations to manage their generators more
              efficiently or consider other power system options. If you believe
              that, your generators are consuming more than required fuel. A
              possible reason could be fuel theft. You can easily identify fuel
              theft by comparing fuel consumption with actual power generation
              and fuel receipts.
            </p>
            <button>Explore More</button>
          </div>
        </div>
      </div>
      {/* <Partners /> */}
    </div>
  )
}
