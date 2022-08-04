import React from "react";
import Heading, { getHeading } from "../Heading";
import { CardPreview } from "../Card";
import projects from "../../data/projects.json";
import { ChevronDoubleDownIcon } from "@heroicons/react/outline";

function Home() {
  const heading = getHeading("Home");

  return (
    <div>
      <div className="page-wrapper">
        <Heading
          key={heading.id}
          title={heading.title}
          paragraph={heading.paragraph}
        />
      </div>
      <div className="flex flex-col items-center gap-y-6 text-xl text-theme-primary font-medium mt-12 md:mt-20 lg:mt-24 mb-16">
        <h4 className="text-slate-600">Some of my projects...</h4>
        <ChevronDoubleDownIcon className="w-8 text-slate-400" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 px-2 md:px-0 lg:max-w-7xl gap-y-14 sm:gap-y-16 gap-x-6 mx-auto">
        {projects.map((p) => (
          <CardPreview
            key={p.id}
            id={p.id}
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
