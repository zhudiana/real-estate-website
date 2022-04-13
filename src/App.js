import NavBar from "./Components/NavBar/NavBar";
import Body1 from "./Components/Body/Body1";
import Body2 from "./Components/Body/Body2";
import Body3 from "./Components/Body/Body3";
import Body4 from "./Components/Body/Body4";
import Footer1 from "./Components/Footer/Footer1/Footer1";
import Form  from "./Components/Footer/Form/Form";
import Footer2 from "./Components/Footer/Footer2/Footer2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routers from "./Pages/Routers";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
        {/* <NavBar /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <NavBar />} />
            <Route path="/" element={ <Body1/>} />
            <Route path="/" element={ <Body2/>} />
            <Route path="/" element={ <Body3/>} />
            <Route path="/" element={ <Body4/>} />
            <Route path="/" element={ <Footer1/>} />
            <Route path="/" element={ <Form />} />
            <Route path="/" element={ <Footer2/>} />
          </Routes>  
        </BrowserRouter>
        <Body1 />
        <Body2 />
        <Body3 />
        <Body4 />
        <Footer1 />
        <Form />
        <Footer2 />
    </div>
                   
  );
}

export default App;

 