import React from "react";
import headings from "../data/headings.json";

const getHeading = (p) => {
  return headings
    .filter(function (heading) {
      return heading.page === p;
    })
    .reduce(function (heading) {
      return {
        id: heading.id,
        title: heading.title,
        paragraph: heading.paragraph,
      };
    });
};

function Heading(props) {
  return (
    <div>
      <div className="flex flex-col gap-y-6 sm:gap-y-6 md:gap-y-8 mb-10">
        <div className="flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8">
          <h1 className="font-flamenco text-theme-primary text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-center lg:text-left">
            {props.title}
          </h1>
          <p className="text-xl w-11/12 mx-auto md:w-10/12 lg:w-10/12 lg:mx-0">
            {props.paragraph}
          </p>
        </div>
        {/*
        <div className="w-full lg:col-span-3">
          <div
            className="h-40 h- w-40 lg:h-64 lg:w-64 mx-auto bg-center bg-cover bg-no-repeat rounded-full shadow-md border border-slate-200"
            style={{ backgroundImage: 'url("")' }}
          ></div>
        </div> */}
      </div>
    </div>
  );
}

export { Heading as default, getHeading };
