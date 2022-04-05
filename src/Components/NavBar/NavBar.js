import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import logo from "../../Images/logo.png";
import './NavBar.css';


const NavBar = () => {
  return (
    <div className="NavbarItems">
        <img src={logo} alt="logo" className="nav-logo"/>
        <ul className="nav-menu">
          {MenuItems.map((item, index)=>{
            return(
              <li key={index} className="nav-menu-link">
                <a className={item.cName} href={item.url}>
                 {item.title}
                </a>
              </li>
            )
          })}
        </ul>
       
          
      </div>
        
  )
}

export default NavBar;