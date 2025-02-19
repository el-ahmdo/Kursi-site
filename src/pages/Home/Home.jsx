import React from "react";
import Hero from "../../Components/Hero/Hero";
import Golden from "../../Components/Golden/Golden";
import Achievement from "../../Components/Achievement/Achievement";
import News from "../../Components/News_section/News";
import Subsidiaries from "../../Components/Subsidiaries/Subsidiaries";
import Faq from "../../Components/FAQ/Faq";
import Map from "../../Components/Map/Map";
const Home = () => {
  return (
    <div>
      <Hero />
      <Golden />
      <Achievement />
      <News />
      <Subsidiaries />
      <Faq />
      <Map />
    </div>
  );
};

export default Home;
