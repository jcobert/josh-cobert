import React from "react";
import Heading, { getHeading } from "../Heading";

function About() {
  const heading = getHeading("About");
  return (
    <div>
      <div className="page-wrapper">
        <div className="mb-6 sm:mb-10 md:mb-12">
          <Heading
            key={heading.id}
            title={heading.title}
            paragraph={heading.paragraph}
          />
        </div>
        <div className="flex flex-col gap-y-4 sm:gap-y-6 w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 mx-auto lg:mx-0">
          <p>
            I am an all-around techy guy, with a love of designing and creating
            things. As a developer, I am always striving to automate and makes
            things as modular as possible. I believe that clean and intuitive
            frontends are a must, as is an efficient and reliable backend.
          </p>
          <p>
            I have experience as an IT consultant and know infrastructure very
            well. I enjoy solving problems and finding solutions that are
            thoughtfully tailored to a particular case.
          </p>
          <p>
            In addition to writing code, I also enjoy writing songs and making
            music that people can groove to.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
