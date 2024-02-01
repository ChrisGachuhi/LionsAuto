import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const BatterySolution = () => {
  return (
    <div className="Page Business">
      <div className="landing">
        <div className="title">
          <span>
            WELCOME TO <span>LIONS AUTO</span>
          </span>
          <br />

          <h1>GPortable Li-ion Battery Solution</h1>
          {/* <span>Vehicle Load Monitoring Solution</span> */}
        </div>

        <p>
          The Speedotrack72V 30Ah portable battery pack is a compact, safe and
          economical lithium-ion battery pack. This standalone battery pack was
          designed for electric scooters, with high-power NMC lithium-ion cells.
          No additional equipment is needed for the safe operation of this
          battery pack. In extreme operating conditions, the integrated BMS
          disconnects the battery from the system. This ensures safe operation
          and protects the battery pack against short circuits, over-charge,
          over discharge, over current, over temperature and under temperature
          events.
        </p>
        <p>
          The integrated BMS passively balances the charge between all cells in
          the battery pack. Energy is discharged from the cells with the highest
          charge in the pack, which maximizes the runtime of the battery pack
          and extends its life. This lithium-ion battery pack is maintenance
          free, and has a longer run time with a shorter recovery time than
          equivalent lead acid battery packs. It weighs 70% less and takes up
          60% less space than equivalent lead acid battery packs, providing
          increased range and product compatibility.
          <br />
          <Link>Please get in touch and our expert team will contact you.</Link>
        </p>
      </div>

      <div className="features">
        <h2>Features of Li-ion Battery</h2>

        <div className="features-container">
          <div className="feature reach">
            <h3>Highest Safety Standard</h3>
            <p>
              The Speedotrack 72V 30Ah portable battery Designed to the highest
              automotive standards with Integration of autonomous BMS ensures
              24/7 Battery performance and safety. It provides protection
              against Short circuit, Cell Over Voltage, Cell Under Voltage,
              Charge Over Current, discharge over current, over and under
              temperature.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature reliability">
            <h3>High Performance</h3>
            <p>
              The Speedotrack 72V 30Ah portable battery provides High-power 3C
              NMC lithium-ion cells with 25mOhm IR. it comes with 60 A (Max @
              STC) Continuous discharge current with 40 A (Max @ STC) Continuous
              charge current. it comes with  Extremely low power dissipation
              (Shelf-life of more than 5 years) and upto 85 mA passive cell
              balancing.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="feature technology">
            <h3>Highly Convenient</h3>
            <p>
              The Speedotrack 72V 30Ah portable battery Perfect alternative to
              Lead Acid Batteries. it comes with Standard 3 - Pin I/P & Anderson
              plug power O/P. life of battery is 3 to 5 years and comes with 3
              years limited warranty. it has Short/Fast Charging times. it is
              Portable and lightweight, less than 20 kg (20lb). it comes with
              IP54 watertight enclosure and Compatible with regenerative braking
              systems.
            </p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>

      {/* <Partners /> */}
    </div>
  )
}
