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
            Types Of Apartments In Ethiopia
          </h1>
          <span
            className="blog1-date
          "
          >
            September 2, 2018
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
          src="https://metropolitanaddis.com/wp-content/uploads/2019/07/294A8540-2000x1333.jpg"
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
          An apartment is a living space in residential real estate building.
          The living space may consist of one room or a set of rooms, and it may
          be one of a few or several such spaces in the building. In other
          words, whether the inhabitants of the space rent or own it, it’s still
          an apartment. This definition includes co-ops and condos.
        </p>
        <h2 className="blog1-blog-title">Classic Six Apartment</h2>
        <p className="blog1-each-blog">
          A Classic 6 apartment consists of a living room, a formal dining room,
          two full bedrooms, a separate kitchen, two full bathrooms and a third,
          smaller bedroom, usually referred to as a “maid’s room,” located off
          the kitchen. This room has a full or half bath of its own.
        </p>
        <h2 className="blog1-blog-title">Classic Seven / Eight Apartment</h2>
        <p className="blog1-each-blog">
          A Classic 7 or Classic 8 Apartment is the same as a Classic 6, with
          the addition of one or two more bedrooms. While a Classic Six is one
          of the hardest to find, Classic Seven and Classic Eight apartments are
          even rarer. A great example would Metropolitan’s Sarbet Gabriel
          Apartment in Ethiopia. The units consist 5 bedrooms, 3.5 bathrooms
          resting on a gracious 220 Sq m or, 3 bedrooms, 2 bathrooms resting on
          180 Sqm
        </p>
        <h2 className="blog1-blog-title">Convertible Apartment</h2>
        <p className="blog1-each-blog">
          In a convertible apartment, the apartment layout can accommodate
          adding another bedroom via the installation of a temporary pressurized
          wall, usually in the living room, or by adding a door to a separate
          dining room. A Convertible 2 implies a one bedroom that has been or
          can be, changed to a two bedroom.
        </p>
        <h2 className="blog1-blog-title">Corporate Apartment</h2>
        <p className="blog1-each-blog">
          A corporate apartment, also known as a serviced apartment, refers to a
          fully-furnished unit, rented for short term. And frequent users of
          this are business travelers looking for an alternative to a hotel
          looking for the better environments of an apartment.
        </p>
        <h2 className="blog1-blog-title">Studio Apartment</h2>

        <p className="blog1-each-blog">
          A studio apartment is basically one room with a full bathroom and a
          kitchen. It may have an alcove for dressing or dining. There are
          different types of studio apartments. Like; Convertible studio: a
          studio large enough to be able to create a walled-off space for
          sleeping, Alcove studio: an area no more than one hundred square feet
          located off of the living space(sometimes referred to as a half room)
        </p>
        <h2 className="blog1-blog-title">Garden Apartment</h2>
        <p className="blog1-each-blog">
          Garden apartments can refer to two types of homes. The first is a
          cluster of low-rise buildings with open lawns, landscaping, and
          pathways. The other definition of the garden apartment is one on the
          ground floor that offers direct access to a backyard or garden.
        </p>
        <h2 className="blog1-blog-title">Loft Apartment</h2>
        <p className="blog1-each-blog">
          one large room, usually located in a building that was converted from
          commercial to residential, with really high ceilings and windows. A
          loft can present with anything from a studio to three bedrooms,
          although this is usually specified at the outset
        </p>
        <h2 className="blog1-blog-title">Luxury Apartments</h2>
        <p className="blog1-each-blog">
          Luxury apartments can mean slightly different things in different
          markets; however, in general, they refer to apartments with a higher
          level of finishes, amenities, and services (and a higher price).
        </p>
        <h2 className="blog1-blog-title">Penthouse Apartment</h2>
        <p className="blog1-each-blog">
          The strict, architectural definition of a penthouse apartment is an
          apartment actually built onto the rooftop, with setbacks providing
          terraces with spectacular views. However, some buildings also
          advertise penthouse apartments that are simply on one of the uppermost
          floors.
        </p>
        <p className="blog1-each-blog">
          In our newest luxury apartment for sale, there are various types and
          sizes of apartments available for you. There are 15 units available
          suited for a different lifestyle
        </p>
        <p className="blog1-each-blog">
          Metropolitan real estate PLC, is an American company, building quality
          homes in Ethiopia to fulfill the needs of luxury apartments in
          ethiopia
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
