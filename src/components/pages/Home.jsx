import React from "react";
import Heading, { getHeading } from "../Heading";
import Card from "../Card";
import projects from "../../data/projects.json";
import { ChevronDoubleDownIcon } from "@heroicons/react/outline";

function Home() {
  const heading = getHeading("Home");

  return (
    <div>
      <div className="lg:max-w-7xl lg:w-11/12 mx-auto mt-24 sm:mt-32 md:mt-40">
        <Heading
          key={heading.id}
          title={heading.title}
          paragraph={heading.paragraph}
        />
      </div>
      <div className="flex flex-col items-center gap-y-6 text-2xl text-theme-primary font-medium mt-12 md:mt-20 mb-12">
        <h4 className="text-slate-700">Some of my projects...</h4>
        <ChevronDoubleDownIcon className="w-8 text-slate-400" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 lg:max-w-7xl gap-y-14 sm:gap-y-16 gap-x-6 mx-auto">
        {projects.map((p) => (
          <Card
            key={p.id}
            title={p.title}
            descriptionShort={p.descriptionShort}
            descriptionLong={p.descriptionLong}
            details={p.details}
            technologies={p.technologies}
            img={p.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
