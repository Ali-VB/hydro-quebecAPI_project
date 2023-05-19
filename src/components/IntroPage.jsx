import React from "react";

const IntroPage = ({ showIntroPage }) => {
  return (
    <div className={showIntroPage ? "block" : "hidden"}>
      <p
        className=" overflow-y-auto md:text-justify text-darkBlue md:p-24
       font-normal text-xl md:text-3xl leading-12"
      >
        <h2 className="md:font-bold md:pb-4 text-amber-500">Welcome!</h2>
        This web application was designed to visualize data sourced from a REST API, specifically the public
        Hydro-Quebec data detailing total demand and production.
        <br /> My goal is to provide a simple and intuitive way to explore this data, both in a grid view and with
        interactive charts. I have carefully crafted this application using the latest web technologies and frameworks,
        ensuring a smooth and responsive user experience.
      </p>
      <p
        className="overflow-y-auto md:text-justify text-darkBlue md:px-12
       font-normal text-md md:text-md leading-4"
      >
        &clubs; The data structure fetching from the API has been modified to enhance the chart representation.
        Specifically, the total demand data has been divided into three shifts: night, morning, and evening, resulting
        in a more meaningful and intuitive visualization.
      </p>
    </div>
  );
};

export default IntroPage;
