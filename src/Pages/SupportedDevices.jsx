import { Link } from 'react-router-dom'
import fmc003 from '../assets/images/updatedimages/fmc003.webp'

const SupportedDevices = () => {
  return (
    <div className="Page Devices">
      <Link to={'/FMB920-Vehicle-GPS-Tracker'} className="solution">
        <div className="image">
          <img
            src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/02/FMB920-Vehicle-GPS-Tracker-03.png?resize=150%2C150&ssl=1"
            alt=""
          />
        </div>
        <p>
          <span>FMB920</span>
          <br />
          <span>SERVER PORT: 11922</span>
        </p>
      </Link>

      <Link to={'/FMB120-Vehicle-GPS-Tracker'} className="solution">
        <div className="image">
          <img
            src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/02/FMB120-Vehicle-GPS-Tracker-03.png?resize=150%2C150&ssl=1"
            alt=""
          />
        </div>
        <p>
          <span>FMB120</span>
          <br />
          <span>SERVER PORT: 11922</span>
        </p>
      </Link>

      <Link to={'/FMB125-Vehicle-GPS-Tracker'} className="solution">
        <div className="image">
          <img
            src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/02/FMB125-Vehicle-GPS-Tracker-03.png?resize=150%2C150&ssl=1"
            alt=""
          />
        </div>
        <p>
          <span>FMB125</span>
          <br />
          <span>SERVER PORT: 11922</span>
        </p>
      </Link>

      <Link to={'/FMC003-Vehicle-GPS-Tracker'} className="solution">
        <div className="image">
          <img src={fmc003} alt="Image not found" />
        </div>
        <p>
          <span>FMC003</span>
          <br />
          <span>SERVER PORT: 11922</span>
        </p>
      </Link>

      <Link to={'/GT06N-GPS-Tracker'} className="solution">
        <div className="image">
          <img
            src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/02/GT06N_03.png?resize=150%2C150&ssl=1"
            alt=""
          />
        </div>
        <p>
          <span>GT06N</span>
          <br />
          <span>SERVER PORT: 10202</span>
        </p>
      </Link>

      <Link to={'/S102-Vehicle-GPS-Tracker'} className="solution">
        <div className="image">
          <img
            src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/02/Seeworld_S102.jpg?resize=150%2C150&ssl=1"
            alt=""
          />
        </div>
        <p>
          <span>S102</span>
          <br />
          <span>SERVER PORT: 11820</span>
        </p>
      </Link>

      <Link to={'/VT08S-Vehicle-GPS-Tracker'} className="solution">
        <div className="image">
          <img
            src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/02/VT08S-GPS-Tracker_01.png?resize=150%2C150&ssl=1"
            alt=""
          />
        </div>
        <p>
          <span>VT08S</span>
          <br />
          <span>SERVER PORT: 47755</span>
        </p>
      </Link>

      <Link to={'/VT05S-Vehicle-GPS-Tracker'} className="solution">
        <div className="image">
          <img
            src="https://i0.wp.com/speedotrack.com/wp-content/uploads/2022/02/VT05S-GPS-Tracker.png?resize=150%2C150&ssl=1"
            alt=""
          />
        </div>
        <p>
          <span>VT05S</span>
          <br />
          <span>SERVER PORT: 47755</span>
        </p>
      </Link>
    </div>
  )
}

export default SupportedDevices
