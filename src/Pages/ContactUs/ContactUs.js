import { Link } from 'react-router-dom';
import Footer2 from '../../Components/Footer/Footer2/Footer2';
import NavBar from '../../Components/NavBar/NavBar';
import logo from "../../Images/logo.png";

const ContactUs = () => {
  return (
    <div className="Main-container">
      <div className="Navigation-container">
          <NavBar />
          <Link to="/">
            <img src={logo} alt="logo" className="nav-logo-each"/>
          </Link>
      </div>

      {/* Body one */}
      <div className="StandardLines-body1-container">
            <div className="StandardLines-image-container">
              <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_413/https://metropolitanaddis.com/wp-content/uploads/2019/07/standard-aparatama-logo-e1590674361378.png" />
            </div>
            <div className="StandardLines-body1-paragraph-container">
              <p className='StandardLines-body1-paragraph'>
              Standard apartments are built with equivalent quality 
              to that of luxury apartments. Construction processes, 
              material quality and supervision are not compromised. 
              Metropolitan’s luxury constructions are done by experienced 
              international engineers with strict supervision.
              </p>
              <p className='StandardLines-body1-paragraph'>
              Location of standard apartments may not be as convenient 
              as luxury home but they’re usually located in up and coming 
              neighborhoods which makes it suitable for residential apartments.
              </p>
              <p className='StandardLines-body1-paragraph'>
              Standard apartments offer standard features like a generator, 
              elevator, water tank, parking, collective installations, power 
              back-up, and secure access.
              </p>
              <p className='StandardLines-body1-paragraph'>
              Standard apartments come with limited but up to standard amenities 
              and appliances. Even though amenities like gym & clubhouses aren’t 
              available like metropolitan’s luxury houses for sale in Addis Ababa, 
              it comes with kitchen cabinet finishes, floor tiles, water insulation 
              features, marble finish, and different fixtures.
              </p>
            </div>   
          </div>

          {/* Body Two */}
          <div className="StandardLines-body2-container">
            <div className="StandardLines-body2-upper-image">
                <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_768/https://metropolitanaddis.com/wp-content/uploads/2019/07/catalogue-sticker-768x656.png" />
            </div>
            <div className="StandardLines-body2-paragraph-container">
              <p className='StandardLines-p-body2-header'>WESTVIEW STANDARD APARTMENTS</p>
              <p className='StandardLines-p'>
                Looking for comfort and convenience without the price tag?
              </p>
              <p className='StandardLines-p'>
                Metropolitan’s Westview Standard Apartments for sale in Addis Ababa 
                is an international standard project which meets all of Metropolitan’s 
                high-quality standards. The city’s best construction meets an ergonomic 
                design at Westview Standard Apartments to provide you with functional and 
                convenient homes.
              </p>
              <p className='StandardLines-p'>
              If you are looking for  western quality, comfort and security which is affordable, 
              Westview Standard Apartments is your best option
              </p>
            </div>

            <div className="StandardLines-body2-view-detail">
              <button className='StandardLines-body2-view-detail-button'>
                    View Details 
              </button>
            </div>
          </div>

           {/* Body three */}
          
           <div className="LuxuryLines-body6-title">
                <h3>More About Metropolitan Luxury Homes</h3>
            </div>
            <div className="LuxuryLines-body6-container">
              <ul className="more-luxury-homes-list">
                  <li className="more-luxury-homes-each-list">
                    <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1500,h_1125/https://metropolitanaddis.com/wp-content/uploads/2019/09/midtown-living-room.jpg" className="luxury-homes-home-images"/>
                    <h3 className="luxury-homes-title">4 THINGS THAT MAKE A MODERN APARTMENT "MODERN"</h3>
                    <button className="luxury-homes-read-more-btn">Read More</button>
                  </li>
                  <li className="more-luxury-homes-each-list">
                    <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200,h_750/https://metropolitanaddis.com/wp-content/uploads/2020/04/Cam__2.jpg" style={{ width: '400px' ,height: '300px' }} className="luxury-homes-home-images"/>
                    <h3 className="luxury-homes-title">WHAT ARE STANDARD APARTMENTS FOR SALE IN ETHIOPIA?</h3>
                    <button className="luxury-homes-read-more-btn">Read More</button>
                  </li>
              </ul>
              <ul className="more-luxury-homes-list">
                  <li className="more-luxury-homes-each-list">
                    <img src="https://metropolitanaddis.com/wp-content/uploads/2018/10/katalog-baski_Page_17.jpg" style={{ width: '400px' ,height: '300px' }} className="luxury-homes-home-images"/>
                    <h3 className="luxury-homes-title">TYPES OF ELEVETORS-IN HOME FOR SALE IN ADDIS ABABA</h3>
                    <button className="luxury-homes-read-more-btn">Read More</button>
                  </li>
                  <li className="more-luxury-homes-each-list">
                    <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2048,h_1365/https://metropolitanaddis.com/wp-content/uploads/2019/07/294A8540.jpg" style={{ width: '400px' ,height: '300px' }} className="luxury-homes-home-images"/>
                    <h3 className="luxury-homes-title">TYPES OF APARTMENTS IN ETHIPIA</h3>
                    <button className="luxury-homes-read-more-btn">Read More</button>
                  </li>
              </ul>
              <ul className="more-luxury-homes-list">
                  <li className="more-luxury-homes-each-list">
                    <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1000,h_625/https://metropolitanaddis.com/wp-content/uploads/2020/04/Cam__4.jpg" style={{ width: '400px' ,height: '300px' }} className="luxury-homes-home-images"/>
                    <h3 className="luxury-homes-title">WESTVIEW STANDARD APARTMENT BRAND NEW HOUSE FOR SALE IN ETHIOPIA</h3>
                    <button className="luxury-homes-read-more-btn">Read More</button>
                  </li>
                  <li className="more-luxury-homes-each-list">
                    <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_747,h_779/https://metropolitanaddis.com/wp-content/uploads/2019/08/park.jpg" style={{ width: '400px' ,height: '300px' }} className="luxury-homes-home-images"/>
                    <h3 className="luxury-homes-title">TYPES OF PARKING SPACES IN LUXURY APARTMENTS</h3>
                    <button className="luxury-homes-read-more-btn">Read More</button>
                  </li>
              </ul>
          </div>




      <div className="Footer-container">
              <Footer2 />
          </div>
    </div>
  )
}

export default ContactUs