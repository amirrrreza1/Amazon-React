import React, { useEffect, useState, createContext } from "react";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import SlideBar from "../SlideBar/SlideBar";
import dataFetcher from "../../JS/DataFetcher";
import MainItems from "../MainItems/MainItems";
import SignIn from "../SignIn/SignIn";
import BackToTop from "../BackToTop/BackToTop";
import AmazonFooterItems from "../AmazonFooterItems/AmazonFooterItems";
import axios from "axios";
export const MyContext = createContext();

const App = () => {
  const [SliderData, SetSliderData] = useState(null);
  const [SlideBarData, SetSlideBarData] = useState(null);
  const [MainItemsData, SetMainItemsData] = useState(null);
  const [FooterItemsData, SetFooterItemsData] = useState(null);
  const [AmazonFooterItemsData, SetAmazonFooterItemsData] = useState(null);

  const fetchSlider = async () => {
    try {
      let res = await axios.get(
        "https://amirrrreza1.github.io/Amazon-React-Link/db.json"
      );
      SetSliderData(res.data.Slider);
    } catch (error) {
      console.error("Failed to fetch slider data:", error.message);
    }
  };

  const fetchSlideBar = async () => {
    try {
      let res = await axios.get(
        "https://amirrrreza1.github.io/Amazon-React-Link/db.json"
      );
      SetSlideBarData(res.data.SlideBar);

      // const Slides = await dataFetcher("/SlideBar");
      // SetSlideBarData(Slides);
    } catch (error) {
      console.error("Failed to fetch SlideBar data:", error.message);
    }
  };

  const fetchMainItems = async () => {
    try {
      let res = await axios.get(
        "https://amirrrreza1.github.io/Amazon-React-Link/db.json"
      );
      SetMainItemsData(res.data.MainItems);
      // const items = await dataFetcher("/MainItems");
      // SetMainItemsData(items);
    } catch (error) {
      console.error("Failed to fetch MainItems data:", error.message);
    }
  };

  const fetchFooterItems = async () => {
    let res = await axios.get(
      "https://amirrrreza1.github.io/Amazon-React-Link/db.json"
    );
    SetFooterItemsData(res.data.FooterItems);
    try {
      // const items = await dataFetcher("/FooterItems");
      // SetFooterItemsData(items);
    } catch (error) {
      console.error("Failed to fetch FooterItems data:", error.message);
    }
  };

  const fetchAmazonFooterItems = async () => {
    try {
      let res = await axios.get(
        "https://amirrrreza1.github.io/Amazon-React-Link/db.json"
      );
      SetAmazonFooterItemsData(res.data.AmazonFooterItems);
      // const items = await dataFetcher("/AmazonFooterItems");
      // SetAmazonFooterItemsData(items);
    } catch (error) {
      console.error("Failed to fetch AmazonFooterItems data:", error.message);
    }
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

        <div className="relative">
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
