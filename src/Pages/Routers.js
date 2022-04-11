import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import LuxuryLines from "./LuxuryLines/LuxuryLines";
import MetropolitanDifference from "./MetropolitanDifference/MetropolitanDifference";
import NewsBlogs from "./NewsBlogs/NewsBlogs";
import StandardLines from "./StandardLines/StandardLines";


const Routers = () => {
  return (
 
      <div>
        <AboutUs />
        <ContactUs />
        <LuxuryLines />
        <MetropolitanDifference />
        <NewsBlogs />
        <StandardLines />
      </div>
    
  )
}

export default Routers;