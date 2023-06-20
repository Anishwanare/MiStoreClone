import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import Slider from "./components/Slider.js";
import Heading from "./components/heading.js";
import StartProduct from "./components/StartProduct.js";
import data from "./data/data.json";
import Offers from "./components/Offers.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js";
import Banner from "./components/Banner.js";
import Videos from "./components/Videos.js";
import PreFooter from "./components/PreFooter.js";
import NavOptions from "./components/NavOptions.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <PreNavbar />
      <Navbar />

      <Routes>
        <Route
          exact
          path="/miphones"
          element={<NavOptions miPhones={data.miPhones} />}
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/redmiphones"
          element={<NavOptions redmiPhones={data.redmiPhones} />}
        ></Route>
      </Routes>
      <Routes>
        <Route exact path="/tv" element={<NavOptions tv={data.tv} />}></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/laptops"
          element={<NavOptions laptop={data.laptop} />}
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/lifestyle"
          element={
            <NavOptions fitnessAndLifeStyle={data.fitnessAndLifeStyle} />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/home"
          element={<NavOptions home={data.home} />}
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/radio"
          element={<NavOptions radio={data.audio} />}
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/accessories"
          element={<NavOptions accessories={data.accessories} />}
        ></Route>
      </Routes>

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StartProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/Smart-Device"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/life-Style"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/mobile-Accessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>

      <Heading text="PRODUCT REVIEW" />
      <ProductReviews review={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos video={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <PreFooter footer={data.footer} />
    </Router>
  );
};

export default App;
