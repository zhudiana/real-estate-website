import { Link } from "react-router-dom";
import "./AboutUsBlog.css";
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
import AboutUsBlogFooter from "./Footer/AboutUsBlogFooter";

const Blog5 = () => {
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
            When hunting apartment at a distance like a champ, consider this
            factors
          </h1>
          <span
            className="blog1-date
          "
          >
            March 17, 2022
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
          src="https://metropolitanaddis.com/wp-content/uploads/2022/03/APa.png"
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
          Know-how when you have got to buy an Apartment from across the
          country, start with a winning strategy. Searching for an Apartment
          locally is not without its difficulties. Add hundreds or even
          thousands of miles to the equation, and it becomes infinitely more
          complicated. Though long-distance Apartment hunting has its unique
          challenges, <b>it’s not impossible</b>. It’s never been easier to buy
          an Apartment remotely with the right Real estate company and the
          convenience of modern technology.
        </p>
        <p className="blog1-each-blog">
          <Link to="/" style={{ color: "#1b375d" }}>
            <b>Metropolitan Real Estate</b>
          </Link>{" "}
          provides you with a consultation service if you are still confused and
          unsure about purchasing an apartment while you are outside of
          Ethiopia. Here are a few <b>critical factors</b> to keep in mind when
          you find yourself in an Apartment search from afar.
        </p>
        <h2 className="blog1-blog-title">1. Do your investigation</h2>
        <p className="blog1-each-blog">
          When it comes to long-distance Apartment shopping, the Internet is
          your friend. Though nothing beats seeing the neighborhood in person,
          <b>researching commute</b> times to work, crime rates in the region,
          and, most importantly, how the schools rank. Even if you don’t have
          children or don’t want to have children, understanding the quality of
          the schools is vital for resale.
        </p>
        <h2 className="blog1-blog-title">2. Create a trip budget</h2>
        <p className="blog1-each-blog">
          People advise long-distance Apartment hunters to prepare and plan,
          especially for <b>last-minute travel</b>. Be flexible and have a few
          thousand dollars set aside for plane tickets and a hotel room because
          you will need to travel back and forth.
        </p>
        <h2 className="blog1-blog-title">3. Know what you want</h2>
        <p className="blog1-each-blog">
          When looking for an apartment, you should always have a running list
          of attributes in mind, but this is highly relevant when buying from a
          distance. Knowing exactly what you want out of an Apartment and
          location allows you to narrow down neighborhoods and Apartments more
          easily, and assist you in making an <b>offer quickly</b>, which is
          especially important in a fast-moving market. Metropolitan Real estate
          Apartments have a variety of features that helps you differentiate
          <b> basic benefits</b> from others so that you settle for the best.
        </p>
        <h2 className="blog1-blog-title">
          4. Overcome remote Apartment-buyer anxieties
        </h2>
        <p className="blog1-each-blog">
          When looking for an apartment, you should always have a running list
          of attributes in mind, but this is highly relevant when buying from a
          distance. Knowing exactly what you want out of an Apartment and
          location allows you to narrow down neighborhoods and Apartments more
          easily, and assist you in making an <b>offer quickly</b>, which is
          especially important in a fast-moving market. Metropolitan Real estate
          Apartments have a variety of features that helps you differentiate
          <b> basic benefits</b> from others so that you settle for the best.
        </p>
        <h4 className="blog1-blog-title2">BOTTOM LINE</h4>
        <p className="blog1-each-blog">
          As <b>Apartments</b> prices are rising and more buyers are finding
          each other competing in bidding wars, it is more important than ever
          to make sure your plan includes budgeting for closing costs.{" "}
          <b>
            <Link to="/" style={{ color: "#1b375d" }}>
              Metropolitan Real estate
            </Link>
          </b>{" "}
          is always ready to make sure you have everything you need to land your
          dream Apartment.
        </p>
        <p className="blog1-each-blog">
          Let us connect today, on{" "}
          <b>
            <Link to="/" style={{ color: "#1b375d" }}>
              Metropolitan Real estate
            </Link>
          </b>
          , which has multiple ongoing projects such as Metropolitan{" "}
          <b>
            <Link to="" style={{ color: "#1b375d" }}>
              Central Tower Luxury Apartments
            </Link>
          </b>{" "}
          are around AU headquarters. Metropolitan{" "}
          <b>
            <Link to="" style={{ color: "#1b375d" }}>
              Westview Standard Apartments
            </Link>
          </b>
          is located at Total Soset Kuter Mazoriya and the{" "}
          <b>Metropolitan Residence</b> located around Bole Main Road, In front
          of Mega Building. contact us with the Ethiopian office: +251973404040
          and the USA office: +1480 280 2242.
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
                to="/Blog4"
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
                to="/Blog6"
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

export default Blog5;
