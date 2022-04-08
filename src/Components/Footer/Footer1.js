import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

const Footer1 = () => {
  return (
      <div className="container">
        <div className="footer1-container">
            <div classname="footer1-text-container">
                <p className="footer1-text">
                It is our passion to create spaces that embody the convenience and 
                comfort of modern day luxury living in Ethiopia, while providing 
                excellent investment opportunities in some of Addis Ababa's most prime 
                real estate locations such as Bole, Sarbet, Bisrate Gebriel, African 
                Union area, and Total Soset Kuter Mazoria. 
                <br />
                <br />
                For Metropolitan, becoming the best real estate developer in Ethiopia 
                is all about delivering high quality apartments in timely manner.
                <br />
                <br />
                For more information
                </p>     
            </div>
            {/* <div className="footer1-text2-container">
                 <h1 className="footer1-text2"> LET US CALL YOU</h1>
            </div> */}
        </div>
     </div>
  )
}

export default Footer1;