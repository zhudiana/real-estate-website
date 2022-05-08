import { Link } from "react-router-dom";
// import "./AboutUsBlog.css";
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
            Metropolitan Real Estate: Fight Against the COVID-19 Pandemic
          </h1>
          <span
            className="blog1-date
          "
          >
            April 16, 2020
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
          src="https://metropolitanaddis.com/wp-content/uploads/2020/04/Kco6QKr6RemIQYj9qK0P-2000x1328.png"
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
          In COVID-19 Pandemic devastating and difficult time, it is crucial to
          not only stay safe by looking after ourselves but to also look after
          one another. We only got each other and no one else so it is extremely
          important for any individual to be there for his/her community and
          fellow Ethiopian comrades. We Ethiopians have a culture of helping and
          supporting one another in times of need and despair. Therefore, let’s
          all work together to live up to this and get through this tough time.
        </p>
        <p className="blog1-each-blog">
          Metropolitan real estate, which offers luxurious yet modern homes in
          the heart of Addis Ababa, have always been thinking high and beyond
          and has been using this opportunity to provide for its community. As
          of April 15th 2020, Metropolitan real estate has given away different
          materials & equipments like that of food and cleaning products to bole
          sub-city to enable people to protect them themselves and maintain a
          good hygiene.
        </p>

        <p className="blog1-each-blog">
          On the first round, the food and hygiene products our company has
          donated is estimated nearly birr 100,000.00 worth of goods which were
          given away. Making this pandemic a priority, the goods metropolitan
          real estate has presented include rice, macaroni, oil, soap and big
          water containers for the people living in bole sub-city.
        </p>
        <p className="blog1-each-blog">
          On the second round, metropolitan real estate has promised to provide
          whatever is needed for our people based on the protection mechanism
          decided upon by the sub-city as well as the city council of Addis
          Ababa. Furthermore, our company has claimed to also to help out in
          project sites found in other sub-cities and provide the same support.
        </p>

        <p className="blog1-each-blog">
          Just like we share “one gebeta (One meal)”, we should all be able to
          feed one another so no one does sleep with an empty stomach and
          everyone has access to basic needs. This will not only help our
          country fight this pandemic but also helps our people as well as our
          country to grow and prosper. There are lots of people who lost their
          jobs and have no source of income but most of all there are
          economically weak and disabled people. Hence, bole sub-city
          communication affairs office urges other companies and organizations
          like that of us to take part in such type of activities and provide
          what they possibly can for the respective economically weak and
          disabled people existing in their area and fulfill their duty as
          citizens. It doesn’t matter if you present the financial aid in cash
          or in kind. What’s expected of you is to just give and nothing else.
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

export default Blog1;
