import { Link } from 'react-router-dom';
import Footer2 from '../../Components/Footer/Footer2/Footer2';
import NavBar from '../../Components/NavBar/NavBar';
import logo from "../../Images/logo.png";

const ContactUs = () => {
  return (
    <div className="Main-container">
      <div className="Navigation-container">
          <NavBar />
          <Link to="/">
            <img src={logo} alt="logo" className="nav-logo-each"/>
          </Link>
      </div>





      <div className="Footer-container">
              <Footer2 />
          </div>
    </div>
  )
}

export default ContactUs