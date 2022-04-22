import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./DropDown";
import logo from "../../Images/logo.png";
import "./NavBar.css";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import { FaBars, FaCaretDown, FaTimes } from "react-icons/fa";
import { Dropdown } from "bootstrap";
import { useState } from "react";

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div className="NavbarItems">
      <ul className="nav-menu">
        <nav>
          <NavLink to="/">
            <img src={logo} alt="logo" className="nav-logo" />
          </NavLink>

          <NavLink to="/AboutUs" style={{ textDecoration: "none" }}>
            <li className="nav-menu-link">ABOUT US</li>
          </NavLink>

          <NavLink to="/LuxuryLines" style={{ textDecoration: "none" }}>
            <li className="nav-menu-link">
              LUXURY LINES
              <FaCaretDown
                style={{ marginBottom: "8px" }}
                // onMouseEnter={onMouseEnter}
                // onMouseLeave={onMouseLeave}
              />
              {dropdown && <Dropdown />}
            </li>
          </NavLink>

          <NavLink to="/StandardLines" style={{ textDecoration: "none" }}>
            <li className="nav-menu-link">
              STANDARD LINES <FaCaretDown style={{ marginBottom: "8px" }} />
            </li>
          </NavLink>

          <NavLink to="/NewsBlogs" style={{ textDecoration: "none" }}>
            <li className="nav-menu-link">NEWS & BLOG</li>
          </NavLink>

          <NavLink
            to="/MetropolitanDifference"
            style={{ textDecoration: "none" }}
          >
            <li className="nav-menu-link-long">METROPOLITAN DIFFERENCE</li>
          </NavLink>

          <NavLink
            to="/ContactUs"
            activeClassName="main-nav-active"
            style={{ textDecoration: "none" }}
          >
            <li className="nav-menu-link">CONTACT US </li>
          </NavLink>

          {/* <div className="menu-icon" onClick={handleClick}>
            <i className={click ? <FaTimes /> : <FaBars />} />
          </div> */}
        </nav>
      </ul>
    </div>
  );
};

export default NavBar;

// {MenuItems.map((item, index)=>{
//   return(
//     <li key={index} className="nav-menu-link" >
//         <a className={item.cName} href={item.url}>
//          {item.title}
//         </a>
//       {/* <Link to="item.url"></Link> */}

//     </li>
//   )
// })}
