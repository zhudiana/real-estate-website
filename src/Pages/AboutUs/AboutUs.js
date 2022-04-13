import { Link, Route, Routes } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import logo from "../../Images/logo.png";
import "../Pages.css";
import "./AboutUs.css";
import Footer2 from "../../Components/Footer/Footer2/Footer2";

const AboutUs = () => {
  return (
        <div className="Main-container">
          <div className="Navigation-container">
              <NavBar />
              <Link to="/">
                <img src={logo} alt="logo" className="nav-logo-each"/>
              </Link>
          </div>
          <div className="AboutUs-body-one-container">
              <h1 className="AboutUs-body-one-header">About Metropolitan</h1>
              <hr className="line" />
            <div className="AboutUs-body-one">
                <p className="AboutUs-body-one-body">
                    Metropolitan is an established property development company 
                    focused on creating homes packed with functionality, convenience 
                    and comfort for today’s modern lifestyle seeker and savvy investor.
                </p>
                <p className="AboutUs-body-one-body">
                    The innovation-led, future-focused Metropolitan Real Estate established 
                    in 1995, the company is responsible for more than 450 large-scale projects 
                    worldwide. Metropolitan Real Estate has been operating in Ethiopia since 2016 G.C
                </p>
                <p className="AboutUs-body-one-body">
                    Metropolitan Real Estate is introducing world-class luxury high-end apartments 
                    to Addis Ababa’s key areas.  In doing so, we strive to fulfill the needs of 
                    luxury living in Ethiopia and provide long term profitable investment opportunities 
                    in real estate.
                </p>
            </div>
          </div>
          
          <div className="Footer-container">
              <Footer2 />
          </div>

          
        </div>
 
  )
}

export default AboutUs;