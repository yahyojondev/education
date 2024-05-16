import React, { memo } from "react";
import Hero from "../../components/hero/Hero";
import Own from "../../components/own/Own";
import Nature from "../../components/nature/Nature";
import Class from "../../components/class/Class";
import Course from "../../components/course/Course";
import Platform from "../../components/platform/Platform";
import Dream from "../../components/dream/Dream";
import University from "../../components/university/University";
import Teachers from "../../components/teachers/Teachers";

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div className="home">
      <Hero />
      <Own />
      <Nature />
      <Class />
      <Course />
      <Platform />
      <Dream />
      <University />
      <Teachers />
    </div>
  );
};

export default memo(Home);
