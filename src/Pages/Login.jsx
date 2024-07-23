import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="Page Login">
      <Link to={'https://tracking.lionsautogps.com'}>
        <div className="card">Vehicle Tracking</div>
      </Link>

      <Link to={'https://tracking.lionsautogps.com'}>
        <div className="card">Fuel Monitoring</div>
      </Link>
    </div>
  )
}

export default Login
