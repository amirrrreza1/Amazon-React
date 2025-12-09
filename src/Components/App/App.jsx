import { useEffect, useState, createContext } from "react";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import SlideBar from "../SlideBar/SlideBar";
import MainItems from "../MainItems/MainItems";
import SignIn from "../SignIn/SignIn";
import BackToTop from "../BackToTop/BackToTop";
import AmazonFooterItems from "../AmazonFooterItems/AmazonFooterItems";
import data from "../../../db.json";

export const MyContext = createContext();

const App = () => {
  const [SliderData, SetSliderData] = useState(null);
  const [SlideBarData, SetSlideBarData] = useState(null);
  const [MainItemsData, SetMainItemsData] = useState(null);
  const [FooterItemsData, SetFooterItemsData] = useState(null);
  const [AmazonFooterItemsData, SetAmazonFooterItemsData] = useState(null);

  const fetchSlider = async () => {
    SetSliderData(data.Slider);
  };

  const fetchSlideBar = async () => {
    SetSlideBarData(data.SlideBar);
  };

  const fetchMainItems = async () => {
    SetMainItemsData(data.MainItems);
  };

  const fetchFooterItems = async () => {
    SetFooterItemsData(data.FooterItems);
  };

  const fetchAmazonFooterItems = async () => {
    SetAmazonFooterItemsData(data.AmazonFooterItems);
  };

  useEffect(() => {
    fetchSlider();
    fetchSlideBar();
    fetchMainItems();
    fetchFooterItems();
    fetchAmazonFooterItems();
  }, []);

  return (
    <MyContext.Provider
      value={{
        SliderData,
        SlideBarData,
        MainItemsData,
        FooterItemsData,
        AmazonFooterItemsData,
      }}
    >
      <Header />
      <div className="relative">
        <SlideBar SlideBarData={SlideBarData} />

        <div className="relative -mb-[19vw]">
          <Slider sliderData={SliderData} />
        </div>

        <div className="relative z-10">
          <MainItems MainItemsData={MainItemsData} />
        </div>

        <div className="relative">
          <SignIn />
          <BackToTop />
          <Footer FooterItemsData={FooterItemsData} />
          <AmazonFooterItems AmazonFooterItemsData={AmazonFooterItemsData} />
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default App;
