import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import HomePage from "./Components/HomePage";
import LuxuryLines from "./Pages/LuxuryLines/LuxuryLines";
import StandardLines from "./Pages/StandardLines/StandardLines";
import NewsBlogs from "./Pages/NewsBlogs/NewsBlogs";
import MetropolitanDifference from "./Pages/MetropolitanDifference/MetropolitanDifference";
import ContactUs from "./Pages/ContactUs/ContactUs";
import NavBar from "./Components/NavBar/NavBar";
import ScrollToTop from "./Components/ScrollToTop";
import Blog1 from "./Pages/AboutUs/AboutUsBlogs/Blog1";
import Blog6 from "./Pages/AboutUs/AboutUsBlogs/Blog6";
import Blog5 from "./Pages/AboutUs/AboutUsBlogs/Blog5";
import Blog4 from "./Pages/AboutUs/AboutUsBlogs/Blog4";
import Blog3 from "./Pages/AboutUs/AboutUsBlogs/Blog3";
import Blog2 from "./Pages/AboutUs/AboutUsBlogs/Blog2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/LuxuryLines" element={<LuxuryLines />} />
          <Route path="/StandardLines" element={<StandardLines />} />
          <Route path="/NewsBlogs" element={<NewsBlogs />} />
          <Route
            path="/MetropolitanDifference"
            element={<MetropolitanDifference />}
          />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Blog1" element={<Blog1 />} />
          <Route path="/Blog2" element={<Blog2 />} />
          <Route path="/Blog3" element={<Blog3 />} />
          <Route path="/Blog4" element={<Blog4 />} />
          <Route path="/Blog5" element={<Blog5 />} />
          <Route path="/Blog6" element={<Blog6 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
