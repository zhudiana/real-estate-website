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
import LLblog1 from "./Pages/LuxuryLines/LuxuryLinesBlogs/LLblog1";
import LLblog2 from "./Pages/LuxuryLines/LuxuryLinesBlogs/LLblog2";
import LLblog3 from "./Pages/LuxuryLines/LuxuryLinesBlogs/LLblog3";
import LLblog4 from "./Pages/LuxuryLines/LuxuryLinesBlogs/LLblog4";
import LLblog5 from "./Pages/LuxuryLines/LuxuryLinesBlogs/LLblog5";
import LLblog6 from "./Pages/LuxuryLines/LuxuryLinesBlogs/LLblog6";
import SLblog1 from "./Pages/StandardLines/StandardLinesBlogs/SLblog1";
import SLblog2 from "./Pages/StandardLines/StandardLinesBlogs/SLblog2";
import SLblog3 from "./Pages/StandardLines/StandardLinesBlogs/SLblog3";
import SLblog4 from "./Pages/StandardLines/StandardLinesBlogs/SLblog4";
import SLblog5 from "./Pages/StandardLines/StandardLinesBlogs/SLblog5";
import SLblog6 from "./Pages/StandardLines/StandardLinesBlogs/SLblog6";
import News1 from "./Pages/NewsBlogs/News/News1";
import News2 from "./Pages/NewsBlogs/News/News2";
import News3 from "./Pages/NewsBlogs/News/News3";
import Project1 from "./Pages/NewsBlogs/Project/Project1";
import Project2 from "./Pages/NewsBlogs/Project/Project2";
import Project3 from "./Pages/NewsBlogs/Project/Project3";
import Project4 from "./Pages/NewsBlogs/Project/Project4";
import Project5 from "./Pages/NewsBlogs/Project/Project5";
import Project6 from "./Pages/NewsBlogs/Project/Project6";

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
          <Route path="/LLblog1" element={<LLblog1 />} />
          <Route path="/LLblog2" element={<LLblog2 />} />
          <Route path="/LLblog3" element={<LLblog3 />} />
          <Route path="/LLblog4" element={<LLblog4 />} />
          <Route path="/LLblog5" element={<LLblog5 />} />
          <Route path="/LLblog6" element={<LLblog6 />} />
          <Route path="/SLblog1" element={<SLblog1 />} />
          <Route path="/SLblog2" element={<SLblog2 />} />
          <Route path="/SLblog3" element={<SLblog3 />} />
          <Route path="/SLblog4" element={<SLblog4 />} />
          <Route path="/SLblog5" element={<SLblog5 />} />
          <Route path="/SLblog6" element={<SLblog6 />} />
          <Route path="/News1" element={<News1 />} />
          <Route path="/News2" element={<News2 />} />
          <Route path="/News3" element={<News3 />} />
          <Route path="/Project1" element={<Project1 />} />
          <Route path="/Project2" element={<Project2 />} />
          <Route path="/Project3" element={<Project3 />} />
          <Route path="/Project4" element={<Project4 />} />
          <Route path="/Project5" element={<Project5 />} />
          <Route path="/Project6" element={<Project6 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
