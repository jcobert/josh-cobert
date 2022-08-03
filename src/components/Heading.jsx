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
      <div className="flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8">
        <h1 className="font-flamenco text-theme-primary text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-center lg:text-left">
          {props.title}
        </h1>
        <p className="text-lg w-10/12 mx-auto md:w-8/12 lg:w-6/12 lg:mx-0">
          {props.paragraph}
        </p>
      </div>
    </div>
  );
}

export { Heading as default, getHeading };
