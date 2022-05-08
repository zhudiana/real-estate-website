import NavBar from "../../Components/NavBar/NavBar";
import logo from "../../Images/logo.png";
import Footer2 from "../../Components/Footer/Footer2/Footer2";
import { Link } from "react-router-dom";
import "./NewsBlogs.css";

const NewsBlogs = () => {
  return (
    <div className="Main-container">
      <div className="Navigation-container">
        <NavBar />
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo-each" />
        </Link>
      </div>

      {/* Body one */}
      <div className="NewsBlogs_header">
        <h3 className="HeaderTitle">
          News <br /> & <br /> Blog
        </h3>
      </div>

      {/* Body two */}
      <div className="blog-title">
        <h3 className="blog-text">Blog</h3>
      </div>

      <div className="LuxuryLines-body6-container">
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <Link to="/Blog1">
              <img
                src="https://metropolitanaddis.com/wp-content/uploads/2022/04/f.jpg"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                How to Make a Winning Offer on an Apartment
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Today’s Apartment buyers face a strong sellers’ market, meaning
              there are many active buyers competing for a relatively low number
              of affordable homes. As a […]{" "}
            </p>
            <Link to="/Blog1">
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>
          </li>
          <li className="more-luxury-homes-each-list">
            <Link to="/Blog2">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600,h_400/https://metropolitanaddis.com/wp-content/uploads/2022/04/Closing-Cost.jpg"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                Don’t Forget to Budget For Closing Costs While Buying An
                Apartment
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Purchasing an apartment demands a large financial investment,
              which many prospective buyers are unaware of. Although it’s a
              smart idea to figure exactly how […]
            </p>
            <Link to="/Blog2">
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>{" "}
          </li>
        </ul>
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <Link to="/Blog3">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640,h_509/https://metropolitanaddis.com/wp-content/uploads/2022/04/Blog-22.jpg"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                What are The Benefits of Owning a Second Apartment
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              This is a short summary on the benefit of having more than two
              apartments. […]
            </p>
            <Link to="/Blog3">
              {" "}
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>
          </li>
          <li className="more-luxury-homes-each-list">
            <Link to="/Blog4">
              {" "}
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640,h_447/https://metropolitanaddis.com/wp-content/uploads/2022/03/What-Does-a-Builders-Warranty-Cover.jpg"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                Top 7 things a Builder’s Warranty Covers
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Builder’s warranties vary greatly, so Apartment owners must take
              the time to learn what is covered. Even with new Apartments,
              things can go wrong. As a result, many […]
            </p>
            <Link to="/Blog4">
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>
          </li>
        </ul>
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <Link to="/Blog5">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640,h_427/https://metropolitanaddis.com/wp-content/uploads/2022/03/APa.png"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                When hunting apartment at a distance like a champ, consider this
                factors
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Know-how when you have got to buy an Apartment from across the
              country, start with a winning strategy. Searching for an Apartment
              locally is not without […]
            </p>
            <Link to="/Blog5">
              {" "}
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>
          </li>
          <li className="more-luxury-homes-each-list">
            <Link to="/Blog6">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640,h_426/https://metropolitanaddis.com/wp-content/uploads/2022/03/affod.png"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                How to Afford Buying an Apartment in Ethiopia
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Apartment buying hurdles exist — but research, creativity, and
              flexibility will help you clear them. Apartment buyers today face
              tough challenges. Apartment prices have soared; money doesn’t go
              as far […]
            </p>
            <Link to="/Blog3">
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>{" "}
          </li>
        </ul>
      </div>

      {/* body three */}
      <div className="blog-title">
        <h3 className="blog-text">News</h3>
      </div>
      <div className="LuxuryLines-body6-container">
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <Link to="/News1">
              <img
                src="https://metropolitanaddis.com/wp-content/uploads/2020/11/Bole-Midtown-inaguration-312-300x181.jpg"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">Bole Midtown inauguration</h3>
            </Link>
          </li>
        </ul>
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <Link to="/News2">
              <img
                src="https://metropolitanaddis.com/wp-content/uploads/2020/04/Kco6QKr6RemIQYj9qK0P-300x199.png"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                Metropolitan Real Estate: Fight Against the COVID-19 Pandemic{" "}
              </h3>
            </Link>
          </li>
        </ul>
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <Link to="/News3">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_300/https://metropolitanaddis.com/wp-content/uploads/2019/07/WhatsApp-Image-2019-06-27-at-11.45.35-AM-300x300.jpeg"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                Metropolitan Tower Launch party
              </h3>
            </Link>
          </li>
        </ul>
      </div>

      {/* body four */}
      <div className="blog-title">
        <h3 className="blog-text">Projects</h3>
      </div>

      <div className="LuxuryLines-body6-container">
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <Link to="/Project1">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640,h_548/https://metropolitanaddis.com/wp-content/uploads/2019/07/westview-standard-apartnements-2000x1714.png"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                Westview Standards Apartments Events
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Westview Standard Apartments Events Looking for comfort and
              convenience without the price tag? Metropolitan’s Westview
              Standard affordable homes for sale in Addis Ababa is an […]
            </p>
            <Link to="/Project1">
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>
          </li>
          <li className="more-luxury-homes-each-list">
            <Link to="/Project2">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640,h_400/https://metropolitanaddis.com/wp-content/uploads/2020/04/Cam__2.jpg"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                Westview Standards Apartments Gallery
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Gallery: Westview Standard Apartments Looking for comfort and
              convenience without the price tag? Metropolitan’s Westview
              Standard affordable homes for sale in Addis Ababa is an […]
            </p>
            <Link to="/Project2">
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>
          </li>
        </ul>
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <Link to="/Project3">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640,h_640/https://metropolitanaddis.com/wp-content/uploads/2019/07/WhatsApp-Image-2019-06-27-at-11.45.35-AM.jpeg"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">Metropolitan Tower Events</h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Metropolitan Tower Apartments Events Metropolitan Tower Launch
              Party Metropolitan tower launch party was organized as a
              celebration of the launch of Metropolitan Tower Luxury Apartments.
              […]
            </p>
            <Link to="/Project3">
              {" "}
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>
          </li>
          <li className="more-luxury-homes-each-list">
            <Link to="/Project4">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640,h_480/https://metropolitanaddis.com/wp-content/uploads/2019/09/COMMON-AREAS-6.jpg"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">Metropolitan Tower Gallery</h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Gallery: Metropolitan Tower Apartments Original architecture,
              international standard and a central location offer a quality of
              life unparalleled in the Addis Ababa Market. A unique […]
            </p>
            <Link to="/Project4">
              {" "}
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>{" "}
          </li>
        </ul>
        <ul className="more-luxury-homes-list">
          <li className="more-luxury-homes-each-list">
            <Link to="/Project5">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640,h_454/https://metropolitanaddis.com/wp-content/uploads/2018/12/tower_slider_pic.png"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                Metropolitan Tower Facilities
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Facilities at Metropolitan Tower Apartments 24 HOURS UNINTERRUPTED
              POWER SUPPLY At Bole Tower you won’t suffer from Addis Ababa’s
              common power outage. Our high capacity […]
            </p>
            <Link to="/Project5">
              <button className="luxury-homes-read-more-btn">Read More</button>
            </Link>
          </li>
          <li className="more-luxury-homes-each-list">
            <Link to="/Project6">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640,h_400/https://metropolitanaddis.com/wp-content/uploads/2020/04/Cam__2.jpg"
                style={{ width: "400px", height: "300px" }}
                className="luxury-homes-home-images"
              />
              <h3 className="luxury-homes-title">
                Westview Standard Apartments Facilities
              </h3>
            </Link>
            <p className="luxury-homes-paragraph">
              Facilities at Westview Standard Apartments Learn More […]
            </p>
            <Link to="/Project6">
              {" "}
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

export default NewsBlogs;
