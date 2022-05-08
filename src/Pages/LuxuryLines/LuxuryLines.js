import NavBar from "../../Components/NavBar/NavBar";
import logo from "../../Images/logo.png";
import Footer2 from "../../Components/Footer/Footer2/Footer2";
import { Link } from "react-router-dom";
import "./LuxuryLines.css";

const LuxuryLines = () => {
  return (
    <div className="Main-container">
      {/* Header */}
      <div className="Navigation-container">
        <NavBar />
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo-each" />
        </Link>
      </div>

      {/* Body one */}
      <div className="LuxuryLines-body1-container">
        <div className="LuxuryLines-image-container">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_168,h_89/https://metropolitanaddis.com/wp-content/uploads/2020/02/lexury-with-white-and-golden-768x409-scaledd.png"
            className="LuxuryLines-body1-image"
          />
        </div>
        <div className="LuxuryLines-body1-paragraph-container">
          <p className="LuxuryLines-body1-paragraph">
            Luxury simply means great comfort and elegance. By building homes on
            prime locations that maximize the ease and comfort of a resident, we
            believe that one can uplift the value of a piece of land to the
            highest caliber.
          </p>
        </div>
      </div>

      {/* Body Two */}
      <div className="LuxuryLines-body2-container">
        <div className="LuxuryLines-body2-upper-image">
          <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_594/https://metropolitanaddis.com/wp-content/uploads/2021/02/central_tower_logo_kopyas%C4%B1_C%CC%A7al%C4%B1s%CC%A7ma_Yu%CC%88zeyi_1_kopya_2-removebg-preview.png" />
        </div>
        <div className="LuxuryLines-body2-paragraph-container">
          <p className="LuxuryLines-p-body2-header">Central Tower Apartments</p>
          <p className="LuxuryLines-p">
            Central Tower will give you peace of mind with high capacity water
            tank, uninterrupted power supply, high-end elevator, automatic
            security system, and underground parking.
          </p>
          <p className="LuxuryLines-p">
            Central Tower is a unique project located in the heart of Addis
            Ababa with its proximity to the AU headquarters, major roads, great
            city view, and considered to be in a rapidly developing area.
          </p>
        </div>

        <div className="body2-view-detail">
          <button className="body2-view-detail-button">View Details</button>
        </div>
      </div>

      {/* Body three */}
      <div className="LuxuryLines-body3-container">
        <div className="LuxuryLines-body3-upper-image">
          <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_768/https://metropolitanaddis.com/wp-content/uploads/2020/11/metropolitan_tower@4x-768x543.png" />
        </div>
        <div className="LuxuryLines-body3-paragraph-container">
          <p className="LuxuryLines-p-body3-header">
            Metropolitan Tower Apartments
          </p>
          <p className="LuxuryLines-p">
            Equipped with original architecture, international standard and a
            central location, Bole Tower offers a quality home for sale in Addis
            Ababa that is truly luxurious.
          </p>
          <p className="LuxuryLines-p">
            Metropolitan tower is located in the heart of Bole and has carefully
            designed units, club, gym and commercial areas.
          </p>
        </div>
        <div className="body3-view-detail">
          <button className="body3-view-detail-button">View Details</button>
        </div>
      </div>

      {/* Body four */}
      <div className="LuxuryLines-body4-container">
        <div className="LuxuryLines-body4-upper-image">
          <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_768/https://metropolitanaddis.com/wp-content/uploads/2019/08/midtow-new-new-768x329.png" />
        </div>
        <div className="LuxuryLines-body4-paragraph-container">
          <p className="LuxuryLines-p-body4-header">Bole Midtown Apartments </p>
          <p className="LuxuryLines-p">
            We pride ourselves on top quality construction a carefully thought
            out floor plan and infrastructure and exceptional workmanship and
            furnishing. This is epitomized in our Bole Midtown project.
          </p>
          <p className="LuxuryLines-p">
            Located in the best part of Bole, this apartment complex is easily
            accessible and close to all the major service Bole has to offer..
          </p>
        </div>
        <div className="body4-view-detail">
          <button className="body4-view-detail-button">View Details</button>
        </div>
      </div>

      {/* Body five */}
      <div className="LuxuryLines-body5-container">
        <div className="LuxuryLines-body5-upper-image">
          <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_768/https://metropolitanaddis.com/wp-content/uploads/2019/08/sarbet-new-768x453.png" />
        </div>
        <div className="LuxuryLines-body5-paragraph-container">
          <p className="LuxuryLines-p-body5-header">
            Sarbet Gabriel Apartments{" "}
          </p>
          <p className="LuxuryLines-p">
            Choosing a house to live in is one of the biggest decisions in life.
            Homes craft our mood, our mood in turn crafts who we are and plays a
            crucial part in our family’s well-being. Beautifully built houses
            like ours are capable of making your life joyful.
          </p>
          <p className="LuxuryLines-p">
            This apartment has the city view you dream of and quality design
            built by well experienced European builders and modern building
            materials. It is located at Sarbet around International Community
            School(ICS).
          </p>
        </div>
        <div className="body5-view-detail">
          <button className="body5-view-detail-button">View Details</button>
        </div>
      </div>

      {/* Body six */}

      <div className="LuxuryLines-body6-title">
        <h4>More About Metropolitan Luxury Homes</h4>
      </div>
      <div className="LuxuryLines-body6-container">
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <Link to="/LLblog1">
              <img
                src="https://metropolitanaddis.com/wp-content/uploads/2020/09/1-3.jpg"
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                HOW TO BUY AN APARTMENT IN ADDISABABA WHILE LIVING ABROAD?
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Most Ethiopian Diasporas desire to own a property in Addis [...]
            </p>
            <Link to="/LLblog1">
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>
          </li>
          <li className="more-luxury-homes-each-list">
            <Link to="/LLblog2">
              {" "}
              <img
                src="https://metropolitanaddis.com/wp-content/uploads/2019/09/midtown-living-room.jpg"
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                4 THINGS THAT MAKE A MODERN APARTMENT "MODERN"
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Most people who want a modern apartment in modern [...]
            </p>
            <Link to="/LLblog2">
              {" "}
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>
          </li>
        </ul>
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <Link to="/LLblog3">
              <img
                src="https://metropolitanaddis.com/wp-content/uploads/2018/01/27a20f056588cad.png"
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                BATHROOMS OF METROPOLITAN SARBET GABRIEL APARTMENTS
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Did you know the average person will spend at least [...]
            </p>
            <Link to="/LLblog3">
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>
          </li>
          <li className="more-luxury-homes-each-list">
            <Link to="/LLblog4">
              <img
                src="https://metropolitanaddis.com/wp-content/uploads/2019/09/tower-bedroom.jpg"
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                WHAT MAKES A LUXURIOUS HOME LUXURIOUS?
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Luxurious home spaces are never a matter of accident. it [...]
            </p>
            <Link to="/LLblog4">
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>{" "}
          </li>
        </ul>
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <Link to="/LLblog5">
              {" "}
              <img
                src="https://metropolitanaddis.com/wp-content/uploads/2019/09/Sarbet-living.jpg"
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                THE LUXURIOUS LIVING ROOM OF METROPOLITAN
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Lying on a spacious area, Metropolitan brings you state of [...]
            </p>
            <Link to="/LLblog5">
              {" "}
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>
          </li>
          <li className="more-luxury-homes-each-list">
            <Link to="/LLblog6">
              <img
                src="https://metropolitanaddis.com/wp-content/uploads/2019/08/photo_2019-08-09_09-44-18.jpg"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                THE IMPORTANCE OF TIMELY DELIVERY FOR REAL ESTATE IN ETHIOPIA
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              One of the most known problems in real estate in [...]
            </p>
            <Link to="/LLblog6">
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>{" "}
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="Footer-container">
        <Footer2 />
      </div>
    </div>
  );
};

export default LuxuryLines;
