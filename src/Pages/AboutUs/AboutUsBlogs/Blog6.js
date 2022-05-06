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

const Blog6 = () => {
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
            How to Afford Buying an Apartment in Ethiopia
          </h1>
          <span
            className="blog1-date
          "
          >
            March 12, 2022
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
          src="https://metropolitanaddis.com/wp-content/uploads/2022/03/affod.png"
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
          Apartment buying hurdles exist — but research, creativity, and
          flexibility will help you clear them. Apartment buyers today face
          tough challenges. Apartment prices have soared; money doesn’t go as
          far as it once did and rent is more expensive than in the past. How
          are people today making such a <b>large purchase</b> despite these
          hurdles? With more flexibility and a bit of financing creativity,
          today’s buyers are finding ways to achieve <b>Apartment ownership</b>.
        </p>

        <h2 className="blog1-blog-title">
          1. Know your options and credit score
        </h2>
        <p className="blog1-each-blog">
          The first step to knowing if you can afford an{" "}
          <b>Apartment in Ethiopia</b>
          is figuring out what financing options are available to you, including
          what opportunities you’re eligible for and how much you need and can
          afford to put down upfront. Learning the minimum requirements required
          by buyers and understanding your <b>credit score</b> are essential
          starting points.
        </p>
        <p className="blog1-each-blog">
          Many Apartment shoppers aren’t sure how much they have to put down on,
          what the seller-required minimum down payment will be, or what
          programs are available to help with down payments. Before buyers start
          to think about saving for an Apartment, they should know what their
          <b>financial resources</b> are and if they are eligible to buy.
        </p>
        <h2 className="blog1-blog-title">2. Make enough money to save</h2>
        <p className="blog1-each-blog">
          With fewer resources to pull from than their older, wealthier
          counterparts, renters wanting to buy face tough financial headwinds.
          While <b>households purchasing</b> Apartments are more likely to have
          two incomes than renter households (and thus a higher median household
          income combined), even two-income households struggle to afford to buy
          in competitive markets.
        </p>
        <h2 className="blog1-blog-title">3. Save enough cash</h2>
        <p className="blog1-each-blog">
          One of the most daunting parts of home buying? The down payment.
          Buyers are also getting creative about piecing together a down payment
          from multiple sources. Buyers who get a <b>mortgage</b> also get help
          in the form of gifts or loans from friends and family to come up with
          a down payment.
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

export default Blog6;
