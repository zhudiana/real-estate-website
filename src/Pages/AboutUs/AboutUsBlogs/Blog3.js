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

const Blog3 = () => {
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
            What are The Benefits of Owning a Second Apartment
          </h1>
          <span
            className="blog1-date
          "
          >
            April 20, 2022
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
          src="https://metropolitanaddis.com/wp-content/uploads/2022/04/Blog-22.jpg"
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
          Numerous things have changed in the last few years, including the real
          estate market. One consequence is a greater desire to purchase a
          second apartment. According to the recent Luxury Market Report from
          Luxury Home Marketing:{" "}
          <b>
            “As trends such as remote working took hold in 2021, so too did the
            flexibility of relocating as well as the growth of second
            homeownership.”
          </b>{" "}
          This might be because the pandemic has affected our perceptions of our
          apartments. Where we live has become, more than ever, our safe space
          and our getaway. With the rise of remote work, more individuals are
          rethinking where they want to live and purchasing second apartments to
          provide them more freedom. If you fall into such group, here are a few
          suggestions.
        </p>
        <h2 className="blog1-blog-title">Enjoy a Change in Scenery</h2>
        <p className="blog1-each-blog">
          When you have another Apartment, you may switch between homes whenever
          you want a change of scenery. You have numerous alternatives with two
          homes. Being able to move between homes based on the location that
          suits you best at that point gives you more flexibility, diversity,
          and happiness.
        </p>
        <h2 className="blog1-blog-title">Build Your Wealth Faster</h2>
        <p className="blog1-each-blog">
          You may have heard that home equity is skyrocketing in Addis Ababa,
          thanks to ongoing home price appreciation. With home prices expected
          to continue to rise, if you buy a second Apartment, you could take
          advantage of the increasing equity in both properties to build your
          wealth (and net worth) even faster.{" "}
          <Link to="/">
            <b>Metropolitan Real Estate</b>
          </Link>{" "}
          has multiple Apartments for sale with a high return of investment
          built-in quality.
        </p>
        <h2 className="blog1-blog-title">Lock in Your Expenses</h2>
        <p className="blog1-each-blog">
          If you want to stabilize your housing costs over the long term, we
          recommend buying a second apartment today. If you’re approaching
          retirement or are looking to use your second home as your permanent
          residence in the future, buying that Apartment now with today’s rate
          and price may be a good financial decision. So no matter what happens
          to rates and prices in the coming years, your cost of owning an
          apartment will be fixed for the next 15-30 years.{" "}
          <Link to="/">
            <b>Metropolitan Real Estate</b>
          </Link>{" "}
          has multiple Apartments for sale with a{" "}
          <b>high return of investment</b> built-in quality.
        </p>
        <h4 className="blog1-blog-title2">BOTTOM LINE</h4>
        <p className="blog1-each-blog">
          Having multiple Apartments has considerable benefits. If owning a
          second Apartment is something you’re interested in, contact{" "}
          <Link to="/">
            <b>Metropolitan Real Estate</b>
          </Link>{" "}
          to explore your options, discuss the benefits, and take the next step
          to start your home search.
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
                to="/Blog2"
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
                to="/Blog4"
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

export default Blog3;
