import "./Body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Body4 = () => {
  return (
    <div>
      <div>
        <figure className="position-relative">
          <img
            src="https://metropolitanaddis.com/wp-content/uploads/2019/09/Compare-Luxury-Standard-Apartments_04.png"
            className="body-four-image"
          />
        </figure>
      </div>
      <figcaption>
        <div className="body4-text-bg">
          <span className="body4-text">
            <Link
              to="/MetropolitanDifference"
              style={{ textDecoration: "none" }}
            >
              <h2 className="body4-text1">WHAT IS THE DIFFERENCE?</h2>
              <h5 className="body4-text2" style={{ color: "#fff" }}>
                Luxury Apartments vs Standard Apartments
              </h5>
              <button className="body4-text3">Click here to compare</button>
            </Link>
          </span>
        </div>
      </figcaption>
    </div>
  );
};

export default Body4;
