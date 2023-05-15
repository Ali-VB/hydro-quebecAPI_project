import React from "react";

const IntroPage = ({ showIntroPage }) => {
  return (
    <div className={showIntroPage ? "block" : "hidden"}>
      <p className=" overflow-y-auto md:text-justify text-darkBlue md:p-16 font-normal text-xl md:text-3xl leading-10">
        {" "}
        <h2 className="md:font-bold md:pb-4 text-amber-500">Welcome!</h2>
        This web application was designed to visualize data sourced from a REST
        API, specifically the public Hydro-Quebec data detailing total demand
        and production.
        <br /> My goal is to provide a simple and intuitive way to explore this
        data, both in a grid view and with interactive charts. I have carefully
        crafted this application using the latest web technologies and
        frameworks, ensuring a smooth and responsive user experience.
        <br /> To get started, simply launch the application and start exploring the Hydro-Quebec data in a
        new and exciting way!
      </p>
    </div>
  );
};

export default IntroPage;