import { BrowserRouter as Router, Link, Route,Routes } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import LuxuryLines from "./LuxuryLines/LuxuryLines";
import MetropolitanDifference from "./MetropolitanDifference/MetropolitanDifference";
import NewsBlogs from "./NewsBlogs/NewsBlogs";
import StandardLines from "./StandardLines/StandardLines";


const Routers = () => {
  return (
 
      
        <Routes>
          <Route path="AboutUs" element={<AboutUs />} />
          <ContactUs />
          <LuxuryLines />
          <MetropolitanDifference />
          <NewsBlogs />
          <StandardLines />
        </Routes>
        
    //   <Routes>
    //   <Route path="/home" element={
    //   <div>
    //     hi, im home <Link to="/post"> Go to posts</Link>
    //   </div>}

    //   />
    //   <Route path="/post"  element={<div>index </div>}/>
    // </Routes>
      
    
  )
}

export default Routers;