import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import logo from "../../Images/logo.png";
import "./NavBar.css";
import AboutUs from "../../Pages/AboutUs/AboutUs";

const NavBar = () => {
  return (
      <div className="NavbarItems">
     
        <ul className="nav-menu">
                <Link to="/">
                  <img src={logo} alt="logo" className="nav-logo"/>
                </Link> 
                
                 <Link to="/AboutUs" style={{ textDecoration: "none" }}>
                   <li className="nav-menu-link">ABOUT US</li>
                 </Link>

                 <Link to="/LuxuryLines" style={{ textDecoration: "none" }}>
                   <li className="nav-menu-link">LUXURY LINES</li>
                 </Link>

                 <Link to="/StandardLines" style={{ textDecoration: "none" }}>
                   <li className="nav-menu-link">STANDARD LINES</li>
                 </Link>

                 <Link to="/NewsBlogs" style={{ textDecoration: "none" }}>
                   <li className="nav-menu-link">NEWS & BLOG</li>
                 </Link>

                 <Link to="/MetropolitanDifference" style={{ textDecoration: "none" }}>
                   <li className="nav-menu-link-long">METROPOLITAN DIFFERENCE</li>
                 </Link>

                 <Link to="/ContactUs" style={{ textDecoration: "none" }}>
                   <li className="nav-menu-link">CONTACT US</li>
                 </Link>
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
