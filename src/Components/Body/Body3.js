import "./Body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Body3 = () => {
  return (
    <div className="elementor-body-three">
      <container>
        <img
          src="https://metropolitanaddis.com/wp-content/uploads/2020/04/Metro_1.jpg"
          className="under-image-body-3"
        />
        <Link to="/StandardLines">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_413/https://metropolitanaddis.com/wp-content/uploads/2019/07/standard-aparatama-logo-e1590674361378.png"
            className="upper-image-body3"
          />
        </Link>

        <div className="little-text-container">
          <figcaption>
            <Link to="/StandardLines">
              <span className="elementor-body-three-title">STANDARD LINE</span>
            </Link>

            <span className="elementor-body-three-little-text">
              <p className="little-text-two">Metropolitan Apartments </p>
            </span>
            <div className="elementor-paragraph-body-three">
              <p className="first-para">
                Standard apartments are built with an international standard
                quality but with the element of affordability. Construction
                processes, quality and supervision are not compromised for the
                sake of affordability.
              </p>
              <p>
                Our very first luxury house for sale in Addis Ababa was, Sarbet
                Gabriel Apartments,which was built and delivered in 12 months.
                We have now launched two more luxury housing projects.
              </p>
            </div>
          </figcaption>
          <div className="elmentor-body3-text">
            <Link to="/StandardLines">
              <span className="body3-btn">
                <button className="elementor-body3-text-btn">
                  View Standard Apartments
                </button>
              </span>
            </Link>
          </div>
        </div>
      </container>
    </div>
  );
};

export default Body3;
