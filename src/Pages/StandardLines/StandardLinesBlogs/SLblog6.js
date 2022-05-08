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
            Types Of Parking Spaces In Luxury Apartments
          </h1>
          <span
            className="blog1-date
          "
          >
            July 3, 2018
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
          src="https://metropolitanaddis.com/wp-content/uploads/2019/08/park.jpg"
          style={{ height: "500px", width: "600px" }}
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
        <h2 className="blog1-blog-title">Parking lot</h2>
        <p className="blog1-each-blog">
          A parking lot is an area that is assigned for parking. Normally, the
          parking spaces are marked on the ground with white or yellow lines
          that form squares that each fit one car.
        </p>

        <h2 className="blog1-blog-title">Parking garage</h2>
        <p className="blog1-each-blog">
          A parking garage is also called car park, parking structure, parking
          building, parking ramp, parkade or parking deck.
        </p>
        <h2 className="blog1-blog-title">Single level parking garage</h2>
        <p className="blog1-each-blog">
          A single level parking garage is a parking garage that only has only
          one floor.
        </p>
        <h2 className="blog1-blog-title">
          Multilevel or multi-storey parking garage
        </h2>

        <p className="blog1-each-blog">
          Multilevel or multi-storey parking garages are parking garages that
          have multiple floors to park at. The design of a multilevel parking
          garage can be very different. The most common design is a garage with
          ramps to move from one level to another. Less common are parking
          garages that use lifts to go from level to level. Then there are also
          parking garages with robotic systems that move cars from one level to
          another. The floors of the parking garage can either go up, down or
          both.
        </p>
        <h2 className="blog1-blog-title">Underground parking garage</h2>
        <p className="blog1-each-blog">
          An underground parking garage has levels below the surface and none
          above ground. Most often underground parking garages are located in
          city centers where there’s not much space available to build a parking
          facility, but there is a big need to build one.
        </p>
        <h2 className="blog1-blog-title"> Automated parking system (APS)</h2>
        <p className="blog1-each-blog">
          Automotion Parking Systems builds custom automated parking garages.
          The systems are designed to work in virtually any space. Platforms
          move cars between different levels and spaces efficiently.
        </p>

        <p className="blog1-each-blog">
          APS is a mechanical system designed to minimize the area and/or volume
          required for parking cars. Like a multi-story parking garage, an APS
          provides parking for cars on multiple levels stacked vertically to
          maximize the number of parking spaces while minimizing land usage. The
          APS, however, utilizes a mechanical system to transport cars to and
          from parking spaces (rather than the driver) in order to eliminate
          much of the space wasted in a multi-story parking garage.
        </p>
        <p className="blog1-each-blog">
          An underground parking garage is available in our new luxury
          apartments for sale, Westview Apartments.
        </p>
        <p className="blog1-each-blog">
          Metropolitan’s Westview Apartments is one of the most luxurious
          residential real estate projects of the region. It combines the
          high-quality standards with unique architecture, best material
          selection, and strictly supervised construction. Westview is a perfect
          fit for those looking for western quality, comfort and security.
        </p>
        <p className="blog1-each-blog">
          Site Supervision is done by Turkish Architects and Engineers. Quality
          Construction by International standards and; architectural,
          structural, mechanical, and electrical design are from İstanbul made
          with European standards
        </p>
        <p className="blog1-each-blog">
          Do not miss out on this opportunity.{" "}
          <Link to="/ContactUs">Contact us</Link> for more information.
        </p>
        <p className="blog1-each-blog">
          Metropolitan real estate PLC, is an American company, building quality
          homes in Ethiopia to fulfill the needs of luxury real estate for sale
          and rent in Addis Ababa and all of Ethiopia as well
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
