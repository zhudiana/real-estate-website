import "./Body.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Body2 = () => {
  return (
    <div>
      <container>
        <figure className="position-relative">
            <img src="https://www.metropolitanaddis.com/wp-content/uploads/2019/09/MetroWeb1-1.jpg" className="blur-bg"/>
           <Link to="/LuxuryLines">
             <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_293/https://metropolitanaddis.com/wp-content/uploads/2019/09/luxury-logo-300x293.png" className="upper-image" />
           </Link>
           <div className="elementor-third-column">
              <p className="little-text">Metropolitan Apartments </p>
             <figcaption>
              <Link to="/StandardLines" style={{ textDecoration: "none" }}>
                 <span className="elementor-button-text">LUXURY LINE</span>
              </Link>
               
                  <div className="elementor-paragraph">
                    <p>
                      Luxury living is defined differently across different markets and areas. 
                      It also has its own definition in Ethiopia. Metropolitan Real Estate aims to 
                      redefine luxury living in Ethiopian homes.
                   </p>
                   <p>
                      Our very first luxury house for sale in Addis Ababa was, Sarbet Gabriel Apartments, 
                      which was built and delivered in 12 months. We have now launched  two more luxury housing 
                      projects.
                   </p>
                  </div>
              </figcaption> 
              <div className="elmentor-text">
                <Link to="/LuxuryLines">
                  <span><button className="elementor-text-btn">View Luxury Apartments</button></span>
                </Link>
                
              </div>
              
           </div>
           
          </figure>
      </container>
    </div>
  )
}
// className="mx-auto d-block"

export default Body2