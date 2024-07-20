import { Link } from 'react-router-dom'
import realtime_tracking from '../assets/images/updatedimages/driver-behavior.jpg'
import motorcycle_tracking from '../assets/images/updatedimages/motorcycle-tracking.webp'
import fuelproduct from '../assets/images/updatedimages/FuelProduct.jpg'
import garbageproduct from '../assets/images/updatedimages/garbageproduct.png'

const ProductSolutions = () => {
  return (
    <div className="Page Product">
      <div className="solution">
        <img src={realtime_tracking} alt="" />
        <Link to={'/AIS-140-GPS-Tracker'}>Realtime Vehicle Tracking</Link>
      </div>

      <div className="solution">
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/02/GPS-Tracker-for-School-Bus__01.png?w=500&ssl=1"
          alt=""
        />
        <Link to={'/School-Bus-Tracker'}>GPS Tracker for School Bus</Link>
      </div>

      <div className="solution">
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2021/11/Weights.png?w=500&ssl=1"
          alt=""
        />
        <Link to={'/Load-Monitoring'}>Load Weight Monitoring</Link>
      </div>

      <div className="solution">
        <img src={fuelproduct} alt="" />
        <Link to={'/Fuel-Monitoring'}>Fuel Monitoring</Link>
      </div>

      <div className="solution">
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2021/11/Gens.jpg?w=500&ssl=1"
          alt=""
        />
        <Link to={'/Generator-Monitoring'}>Generator Monitoring</Link>
      </div>

      <div className="solution">
        <img src={motorcycle_tracking} alt="" />
        <Link to={'/Smart-Motorcycle-Tracker'}>Smart Motorcycle Trackers</Link>
      </div>

      <div className="solution">
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2021/11/Fuel.png?w=500&ssl=1"
          alt=""
        />
        <Link to={'/Intelligent-Electric-Lock'}>Electronic Cargo Tracking</Link>
      </div>

      <div className="solution">
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/02/Personal-Tracker-Solution__01.jpg?w=500&ssl=1"
          alt=""
        />
        <Link to={'/Personal-tracker'}>Personal Tracker</Link>
      </div>

      <div className="solution">
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/02/Asset-Tracker-Solution__01.jpg?w=500&ssl=1"
          alt=""
        />
        <Link to={'/Asset-tracker'}>Asset Tracker</Link>
      </div>

      <div className="solution">
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2021/12/monitoringa-kariernogo-transporta-1.png?w=500&ssl=1"
          alt=""
        />
        <Link to={'/Mining-Equipment-Monitoring'}>
          Mining Equipment Monitoring
        </Link>
      </div>

      <div className="solution">
        <img src={garbageproduct} alt="" />
        <Link to={'/Garbage-Truck-Monitoring'}>Garbage truck Monitoring</Link>
      </div>

      <div className="solution">
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2021/12/monitoring-gruzovikov-1.png?w=500&ssl=1"
          alt=""
        />
        <Link to={'/Truck-Telematics'}>Truck Telematics</Link>
      </div>

      <div className="solution">
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2021/12/kontrol-toplivozapravshikov-1.png?w=500&ssl=1"
          alt=""
        />
        <Link to={'/Tanker-Truck-Monitoring'}>Tanker Truck Monitoring</Link>
      </div>

      <div className="solution">
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2021/12/sistema-monitoringa-avtobusov-1.png?w=500&ssl=1"
          alt=""
        />
        <Link to={'/Bus-Monitoring'}>Bus Monitoring System</Link>
      </div>

      <div className="solution">
        <img
          src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/02/Smart-Car-Devices-Solution_01.png?w=500&ssl=1"
          alt=""
        />
        <Link to={'/Smart-Car-Devices'}>Smart Car Devices</Link>
      </div>
    </div>
  )
}

export default ProductSolutions
