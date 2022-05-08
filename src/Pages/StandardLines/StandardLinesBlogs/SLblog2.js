import { Link } from "react-router-dom";
// import "./LuxuryLinesBlogs.css";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaMailBulk,
  FaArrowRight,
  FaArrowLeft,
  FaPhoneAlt,
  FaClock,
  FaLocationArrow,
} from "react-icons/fa";
import AboutUsBlogFooter from "../../AboutUs/AboutUsBlogs/Footer/AboutUsBlogFooter";

const Blog1 = () => {
  return (
    <div className="blog1-main-container">
      <div className="blog1-header-content">
        <div className="blog1-logo-header-img">
          <Link to="/">
            <img src="https://metropolitanaddis.com/wp-content/uploads/2020/02/metpopolitan-logolar-6-opt.png" />
          </Link>
        </div>
        <div className="blog1-header-text">
          <h1 className="blog1-header-content-text">
            What are Standard apartments for sale in Ethiopia?
          </h1>
          <span
            className="blog1-date
          "
          >
            July 16, 2019
          </span>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span
              className="blog1-metro
          "
            >
              Metropolitan Real Estate
            </span>
          </Link>
        </div>
      </div>
      <div className="curved-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#03192a"
            fill-opacity="1"
            d="M0,96L720,224L1440,96L1440,0L720,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="header-blog1-photo">
        <img
          className="blog1-image"
          src="https://metropolitanaddis.com/wp-content/uploads/2020/04/Cam__2.jpg"
        />
      </div>

      <div className="blog1-share-this-post">
        <hr style={{ width: "1000px", marginLeft: "18%" }} />
        <div className="blog1-horline-between-content">
          <ul className="blog1-horline-between-list">
            <li className="blog1-horline-between-each-list">
              <h2 className="blog1-horline-between-text">Share This Post</h2>
            </li>
            <li className="blog1-horline-between-each-list">
              <FaFacebook className="blog1-horline-between-each-list-icon" />
            </li>
            <li className="blog1-horline-between-each-list">
              <FaLinkedin className="blog1-horline-between-each-list-icon" />
            </li>
            <li className="blog1-horline-between-each-list">
              <FaTwitter className="blog1-horline-between-each-list-icon" />
            </li>
            <li className="blog1-horline-between-each-list">
              <FaMailBulk className="blog1-horline-between-each-list-icon" />
            </li>
          </ul>
        </div>
        <hr style={{ width: "1000px", marginLeft: "18%" }} />
      </div>

      {/* blog */}
      <div className="blog1-blog">
        <p className="blog1-each-blog">
          There are many different types of apartments. They are meant to fit
          into the diverse needs of individuals depending on the number of
          occupant, purpose, budget, location, and need.
        </p>
        <p className="blog1-each-blog">
          There are many apartments which are distinguished on the basis of the
          differences in their size, capacity, location, amenities and
          facilities. Here is a brief description of on one of the several types
          of apartments for sale in Addis Ababa, Standard Apartments.
        </p>
        <p className="blog1-each-blog">
          While luxury apartments raise the bar on comfort, convenience, and
          quality, regular apartments come with their own advantages.
        </p>
        <h2 className="blog1-blog-title">
          Quality of standard apartments for sale in Addis Ababa
        </h2>
        <p className="blog1-each-blog">
          Standard apartments are built with equivalent quality to that of
          luxury apartments. Construction processes, material quality and
          supervision are not compromised. Metropolitans luxury constructions
          are done by experienced international engineers with strict
          supervision. Our Standard Apartments, Westview, will not be an
          exception. It is to be built with high quality that Metropolitan is
          known for.
        </p>
        <img src="https://www.metropolitanaddis.com/wp-content/uploads/2018/03/Westview-Apartments-Living-Room-300x225.jpg" />

        <h2 className="blog1-blog-title">
          Features of standard homes for sale in Addis Ababa
        </h2>
        <p className="blog1-each-blog">
          Standard apartments offer standard features like Generator, elevator,
          water tank, parking, collective installations, power back-up, and
          secure access in and our
        </p>
        <img
          src="https://www.metropolitanaddis.com/wp-content/uploads/2019/07/wesview-300x55.png"
          style={{ height: "150px" }}
        />

        <h2 className="blog1-blog-title">Amenities & Appliances</h2>

        <p className="blog1-each-blog">
          Standard apartments come with limited but up to standard amenities and
          appliances. Even though amenities like gym & clubhouses aren’t
          available like metropolitan’s luxury houses for sale in Addis Ababa,
          it comes with Kitchen cabinet finishes, floor tiles, water insulation
          features, marble finish, and different fixtures.
        </p>

        <p className="blog1-each-blog">
          Metropolitan real estate PLC, is a real estate company in Ethiopia,
          building quality apartments in Addis Ababa to fulfill the needs for
          houses for sale and rent in Addis Ababa and all of Ethiopia as well
        </p>
      </div>

      {/* form */}
      <div className="blog1-blogform-inner-container">
        <h2 className="blog1-have-question-header">Any Questions For Us?</h2>
        <div className="blog1-form-inputss">
          <input
            type="text"
            name="firstname"
            className="blog1-form-inputt"
            placeholder="Name"
          />
        </div>
        <div className="blog1-form-inputss">
          <input
            type="email"
            name="email"
            className="blog1-form-inputt"
            placeholder="Email"
          />
        </div>
        <div className="blog1-form-inputss">
          <input
            type="text"
            name="lastname"
            className="blog1-form-inputt"
            placeholder="Subject"
          />
        </div>

        <div className="form-inputss">
          <textarea
            type="textarea"
            className="blog1-form-input-text-areaa"
            placeholder="Message"
          />
        </div>

        <button className="blog1-form-input-btnn" type="submit">
          Send
        </button>
      </div>
      <div className="prev-next-arrows">
        <ul className="prev-next-arrow-list">
          <li>
            <div className="prev-arrow">
              <Link
                to="/Blog6"
                style={{ textDecoration: "none", color: "#876718" }}
              >
                <FaArrowLeft className="arrow-icon" />
                &nbsp; Previous
              </Link>
            </div>
          </li>
          <li>
            <div className="next-arrow">
              <Link
                to="/Blog2"
                style={{ textDecoration: "none", color: "#876718" }}
              >
                Next &nbsp;
                <FaArrowRight className="arrow-icon" />
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <div className="blog1-more-explore">
        <h2 className="more-explore-blog1">More To Explore</h2>
      </div>
      <div className="blog1-more-explore-blog">
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <img
              src="https://metropolitanaddis.com/wp-content/uploads/2022/04/5-Things-Homebuyers-Need-to-Know-When-Making-an-Offer-300x200.jpg"
              style={{ width: "400px", height: "300px" }}
              className="luxury-homes-home-images"
            />

            <h3 className="luxury-homes-title">
              4 Things You Should Know When Making An Offer
            </h3>
            <p className="luxury-homes-paragraph">
              When it comes to buying an Apartment in Addis Ababa, Ethiopia
              you’re looking for the perfect place to call home. The issue here
              is in the present market, there aren’t […]
            </p>
            <button className="luxury-homes-read-more-btn">Read More</button>
          </li>
        </ul>
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <img
              src="https://metropolitanaddis.com/wp-content/uploads/2022/04/b-300x200.jpg"
              style={{ width: "400px", height: "300px" }}
              className="luxury-homes-home-images"
            />

            <h3 className="luxury-homes-title">
              2 Reasons Why Postponing A Home Buying Will Cost You
            </h3>
            <p className="luxury-homes-paragraph">
              If you are a homeowner who decided the house is no longer suitable
              for your needs, or a renter who has a strong desire to […]
            </p>
            <button className="luxury-homes-read-more-btn">Read More</button>
          </li>
        </ul>
      </div>
      <div className="blog1-contact-content">
        <h3 className="blog-contact-header">Contact</h3>
        <ul className="blog1-contact">
          <li className="blog1-each-contact">
            <FaPhoneAlt className="blog1-each-contact-first" />
            &nbsp; 9896
          </li>
          <li className="blog1-each-contact">
            <FaPhoneAlt /> &nbsp;&nbsp;+251 973 30 3030
          </li>
          <li className="blog1-each-contact">
            <FaPhoneAlt />
            &nbsp;&nbsp; +251 973 40 40 40
          </li>
          <li className="blog1-each-contact">
            <FaMailBulk />
            &nbsp;&nbsp; info@metropolitanaddis.com
          </li>
          <li className="blog1-each-contact">
            <FaPhoneAlt />
            &nbsp;&nbsp; +1 480 280 2242
          </li>
          <li className="blog1-each-contact">
            <FaClock />
            &nbsp;&nbsp; Mon-Fri 08:30 -17:30 EAT Sat 09:30 -13:30 EAT
          </li>
          <li className="blog1-each-contact">
            <FaLocationArrow /> &nbsp;&nbsp;Bole, Around Friendship Hotel,
            Infront of Istanbul Restaurant Addis Ababa, Ethiopia.
          </li>
        </ul>
      </div>

      <div className="blog-footer">
        <AboutUsBlogFooter />
      </div>
    </div>
  );
};

export default Blog1;
