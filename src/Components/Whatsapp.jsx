import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
export const Whatsapp = () => {
  return (
    <div className="Whatsapp">
      <Link to={'https://wa.me/254715132828'}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </Link>
    </div>
  )
}
