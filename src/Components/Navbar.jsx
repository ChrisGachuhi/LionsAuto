import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to={"/"} className="logo">
        LOGO
      </Link>

      <ul className = {menuIsOpen ? 'menuOpen' : ''}>
        <li>
          <NavLink to={"/Products"}> Products & Solutions </NavLink>
        </li>
        <li>
          <NavLink to={"/Business"}> Business </NavLink>
        </li>
        <li>
          <NavLink to={"/Software"}> Software </NavLink>
        </li>
        <li>
          <NavLink to={"/Devices"}> Supported Devices </NavLink>
        </li>
        <li>
          <NavLink to={"/Pricing"}> Pricing </NavLink>
        </li>
        <li>
          <NavLink to={"/Payment"}> Payment </NavLink>
        </li>
        <li>
          <NavLink to={"/Contact"}> Contact </NavLink>
        </li>
      </ul>

      <div className="hamburger-menu" onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};
