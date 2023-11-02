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
        <div className="grid grid-cols-1 lg:grid-cols-8">
          <div className="lg:col-span-5">
            <Heading
              key={heading.id}
              title={heading.title}
              paragraph={heading.paragraph}
            />
          </div>
          {/* Photo */}
          <div className="w-full lg:col-span-3">
            <div
              className="w-40 h-40 mx-auto bg-center bg-no-repeat bg-cover border-4 rounded-full shadow-lg h- md:h-48 md:w-48 lg:h-64 lg:w-64 border-slate-300"
              style={{ backgroundImage: 'url("/img/photos/headshot.jpg")' }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 mb-12 text-xl font-medium gap-y-8 text-theme-primary md:mt-16 lg:mt-24">
        <h4 className="text-slate-600">Some of my projects...</h4>
        <ChevronDoubleDownIcon className="w-8 text-slate-400 motion-safe:animate-bounce" />
      </div>
      <div className="grid w-11/12 grid-cols-1 px-2 mx-auto md:grid-cols-2 lg:grid-cols-3 md:px-0 lg:max-w-7xl gap-y-14 sm:gap-y-16 gap-x-6">
        {projectCards.slice(0, featuredCount)}
        {/* Show all button */}
        <div className="self-center px-8 lg:col-start-2">
          <div className="w-full h-20 mx-auto mt-4 mb-8 text-xl font-medium text-white transition-all border border-white rounded-md bg-theme-primary hover:bg-slate-500 sm:w-6/12 md:w-full hover:border-theme-primary">
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
