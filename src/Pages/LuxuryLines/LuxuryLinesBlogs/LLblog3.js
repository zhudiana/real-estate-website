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
            Bathrooms Of Metropolitan Sarbet Gabriel Apartments
          </h1>
          <span
            className="blog1-date
          "
          >
            September 17, 2019
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
          src="https://metropolitanaddis.com/wp-content/uploads/2018/01/27a20f056588cad.png"
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
          Did you know the average person will spend at least 1.5 years of their
          life, in the bathroom? The bathroom is more than just a maintenance
          room for life where we, often-times, both start the day as well as end
          the day. For many, their best ideas come to them in the shower. It’s
          that sacred space where you can also rehearse that big presentation
          you are giving later that day or even to prepare for your job
          interview. There is no going around to the importance of the bathroom
          and Metropolitan’s Sarbet Gabriel luxury Apartments has the most
          amazing one in town.
        </p>
        <p className="blog1-each-blog">
          It starts from the ceramic material of which the room is built. 30cm
          by 90cm area, and rectified edges, there is only 1 mm graph lining
          between each ceramics. The material looks like regular marble but it’s
          not in order to avoid the heavyweight and additional cost of marble.
        </p>

        <p className="blog1-each-blog">
          Metropolitan uses green gypsum boarding for all of its construction of
          bathrooms. It is a water-resistant gypsum board that has been in the
          industry for decades, and one of the more reliable gypsum board when
          it comes to durability. The board is much thicker than the standard
          drywall, it comes with a measurement of about half inch and 5/8
          thickness compared to quarter-inch and half-inch thickness. The wax
          that is filled on the board is what makes it thicker than the standard
          board.
        </p>
        <p className="blog1-each-blog">
          The mirror in the bathroom is not glued to the wall like other
          bathrooms in most places, rather it is put 3 cm forward from the wall
          in order to give it a better feeling and look. There is an additional
          light fixture above the mirror and it is fixed so well that you don’t
          see any cable or unnecessary stuff coming out. Also, all the towel
          hangers and soft tissue hangers around the room are very well built.
        </p>

        <p className="blog1-each-blog">
          It doesn’t matter how good of a material you use if your workmanship
          is not right. The bathroom has a well-built sink and a well-crafted
          cabinet underneath. Both the sink and the cabinet are built in the
          wall. Both of them are of the brands NDF and Hafele, German and UK
          brands.
        </p>
        <img src="https://metropolitanaddis.com/wp-content/uploads/2018/02/IMG_1551.jpg" />

        <p className="blog1-each-blog">
          When we come to the shower space, there is a nice square space, which
          is kind of bored into the wall, where you can keep bottles of shampoos
          and other bathroom accessories. The shower itself is made from
          Materials in Turkey and it also has a facet fixed below. The ground
          underneath has good isolation underneath so that water doesn’t drip
          off to the rooms in the lower floor and above the isolation layer is a
          natural travertine flooring floor from Turkey. There is also a
          high-end rectangular grill drainage system laid on the floor.
        </p>

        <p className="blog1-each-blog">
          The Toilet is also built in the wall and it has a nice modern look to
          it. The tanker is behind the wall and there are two types of triggers
          for flushing: one for a big flush of water and the other for a smaller
          flush.
        </p>

        <p className="blog1-each-blog">
          The bathrooms of Metro have a classic look and are quite eye-catching.
          Built with the right materials, and a good choice of aesthetics, the
          bathrooms surely define luxurious bathrooms.
        </p>
        <p className="blog1-each-blog">
          Metropolitan real estate PLC, is an American company, building quality
          homes in Ethiopia to fulfill the needs of luxury real estate for sale
          in Addis Ababa and all of Ethiopia as well
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
