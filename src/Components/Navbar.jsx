import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

export const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleLinkClick = () => {
    setMenuIsOpen(false)
  }

  const handleOutsideClick = event => {
    if (menuIsOpen && !event.target.closest('.navbar')) {
      setMenuIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [menuIsOpen])

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [menuIsOpen])

  return (
    <nav className="navbar">
      <Link to={'/'} className="logo" onClick={handleLinkClick}>
        <img src={logo} alt="" />
      </Link>

      <ul className={menuIsOpen ? 'menuOpen' : ''}>
        <li>
          <NavLink to={'/Products'} onClick={handleLinkClick}>
            Products & Solutions
          </NavLink>
        </li>
        <li>
          <NavLink to={'/Business'} onClick={handleLinkClick}>
            Business
          </NavLink>
        </li>
        <li>
          <NavLink to={'/Software'} onClick={handleLinkClick}>
            Software
          </NavLink>
        </li>
        <li>
          <NavLink to={'/Devices'} onClick={handleLinkClick}>
            Supported Devices
          </NavLink>
        </li>
        <li>
          <NavLink to={'/Pricing'} onClick={handleLinkClick}>
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to={'/Payment'} onClick={handleLinkClick}>
            Payment
          </NavLink>
        </li>
        <li>
          <NavLink to={'/Contact'} onClick={handleLinkClick}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'https://tracking.lionsautogps.com'}
            onClick={handleLinkClick}
          >
            Login
          </NavLink>
        </li>
      </ul>

      <div
        className="hamburger-menu"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {!menuIsOpen ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faClose} />
        )}
      </div>
    </nav>
  )
}
