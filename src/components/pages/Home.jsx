import React from "react";
import Heading, { getHeading } from "../Heading";
import { CardPreview } from "../Card";
import projects from "../../data/projects.json";
import { Link } from "react-router-dom";
import {
  ChevronDoubleDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";

function Home() {
  const heading = getHeading("Home");
  const projectCards = [];
  const featuredCount = 3;

  projects.map((p) =>
    projectCards.push(
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
    )
  );

  return (
    <div>
      <div className="page-wrapper">
        <Heading
          key={heading.id}
          title={heading.title}
          paragraph={heading.paragraph}
        />
      </div>
      <div className="flex flex-col items-center gap-y-8 text-xl text-theme-primary font-medium mt-14 md:mt-20 lg:mt-24 mb-12">
        <h4 className="text-slate-600">Some of my projects...</h4>
        <ChevronDoubleDownIcon className="w-8 text-slate-400" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 px-2 md:px-0 lg:max-w-7xl gap-y-14 sm:gap-y-16 gap-x-6 mx-auto">
        {projectCards.slice(0, featuredCount)}
        {/* Show all button */}
        <div className="px-8 self-center lg:col-start-2">
          <div className="bg-theme-primary hover:bg-slate-500 text-white text-xl font-medium w-full sm:w-6/12 md:w-full h-20 mx-auto mt-4 mb-8 rounded-md border border-white hover:border-theme-primary transition-all">
            <Link to={"/projects"} className="flex justify-center h-full">
              <p className="self-center">All projects</p>
              <div className="self-center">
                <ChevronRightIcon className="w-6" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
