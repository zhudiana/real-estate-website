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
import BlogAll from "./Pages/AboutUs/AboutUsBlogs/BlogAll";

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
          <Route path="/BlogAll" element={<BlogAll />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
