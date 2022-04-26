import { Link, Route, Routes } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import logo from "../../Images/logo.png";
import "../Pages.css";
import "./AboutUs.css";
import Footer2 from "../../Components/Footer/Footer2/Footer2";
import {
  FaCalendarAlt,
  FaUsers,
  FaHome,
  FaBuilding,
  FaCheck,
  FaWatch,
  FaClock,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="Main-container">
      <div className="Navigation-container">
        <NavBar />
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo-each" />
        </Link>
      </div>

      <div className="AboutUs-body-one-container">
        <h1 className="AboutUs-body-one-header">About Metropolitan</h1>
        <hr className="line" />
        <div className="AboutUs-body-one">
          <p className="AboutUs-body-one-body">
            Metropolitan is an established property development company focused
            on creating homes packed with functionality, convenience and comfort
            for today’s modern lifestyle seeker and savvy investor.
          </p>
          <p className="AboutUs-body-one-body">
            The innovation-led, future-focused Metropolitan Real Estate
            established in 1995, the company is responsible for more than 450
            large-scale projects worldwide. Metropolitan Real Estate has been
            operating in Ethiopia since 2016 G.C
          </p>
          <p className="AboutUs-body-one-body">
            Metropolitan Real Estate is introducing world-class luxury high-end
            apartments to Addis Ababa’s key areas. In doing so, we strive to
            fulfill the needs of luxury living in Ethiopia and provide long term
            profitable investment opportunities in real estate.
          </p>
        </div>
      </div>

      <div className="AboutUs-body-two-container">
        <div className="AboutUs-body-two-header-container">
          <h3 className="AboutUs-body-two-header">OUR VISION AND MISSION</h3>
        </div>
        <div className="AboutUs-Column-lists">
          <ul className="column-list">
            <li className="column-each-list-image">
              <img
                src="https://metropolitanaddis.com/wp-content/uploads/2021/12/355-3551250_goals-png-clipart-goal-icon-transparent-png-150x150.png"
                className="image-one"
              />
            </li>
            <p className="column-paragraph">
              Our Mission is to gain permanent habitat for urban life by
              designing secure, high-quality, and cost-effective construction
              projects together with our customers, employees, and partners.
            </p>
          </ul>
          <ul className="column-list">
            <li className="column-each-list-image">
              <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_130,h_118/https://metropolitanaddis.com/wp-content/uploads/2021/11/iconPicture1.png" />
            </li>
            <p className="column-paragraph">
              Our Vision is to become an innovative company providing
              customer-focused, secure, and quality services with our
              experienced human resources.
            </p>
          </ul>
        </div>
      </div>

      <div className="in-between">
        <div className="in-between-header">
          <h3 className="in-between-header-text">
            METROPOLITAN BY THE NUMBERS
          </h3>
          <div className="icons-listed-in-between">
            <div className="icon-in-between">
              <FaCalendarAlt className="icon-itself" />
              <h3>26</h3>
              <p className="below-icon-text">Years Experience</p>
            </div>
            <div className="icon-in-between">
              <FaUsers className="icon-itself" />
              <h3>4,500</h3>
              <p className="below-icon-text">Employees</p>
            </div>
            <div className="icon-in-between">
              <FaHome className="icon-itself" />
              <h3>1</h3>
              <p className="below-icon-text">Million Sq.m. Luxury Housing</p>
            </div>
            <div className="icon-in-between">
              <FaBuilding className="icon-itself" />
              <h3>600</h3>
              <p className="below-icon-text">Thousand Sq.m Malls & Office</p>
            </div>
            <div className="icon-in-between">
              <FaCheck className="icon-itself" />
              <h3>450+</h3>
              <p className="below-icon-text">Completed Project</p>
            </div>
            <div className="icon-in-between">
              <FaClock className="icon-itself" />
              <h3>9</h3>
              <p className="below-icon-text">Million Man Hours</p>
            </div>
          </div>
        </div>
      </div>

      <div className="AboutUs-body-three-container">
        <div className="AboutUs-body-three-header-container">
          <h3 className="AboutUs-body-three-header">
            WHAT MAKES METROPOLITAN UNIQUE
          </h3>
        </div>
        <div className="AboutUs-Column-lists2">
          <ul className="column-list2">
            <li className="column-each-list2-image1">
              <img src="https://metropolitanaddis.com/wp-content/uploads/2021/12/time.png" />
            </li>
            <h4>On-Time Delivery</h4>
          </ul>
          <ul className="column-list2">
            <li className="column-each-list2-image2">
              <img src="https://metropolitanaddis.com/wp-content/uploads/2021/11/quality.png" />
            </li>
            <h4>Quality</h4>
          </ul>
          <ul className="column-list2">
            <li className="column-each-list2-image3">
              <img src="https://metropolitanaddis.com/wp-content/uploads/2021/11/home.png" />
            </li>
            <h4>Location</h4>
          </ul>
          <ul className="column-list2">
            <li className="column-each-list2-image4">
              <img src="https://metropolitanaddis.com/wp-content/uploads/2021/11/ful.png" />
            </li>
            <h4>Full features and facilities</h4>
          </ul>
          <ul className="column-list2">
            <li className="column-each-list2-image5">
              <img src="https://metropolitanaddis.com/wp-content/uploads/2021/11/high.png" />
            </li>
            <h4>High return on investment</h4>
          </ul>
        </div>
      </div>

      <div className="Footer-container">
        <Footer2 />
      </div>
    </div>
  );
};

export default AboutUs;
