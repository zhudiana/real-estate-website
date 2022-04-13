import Form from "./Footer/Form/Form";
import Body1 from "./Body/Body1";
import Body2 from "./Body/Body2";
import Body3 from "./Body/Body3";
import Body4 from "./Body/Body4";
import Footer1 from "./Footer/Footer1/Footer1";
import Footer2 from "./Footer/Footer2/Footer2";
import NavBar from "./NavBar/NavBar";

const HomePage = () => {
  return (
    <div>
        <NavBar />
        <Body1 />
        <Body2 />
        <Body3 />
        <Body4 />
        <Footer1 />
        <Form />
        <Footer2 />
    </div>
  )
}

export default HomePage