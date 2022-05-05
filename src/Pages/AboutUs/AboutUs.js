import { Link, Route, Routes } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import logo from "../../Images/logo.png";
import "../Pages.css";
import "./AboutUs.css";
import Footer2 from "../../Components/Footer/Footer2/Footer2";
import { Carousel } from "react-bootstrap";
import CountUp from "react-countup";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaCalendarAlt,
  FaUsers,
  FaHome,
  FaBuilding,
  FaCheck,
  FaClock,
} from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Main-container">
      <div className="Navigation-container">
        <NavBar />
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo-each" />
        </Link>
      </div>

      <div className="AboutUs-body-one-container">
        <h1 className="AboutUs-body-one-header">About Metropolitan</h1>
        <hr className="line" />
        <div className="AboutUs-body-one">
          <p className="AboutUs-body-one-body">
            Metropolitan is an established property development company focused
            on creating homes packed with functionality, convenience and comfort
            for today’s modern lifestyle seeker and savvy investor.
          </p>
          <p className="AboutUs-body-one-body">
            The innovation-led, future-focused Metropolitan Real Estate
            established in 1995, the company is responsible for more than 450
            large-scale projects worldwide. Metropolitan Real Estate has been
            operating in Ethiopia since 2016 G.C
          </p>
          <p className="AboutUs-body-one-body">
            Metropolitan Real Estate is introducing world-class luxury high-end
            apartments to Addis Ababa’s key areas. In doing so, we strive to
            fulfill the needs of luxury living in Ethiopia and provide long term
            profitable investment opportunities in real estate.
          </p>
        </div>
      </div>

      <div className="AboutUs-body-two-container">
        <div className="AboutUs-body-two-header-container">
          <h3 className="AboutUs-body-two-header">OUR VISION AND MISSION</h3>
        </div>
        <div className="AboutUs-Column-lists">
          <ul className="column-list">
            <li className="column-each-list-image">
              <img
                data-aos="fade-up"
                src="https://metropolitanaddis.com/wp-content/uploads/2021/12/355-3551250_goals-png-clipart-goal-icon-transparent-png-150x150.png"
                className="image-one"
              />
            </li>
            <p className="column-paragraph">
              Our Mission is to gain permanent habitat for urban life by
              designing secure, high-quality, and cost-effective construction
              projects together with our customers, employees, and partners.
            </p>
          </ul>
          <ul className="column-list">
            <li className="column-each-list-image">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_130,h_118/https://metropolitanaddis.com/wp-content/uploads/2021/11/iconPicture1.png"
                data-aos="fade-up"
              />
            </li>
            <p className="column-paragraph">
              Our Vision is to become an innovative company providing
              customer-focused, secure, and quality services with our
              experienced human resources.
            </p>
          </ul>
        </div>
      </div>

      <div className="in-between">
        <div className="in-between-header">
          <h3 className="in-between-header-text">
            METROPOLITAN BY THE NUMBERS
          </h3>
          <div className="icons-listed-in-between">
            <div className="icon-in-between">
              <FaCalendarAlt className="icon-itself" />
              <h3>
                <CountUp end={26} />
              </h3>
              <p className="below-icon-text">Years Experience</p>
            </div>
            <div className="icon-in-between">
              <FaUsers className="icon-itself" />
              <h3>
                {" "}
                <CountUp end={4500} />
              </h3>
              <p className="below-icon-text">Employees</p>
            </div>
            <div className="icon-in-between">
              <FaHome className="icon-itself" />
              <h3>
                <CountUp end={1} />
              </h3>
              <p className="below-icon-text">Million Sq.m. Luxury Housing</p>
            </div>
            <div className="icon-in-between">
              <FaBuilding className="icon-itself" />
              <h3>
                <CountUp end={600} />
              </h3>
              <p className="below-icon-text">Thousand Sq.m Malls & Office</p>
            </div>
            <div className="icon-in-between">
              <FaCheck className="icon-itself" />
              <h3>
                <CountUp end={450} />+
              </h3>
              <p className="below-icon-text">Completed Project</p>
            </div>
            <div className="icon-in-between">
              <FaClock className="icon-itself" />
              <h3>
                <CountUp end={9} />
              </h3>
              <p className="below-icon-text">Million Man Hours</p>
            </div>
          </div>
        </div>
      </div>

      <div className="AboutUs-body-three-container">
        <div className="AboutUs-body-three-header-container">
          <h2 className="AboutUs-body-three-header">
            WHAT MAKES METROPOLITAN UNIQUE
          </h2>
        </div>
        <div className="AboutUs-Column-lists2">
          <ul className="column-list2">
            <li className="column-each-list2">
              <img
                src="https://metropolitanaddis.com/wp-content/uploads/2021/12/time.png"
                data-aos="fade-up"
              />
            </li>
            <h4>On-Time Delivery</h4>
          </ul>
          <ul className="column-list2">
            <li className="column-each-list2">
              <img
                src="https://metropolitanaddis.com/wp-content/uploads/2021/11/quality.png"
                data-aos="fade-up"
              />
            </li>
            <h4>Quality</h4>
          </ul>
          <ul className="column-list2">
            <li className="column-each-list2">
              <img
                src="https://metropolitanaddis.com/wp-content/uploads/2021/11/home.png"
                data-aos="fade-up"
              />
            </li>
            <h4>Location</h4>
          </ul>
          <ul className="column-list2">
            <li className="column-each-list2">
              <img
                src="https://metropolitanaddis.com/wp-content/uploads/2021/11/ful.png"
                data-aos="fade-up"
              />
            </li>
            <h4>Full features and facilities</h4>
          </ul>
          <ul className="column-list2">
            <li className="column-each-list2">
              <img
                src="https://metropolitanaddis.com/wp-content/uploads/2021/11/high.png"
                data-aos="fade-up"
              />
            </li>
            <h4>High return on investment</h4>
          </ul>
        </div>
      </div>

      {/* slider part */}
      <h2 className="slider-title">METROPOLITAN MILESTONES</h2>
      <div className="carousel">
        <Carousel className="carousel-section">
          <Carousel.Item>
            <ul className="carousel-lists">
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  We built our first five-star hotel in Novotel, Istanbul. In
                  that same year, our Luxury apartment construction was
                  completed in Evidea, Istanbul.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2006</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  Our first luxury villa sites were constructed in Cubuklu
                  valley houses in Istanbul, Turkey.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2007</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  After completion of several projects in Turkey, we expanded
                  our services to USA and Ethiopia. In 2009, Metropolitan’s
                  first luxury villa project in Arizona, USA was completed.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2008</h3>
                </li>
              </div>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul className="carousel-lists">
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  Over a few years we operated in hundreds of projects. In 2014
                  we celebrated 400 properties built/rebuilt in USA alone. We
                  also continued on developing in Turkey.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2010</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  Within twelve months, our first project was completed. The
                  following year, our second real estate project in Ethiopia
                  commenced.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2012</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  In 2019, We launched another luxury apartment project in Addis
                  Ababa, Bole. This project, Metropolitan Tower, is a modern
                  apartment built with luxury standards.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2013</h3>
                </li>
              </div>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul className="carousel-lists">
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  Now In addition to Metropolitan Tower, Metropolitan has
                  launched a Westview Standard Apartments for sale located at ‘3
                  Kutr mazoria’.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2014</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  Central Tower is a unique project located in the heart of
                  Addis Ababa with its proximity to the AU headquarters, major
                  roads, great city view.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2015</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  We built our first five-star hotel in Novotel, Istanbul. In
                  that same year, our Luxury apartment construction was
                  completed in Evidea, Istanbul.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2016</h3>
                </li>
              </div>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul className="carousel-lists">
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  In 2016, we launched our first luxury apartment project in
                  Addis Ababa, Ethiopia located at Sarbet.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2017</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  We built our first five-star hotel in Novotel, Istanbul. In
                  that same year, our Luxury apartment construction was
                  completed in Evidea, Istanbul.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2018</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  In 2016, we launched our first luxury apartment project in
                  Addis Ababa, Ethiopia located at Sarbet.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2016</h3>
                </li>
              </div>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul className="carousel-lists">
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  We built our first five-star hotel in Novotel, Istanbul. In
                  that same year, our Luxury apartment construction was
                  completed in Evidea, Istanbul.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2019</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  In 2019, We launched another luxury apartment project in Addis
                  Ababa, Bole. This project, Metropolitan Tower, is a modern
                  apartment built with luxury standards.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2019</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  We built our first five-star hotel in Novotel, Istanbul. In
                  that same year, our Luxury apartment construction was
                  completed in Evidea, Istanbul.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2010</h3>
                </li>
              </div>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul className="carousel-lists">
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  Over a few years we operated in hundreds of projects. In 2014
                  we celebrated 400 properties built/rebuilt in USA alone. We
                  also continued on developing in Turkey.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2013</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  We built our first five-star hotel in Novotel, Istanbul. In
                  that same year, our Luxury apartment construction was
                  completed in Evidea, Istanbul.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2019</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  helWe built our first five-star hotel in Novotel, Istanbul. In
                  that same year, our Luxury apartment construction was
                  completed in Evidea, Istanbul.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2016</h3>
                </li>
              </div>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul className="carousel-lists">
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  We built our first five-star hotel in Novotel, Istanbul. In
                  that same year, our Luxury apartment construction was
                  completed in Evidea, Istanbul.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2017</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  In 2019, We launched another luxury apartment project in Addis
                  Ababa, Bole. This project, Metropolitan Tower, is a modern
                  apartment built with luxury standards.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2019</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  We built our first five-star hotel in Novotel, Istanbul. In
                  that same year, our Luxury apartment construction was
                  completed in Evidea, Istanbul.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2013</h3>
                </li>
              </div>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul className="carousel-lists">
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  In 2019, We launched another luxury apartment project in Addis
                  Ababa, Bole. This project, Metropolitan Tower, is a modern
                  apartment built with luxury standards.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2019</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  We built our first five-star hotel in Novotel, Istanbul. In
                  that same year, our Luxury apartment construction was
                  completed in Evidea, Istanbul.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2010</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  In 2019, We launched another luxury apartment project in Addis
                  Ababa, Bole. This project, Metropolitan Tower, is a modern
                  apartment built with luxury standards.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2019</h3>
                </li>
              </div>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul className="carousel-lists">
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  In 2019, We launched another luxury apartment project in Addis
                  Ababa, Bole. This project, Metropolitan Tower, is a modern
                  apartment built with luxury standards.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2014</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  In 2012, We launched another luxury apartment project in Addis
                  Ababa, Bole. This project, Metropolitan Tower, is a modern
                  apartment built with luxury standards.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2012</h3>
                </li>
              </div>
              <div className="each-list-container">
                <li className="carousel-each-lists">
                  We built our first five-star hotel in Novotel, Istanbul. In
                  that same year, our Luxury apartment construction was
                  completed in Evidea, Istanbul.
                  <h4 className="span-one">In</h4>
                  <h3 className="span-two">2014</h3>
                </li>
              </div>
            </ul>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="message-from-president-section">
        <ul className="lists-in-this-section">
          <li className="messages">
            <h2 className="messages-title">MESSAGES FROM THE PRESIDENT</h2>
            <div className="messages-text">
              <p className="messages-text">
                Here at Metropolitan, we value our customers above all. With
                this philosophy, our staff works day and night to make your
                dreams of luxury real estate in Ethiopia come true. Because,
                regardless of the challenges we face, we’re here to deliver our
                promises on time. We know the unique environment we are in
                &strive to become one of best realestate companies in Ethiopia.
              </p>
              <p className="messages-text">
                Metropolitan is an American company doing business in Ethiopia
                with many other nationalities in its team. We cherish the values
                of all these cultures and use this power to fulfill the needs
                for luxury real estate in Addis Ababa and all of Ethiopia as
                well.
              </p>
              <p className="messages-text">
                Please join us on this beautiful journey that we are in, so we
                can build Ethiopia together!
              </p>
            </div>
          </li>
          <li className="president-pic">
            <img src="https://metropolitanaddis.com/wp-content/uploads/elementor/thumbs/IMG_5563-pl6eaeahm5m2mffwqtfawzdn43h7okmnk1dtb2ms2c.jpg" />
            <div className="name-of-pres">
              <h2
                style={{
                  fontWeight: "bolder",
                  paddingTop: "20px",
                  paddingRight: "70px",
                }}
              >
                ADAM UĞUR TUNÇ
              </h2>
            </div>
          </li>
        </ul>
      </div>

      {/* About us blog */}
      <div className="blog-title-about-us">
        <h3 className="blog-text-about">Blog</h3>
        <h4>More about Metropolitan’s luxury homes</h4>
      </div>
      {/* blog */}
      <div className="LuxuryLines-body6-container">
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <img
              src="https://metropolitanaddis.com/wp-content/uploads/2022/04/f.jpg"
              style={{ width: "400px", height: "300px" }}
              className="luxury-homes-home-images"
            />
            <h3 className="luxury-homes-title">
              How to Make a Winning Offer on an Apartment
            </h3>
            <p className="luxury-homes-paragraph">
              Today’s Apartment buyers face a strong sellers’ market, meaning
              there are many active buyers competing for a relatively low number
              of affordable homes. As a […]{" "}
            </p>
            <button className="luxury-homes-read-more-btn">Read More</button>
          </li>
          <li className="more-luxury-homes-each-list">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600,h_400/https://metropolitanaddis.com/wp-content/uploads/2022/04/Closing-Cost.jpg"
              style={{ width: "400px", height: "300px" }}
              className="luxury-homes-home-images"
            />
            <h3 className="luxury-homes-title">
              Don’t Forget to Budget For Closing Costs While Buying An Apartment
            </h3>
            <p className="luxury-homes-paragraph">
              Purchasing an apartment demands a large financial investment,
              which many prospective buyers are unaware of. Although it’s a
              smart idea to figure exactly how […]
            </p>
            <button className="luxury-homes-read-more-btn">Read More</button>
          </li>
          <li>
            <button className="luxury-homes-read-more-btn">See More</button>
          </li>
        </ul>
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640,h_509/https://metropolitanaddis.com/wp-content/uploads/2022/04/Blog-22.jpg"
              style={{ width: "400px", height: "300px" }}
              className="luxury-homes-home-images"
            />
            <h3 className="luxury-homes-title">
              What are The Benefits of Owning a Second Apartment
            </h3>
            <p className="luxury-homes-paragraph">
              This is a short summary on the benefit of having more than two
              apartments. […]
            </p>
            <button className="luxury-homes-read-more-btn">Read More</button>
          </li>
          <li className="more-luxury-homes-each-list">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640,h_447/https://metropolitanaddis.com/wp-content/uploads/2022/03/What-Does-a-Builders-Warranty-Cover.jpg"
              style={{ width: "400px", height: "300px" }}
              className="luxury-homes-home-images"
            />
            <h3 className="luxury-homes-title">
              Top 7 things a Builder’s Warranty Covers
            </h3>
            <p className="luxury-homes-paragraph">
              Builder’s warranties vary greatly, so Apartment owners must take
              the time to learn what is covered. Even with new Apartments,
              things can go wrong. As a result, many […]
            </p>
            <button className="luxury-homes-read-more-btn">Read More</button>
          </li>
        </ul>
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640,h_427/https://metropolitanaddis.com/wp-content/uploads/2022/03/APa.png"
              style={{ width: "400px", height: "300px" }}
              className="luxury-homes-home-images"
            />
            <h3 className="luxury-homes-title">
              When hunting apartment at a distance like a champ, consider this
              factors
            </h3>
            <p className="luxury-homes-paragraph">
              Know-how when you have got to buy an Apartment from across the
              country, start with a winning strategy. Searching for an Apartment
              locally is not without […]
            </p>
            <button className="luxury-homes-read-more-btn">Read More</button>
          </li>
          <li className="more-luxury-homes-each-list">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640,h_426/https://metropolitanaddis.com/wp-content/uploads/2022/03/affod.png"
              style={{ width: "400px", height: "300px" }}
              className="luxury-homes-home-images"
            />
            <h3 className="luxury-homes-title">
              How to Afford Buying an Apartment in Ethiopia
            </h3>
            <p className="luxury-homes-paragraph">
              Apartment buying hurdles exist — but research, creativity, and
              flexibility will help you clear them. Apartment buyers today face
              tough challenges. Apartment prices have soared; money doesn’t go
              as far […]
            </p>
            <button className="luxury-homes-read-more-btn">Read More</button>
          </li>
        </ul>
      </div>

      <div className="Footer-container">
        <Footer2 />
      </div>
    </div>
  );
};

export default AboutUs;
