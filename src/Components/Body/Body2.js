import "./Body.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Body2 = () => {
  return (
    <div>
      <container>
        <figure className="position-relative">
            <img src="https://www.metropolitanaddis.com/wp-content/uploads/2019/09/MetroWeb1-1.jpg" className="blur-bg"/>
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_293/https://metropolitanaddis.com/wp-content/uploads/2019/09/luxury-logo-300x293.png" className="upper-image" />
           <div className="elementor-third-column">
              <p className="little-text">Metropolitan Apartments </p>
             <figcaption>
                <span className="elementor-button-text">LUXURY LINE</span>
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
                <span>View Luxury Apartments</span>
              </div>
              
           </div>
           
          </figure>
      </container>
    </div>
  )
}
// className="mx-auto d-block"

export default Body2