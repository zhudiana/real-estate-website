import styled from "styled-components";
import { Link, Routes,Route } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import logo from "../../Images/logo.png";
import './NavBar.css';


const NavBar = () => {
  return (
    <div className="NavbarItems">
        <img src={logo} alt="logo" className="nav-logo"/>
        <ul className="nav-menu">
          
            <Routes>
              <Route path="/" element={
                   <Link to="/post" style={{ textDecoration: 'none' }}>
                      <li className="nav-menu-link">ABOUT US</li>
                   </Link>
            }
            />
            {/* <Route path="/post"  element={<div>index </div>}/> */}
            </Routes>
            <Routes>
              <Route path="/" element={
                   <Link to="/post" style={{ textDecoration: 'none' }}>
                      <li className="nav-menu-link">LUXURY LINES</li>
                   </Link>
            }
            />
            {/* <Route path="/post"  element={<div>index </div>}/> */}
            
            </Routes>
            <Routes>
              <Route path="/" element={
                   <Link to="/post" style={{ textDecoration: 'none' }}>
                      <li className="nav-menu-link">STANDARD LINES</li>
                   </Link>
            }
            />
            {/* <Route path="/post"  element={<div>index </div>}/> */}
            </Routes>
            <Routes>
              <Route path="/" element={
                   <Link to="/post" style={{ textDecoration: 'none' }}>
                      <li className="nav-menu-link">NEWS & BLOG</li>
                   </Link>
            }
            />
            {/* <Route path="/post"  element={<div>index </div>}/> */}
            </Routes>
            <Routes>
              <Route path="/" element={
                   <Link to="/post" style={{ textDecoration: 'none' }}>
                      <li className="nav-menu-link">METROPOLITAN DIFFERNCE</li>
                   </Link>
            }
            />
            {/* <Route path="/post"  element={<div>index </div>}/> */}
            </Routes>
            <Routes>
              <Route path="/" element={
                   <Link to="/post" style={{ textDecoration: 'none' }}>
                      <li className="nav-menu-link">CONTACT US</li>
                   </Link>
            }
            />
            {/* <Route path="/post"  element={<div>index </div>}/> */}
            </Routes>
            
        
          
          
          
          
          
        </ul>
      </div>

      
        
  )
}

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