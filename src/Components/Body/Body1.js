import backgroundImage from "../../Images/HomePageBG.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Body.css";
import "../NavBar/NavBar.css";
import { container } from "react-bootstrap";

const Body1 = () => {
  return (
    <div className="body1-content">
         <div>
          <container>
            <figure className="position-relative">
              <div className="image">
                <img src={backgroundImage} alt="background" className="img-fluid"/>
              </div>
              <figcaption>
                 <h3>Metropolitan Real Estate</h3>
                 <h2 className="fw-bolder">Built with quality, <br/> Delivered on Time </h2>
              </figcaption>
            </figure>
            
          </container>
            
        </div>
    </div>
  )
}

export default Body1;
