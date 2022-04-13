import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import HomePage from "./Components/HomePage";
import LuxuryLines from "./Pages/LuxuryLines/LuxuryLines";
import StandardLines from "./Pages/StandardLines/StandardLines";
import NewsBlogs from "./Pages/NewsBlogs/NewsBlogs";
import MetropolitanDifference from "./Pages/MetropolitanDifference/MetropolitanDifference";
import ContactUs from "./Pages/ContactUs/ContactUs";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="/AboutUs" element={<AboutUs />}/>
            <Route path="/LuxuryLines" element={<LuxuryLines />}/>
            <Route path="/StandardLines" element={<StandardLines />}/>
            <Route path="/NewsBlogs" element={<NewsBlogs />}/>
            <Route path="/MetropolitanDifference" element={<MetropolitanDifference />}/>
            <Route path="/ContactUs" element={<ContactUs />}/>
          </Routes>  
        </BrowserRouter> 
    </div>
                   
  );
}

export default App;

 