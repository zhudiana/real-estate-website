import { Link } from "react-router-dom";
import Footer2 from "../../Components/Footer/Footer2/Footer2";
import NavBar from "../../Components/NavBar/NavBar";
import logo from "../../Images/logo.png";
import "./ContactUs.css";
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="Main-container">
      <div className="Navigation-container">
        <NavBar />
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo-each" />
        </Link>
      </div>

      <div className="contact-us-main-container">
        <div className="contact-us-inner-container-title">
          <h3 className="contact-us-inner-title-contact">Contact</h3>
        </div>

        <div className="contact-us-inner-container">
          <ul className="contact-us-inner-container-lists">
            <li>
              <div className="contact-us-inner-container-image">
                <img src="https://metropolitanaddis.com/wp-content/uploads/2019/07/metpopolitan-logolar-6-219x300.png" />
              </div>

              <h3 className="contact-us-first-column-title">
                Addis Ababa, Ethiopia
              </h3>

              <h4 className="contact-us-first-column-adress">
                Bole, Around Friendship Hotel, Infront of Istanbul Restaurant.
              </h4>

              <h4 className="contact-us-first-column-email-adress">
                <FaMailBulk /> &nbsp; info@metropolitanaddis.com
              </h4>
              <h4 className="contact-us-first-column-no ">
                <FaPhoneAlt />
                &nbsp; +251 973 30 30 30
              </h4>
            </li>
            <li className="contact-us-second-column">
              <h4 className="eth-office">ETHIOPIA OFFICE</h4>
              <h4 className="eth-office-no">+251 973 30 30 30</h4>
              <h4 className="usa-office">UNITED STATE OFFICE</h4>

              <h4 className="usa-office-adress">
                2875 WRay Rd#6-444 Chandler, AZ 85224
              </h4>
              <h4 className="usa-office-no">+1 480 280 2242</h4>
              <h4 className="usa-email">marketing@metropolitanaddis.com</h4>
              <h2 className="work-hours">WORK HOURS:</h2>
              <h4 className="first-work-hours">
                Mon-Fri: 8.00 – 17.00 Ethiopia Time Zone
              </h4>
              <h4 className="second-work-hours">
                Mon-Fri: 8.00 – 17.00 Arizona Time Zone
              </h4>
            </li>
          </ul>
        </div>

        {/* second column */}
        <div className="contact-us-inner-container">
          <h2 className="have-question-header">Have A Question? Contact Us</h2>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="firstname"
              className="form-input"
              placeholder="Name"
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email"
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="lastname" className="form-label">
              Subject
            </label>
            <input
              type="text"
              name="lastname"
              className="form-input"
              placeholder="Subject (Optional)"
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="country" className="form-label">
              How did you find us?
            </label>
            <select className="form-input">
              <option value="Facebook" className="items-in-select">
                Facebook
              </option>
              <option value="Instagram" className="items-in-select">
                Instagram
              </option>
              <option value="Linkdin" className="items-in-select">
                Linkdin
              </option>
              <option value="Search" className="items-in-select">
                Google Search
              </option>
              <option value="referral" className="items-in-select">
                Friend referral
              </option>
              <option value="Event" className="items-in-select">
                Event
              </option>
            </select>
          </div>

          <div className="form-inputs">
            <label htmlFor="phonenumber" className="form-label">
              Message
            </label>
            <textarea
              type="textarea"
              className="form-input-text-area"
              placeholder="Message"
            />
          </div>

          <button className="form-input-btn" type="submit">
            Send Message
          </button>
        </div>
      </div>

      <div className="Footer-container">
        <Footer2 />
      </div>
    </div>
  );
};

export default ContactUs;
