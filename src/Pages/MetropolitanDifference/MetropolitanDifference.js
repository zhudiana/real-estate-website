import NavBar from "../../Components/NavBar/NavBar";
import logo from "../../Images/logo.png";
import Footer2 from "../../Components/Footer/Footer2/Footer2";
import { Link } from "react-router-dom";
import "./MetropolitanDifference.css";
import { FaCheck } from "react-icons/fa";

const MetropolitanDifference = () => {
  return (
    <div className="Main-container">
      <div className="Navigation-container">
        <NavBar />
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo-each" />
        </Link>
      </div>

      {/* Body one */}
      <div className="Metropolitan-difference-container">
        <div className="metropolitan-header">
          <h1>The Difference Between Luxury And Standard Apartments</h1>
        </div>
        <div className="metropolitan-paragraph">
          <p className="metropolitan-p">
            Metropolitan Real Estate always strives to give you a modern and
            luxurious life in the African capital Addis Ababa. Metropolitan is
            now working on two kinds of apartments: luxury apartments and
            standard apartments.
          </p>
          <p className="metropolitan-p">
            The major differences of these two types of apartments are listed
            below to help you make an informed decision when purchasing a home
            from us.
          </p>
        </div>
      </div>

      {/* Body two */}

      <div className="Metropolitan-difference-container-body2">
        <div className="inside-background-body2">
          <div className="inside-content-container">
            <div className="upper-image-metropolitan">
              <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300/https://metropolitanaddis.com/wp-content/uploads/2019/09/luxury-logo-300x293.png" />
            </div>
            <div className="inside-text-upper">
              <p className="each-feature-p">
                Metropolitan Real Estate always strives to give you a modern and
                luxurious life in the African capital Addis Ababa. Luxury homes
                are built with very high quality and strict supervision. At
                Metropolitan, all construction material, fixtures and appliances
                are carefully selected to provide the best home for you and your
                family.
              </p>
            </div>
            <div className="inside-text-list-title">
              <h2>Features</h2>
            </div>
            <div className="inside-text-lists">
              <ul className="inside-text-lists-feature">
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  Generator
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  Elevator
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  Water Tank
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  underground parking
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  international supervisory
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  international engineering
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  all functional features
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />1 year warranty
                </li>

                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  water insulation
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  steel main door
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  gym
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  clubhouse
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  exterior aluminum cover
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  luxury kitchen cabinet
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  luxury tile flooring
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  luxury marbles
                </li>

                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  luxury fixtures
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  move in ready
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  double pane windows
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  built in appliances
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  bed room closet
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  guest closet
                </li>
                <li className="each-feature-list">
                  <FaCheck className="check-icon" />
                  wood flooring
                </li>
              </ul>
            </div>
          </div>
          <span>
            <Link to="/LuxuryLines">
              <button className="elementor-text-btn-feature">
                View Luxury Apartments
              </button>
            </Link>
          </span>
        </div>

        {/* body three */}

        <div className="inside-background-body3">
          <div className="inside-content-container">
            <div className="upper-image-metropolitan">
              <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300/https://metropolitanaddis.com/wp-content/uploads/2019/07/standard-aparatama-logo-e1590674361378-300x225.png" />
            </div>
            <div className="inside-text-upper-body3">
              <p className="each-feature-p-body3">
                Standard apartments are built with equivalent quality to that of
                luxury apartments but with the element of affordability.
                Construction processes, material quality and supervision are not
                compromised. Just like Metropolitans luxury constructions are
                done by experienced international engineers with strict
                supervision.
              </p>
            </div>
            <div className="inside-text-list-title-body2">
              <h2>Features</h2>
            </div>
            <div className="inside-text-lists">
              <ul className="inside-text-lists-feature-body3">
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  Generator
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  Elevator
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  Water Tank
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  underground parking
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  international supervisory
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  international engineering
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  all functional features
                </li>

                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />1 year warranty
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  water insulation
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  steel main door
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  clubhouse
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  international standard kitchen cabinet
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  international standard tile flooring
                </li>

                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  international standard marbles
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  international standard fixtures
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  move in ready
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  steel main door
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  single pane windows
                </li>
                <li className="each-feature-list-body3">
                  <FaCheck className="check-icon-body3" />
                  only at shower bathroom wall tiles
                </li>
              </ul>
            </div>
          </div>
          <span>
            <Link to="/StandardLines">
              <button className="elementor-text-btn-feature-body3">
                View Standard Apartments
              </button>
            </Link>
          </span>
        </div>
      </div>

      <div className="Footer-container">
        <Footer2 />
      </div>
    </div>
  );
};

export default MetropolitanDifference;
