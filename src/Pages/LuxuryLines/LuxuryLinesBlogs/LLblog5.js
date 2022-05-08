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
            The Luxurious Living Room Of Metropolitan
          </h1>
          <span
            className="blog1-date
          "
          >
            September 10, 2019
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
          src="https://metropolitanaddis.com/wp-content/uploads/2019/09/Sarbet-living.jpg"
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
          Lying on a spacious area, Metropolitan brings you state of the art
          luxury living rooms you can enjoy with your family. Metropolitan
          believes that great lighting, decent theme, and luxurious design
          brings out the elegance of every living room. So, each one of our
          living rooms have a well-thought arrangement that peacefully blends in
          with all the accessories in the living room.
        </p>
        <p className="blog1-each-blog">
          Let us give you a tour of one of our luxurious living room in Sarbet
          Gabriel Luxury apartment which lies on a 40 sq. meter area.
        </p>
        <p className="blog1-each-blog">
          This living room built by Metropolitan is well lit by more than 50
          light bulbs which are situated in unique and different ways on the
          ceiling. They have small circular bulbs surrounding the part of the
          living room where the sofa and TV set sits.
        </p>

        <p className="blog1-each-blog">
          There are also bulbs hidden in the gypsum work which brings out a
          magnificent light shadowing on the ceiling. At the center hangs a
          wonderful circular black chandelier, the same as in the kitchen, which
          gives the room a classy look. To make the management of all these
          blubs easier, multiple light switches located around 10 different
          places are installed inside the living room. Each can control
          different parts of the light arrangement so you can light the room to
          your preferred level of dimness.
        </p>
        <p className="blog1-each-blog">
          The entire living room has an additional gypsum work made to the
          finest precision. The smoothness of the work on the ceiling is very
          evident under the bright lights on the ceiling. The TV area is also
          decorated with simplistic gypsum makeup.
        </p>

        <p className="blog1-each-blog">
          The colors chosen to paint the living room, amazingly harmonize with
          one another and it is a feast to the eye. The room is intentionally
          not painted the same color so as to give it a contemporary look. Half
          of the room is painted with a darker shade of sky blue and the other
          half of it is painted with a bright sky-blue color. The ceiling and
          some of the gypsum works on the wall are painted white and the
          combination gives an easy and attractive look.
        </p>

        <p className="blog1-each-blog">
          The ground is made of expensive, high-end, laminated flooring. It is
          not real wood but it is more durable than real wood. The floor gives
          the room a luxurious look together with the hand-picked furniture
          making its stand on it.
        </p>

        <p className="blog1-each-blog">
          There are top-notch windows surrounding the whole living room which
          open in two ways: from the top down, and from left to right. This
          ensures child safety and the amount of air you want to get into the
          apartment. The windows are sealed with the right high-quality
          materials and are themselves double-paned. A double-pane window is a
          window that has two panes of glass set into each individual frame. The
          two glass panes have a small space between them, creating an air
          pocket made to better insulate a room. This air pocket prevents the
          temperature of the air outside your home from affecting the
          temperature of the air inside your home.
        </p>

        <p className="blog1-each-blog">
          Above the window frames, there is a gypsum work that hides the hooks
          of the curtains which you can hang to cover the windows. For any
          visitor which looks at the curtains, the curtains flow smoothly from
          the top to the ground with no wrinkles on top of them.
        </p>
        <p className="blog1-each-blog">
          There is a very nice balcony outside which is a meter and a half wide
          and five meters long. Here you can enjoy the cool breezes of air and
          the view. The railings are clear chrome railings, as in all of the
          apartments, which fits the aesthetics of the balcony.
        </p>
        <p className="blog1-each-blog">
          Metropolitan real estate PLC, is an American company, building quality
          homes in Ethiopia to fulfill the needs of luxury house for sale in
          Addis Ababa and all of Ethiopia as well
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
