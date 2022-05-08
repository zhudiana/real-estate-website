import { Link } from "react-router-dom";
import "./LuxuryLinesBlogs.css";
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
            How to buy an apartment in Addis Ababa, while living abroad?
          </h1>
          <span
            className="blog1-date
          "
          >
            September 3, 2020
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
          src="https://metropolitanaddis.com/wp-content/uploads/2020/09/1-3.jpg"
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
          Most Ethiopian Diasporas desire to own a property in Addis Ababa.
          While living abroad, you may have different reasons to buy a property
          in Addis Ababa for many reasons, real estate is a desirable form of
          property to own: Whether it’s as an investment, for a loved one, a
          pension, or simply somewhere to hang your hat when you retire. Here
          are the things you need to consider before buying an apartment in
          Addis Ababa.
        </p>
        <h2 className="blog1-blog-title">
          Be reasonable and look for long-term profitability
        </h2>
        <p className="blog1-each-blog">
          When you think of buying an apartment, your focus should be on long
          term profitability. Having an investment property, who doesn’t like to
          earn 4000 dollars per month in Addis Ababa? Buying your dream
          apartments from Metropolitan Real Estate in Addis Ababa is much easier
          than you can imagine. First thing first you have to decide which type
          of apartments you are looking for; be it luxury apartments
          Metropolitan Bole Tower Luxury Apartments or standard apartments
          Westview Standard Apartments don’t worry, we got your back.
        </p>
        <img src="https://metropolitanaddis.com/wp-content/uploads/2020/06/Cam__3__1_-removebg-preview-1.png" />
        <p className="blog1-each-blog">
          Metropolitan Real Estate – Westview Standard Apartments
        </p>
        <h2 className="blog1-blog-title">
          Ask for detail information before you buy apartments
        </h2>
        <p className="blog1-each-blog">
          You are worried that reality and your expectation might not match? How
          about your relatives or a good friend visit the site and showrooms of
          the real estate you want to buy? In Metropolitan Real Estate, we
          arrange a site visit for any person of your choice with our own
          transportation so that it will help you make a better decision with
          your family.
        </p>
        <img src="https://metropolitanaddis.com/wp-content/uploads/2020/09/1-3.jpg" />
        <p className="blog1-each-blog">
          Construction at Metropolitan Real Estate, Bole Tower Luxury
          Apartments, a great investment opportunity at a premium location in
          Addis Ababa
        </p>
        <h2 className="blog1-blog-title">
          Understand the payment plan details of the Apartments
        </h2>

        <p className="blog1-each-blog">
          Understanding the payment plan is an important step in buying an
          apartment. Commonly here in Addis Ababa, there are 2 types of payments
          that are common in Ethiopia. Down-payment plan: It is the most
          conventional scheme where you have to pay up to 30% upfront, called
          down payment, at the time of reservation and thereafter 70% of the
          total cost within some time period as the construction progress grows.
        </p>

        <p className="blog1-each-blog">
          <b>Construction-linked plans:</b> As the name suggests, the payments
          under this plan are linked to the construction stages. You have to pay
          around 10%-30% of the purchase price within 2-3 days from booking and
          the balance in installments on completing different construction
          milestones.
        </p>

        <p className="blog1-each-blog">
          Our payment plan is <b>Construction-linked plans</b>. Based on our
          project progress. In addition to this, if you prefer to pay in US
          Dollars, you will get a 15% discount from the total payment price.
        </p>

        <p className="blog1-each-blog">
          If you’d like to <Link to="">find out more about our apartments</Link>{" "}
          we are here to help you. Just fill out the form below and we will get
          in touch with you promptly.
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
