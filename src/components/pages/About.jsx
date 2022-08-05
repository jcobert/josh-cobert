import React from "react";
import Heading, { getHeading } from "../Heading";

function About() {
  const heading = getHeading("About");
  return (
    <div>
      <div className="page-wrapper">
        <div className="mb-14 sm:mb-20 md:mb-24">
          <Heading
            key={heading.id}
            title={heading.title}
            paragraph={heading.paragraph}
          />
        </div>
        <div className="flex flex-col gap-y-10 sm:gap-y-16 text-md md:text-lg w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 mx-auto">
          <div className="lg:relative xl:left-20">
            <div
              className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 mb-4 mx-auto sm:ml-0 sm:mr-4 sm:my-auto float-none sm:float-left bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url("/img/flaticons/about-1.svg")` }}
            ></div>
            <p className="md:pt-4 lg:pt-2 md:pl-12 lg:pl-16">
              I am an all-around techy guy, with a love of designing and
              creating things. As a developer, I am always striving to automate
              and makes things as modular as possible. I believe that clean and
              intuitive frontends are a must, as is an efficient and reliable
              backend.
            </p>
          </div>
          <div className="">
            <div
              className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 mb-4 mx-auto sm:ml-0 sm:mr-4 md:mr-0 md:ml-4 sm:my-auto float-none sm:float-left md:float-right bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url("/img/flaticons/about-2.svg")` }}
            ></div>
            <p className="md:pt-4 lg:pt-2">
              I have experience as an IT project manager and know infrastructure
              very well. I enjoy solving problems and finding solutions that are
              thoughtfully tailored to a particular case.
            </p>
          </div>
          <div className="lg:relative xl:right-20">
            <div
              className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 mb-4 mx-auto sm:ml-0 sm:mr-4 sm:my-auto float-none sm:float-left bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url("/img/flaticons/about-3.svg")` }}
            ></div>
            <p className="md:pt-4 lg:pt-2 md:pl-12 lg:pl-16">
              In addition to writing code, I also enjoy writing songs and making
              music that people can groove to.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
