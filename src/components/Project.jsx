import React from "react";
// import projects from "../data/projects.json";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/solid";

function Project(props) {
  const state = useLocation().state;
  return (
    <div>
      <div className="page-wrapper md:mt-32">
        {/* Nav */}
        <div>
          <Link to={"/projects"} className="flex text-lg">
            <ChevronLeftIcon className="w-6" />
            <p>All projects</p>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-5 mt-8 md:mt-20">
          {/* Heading */}
          <div className="flex flex-col gap-y-8 md:gap-y-10 lg:col-span-2">
            <h1 className="font-quicksand text-theme-primary text-[2.5rem] sm:text-5xl md:text-6xl xl:text-7xl text-center lg:text-left">
              {state.title}
            </h1>
            <p className="text-lg w-10/12 mx-auto md:w-8/12 lg:w-full lg:mx-0">
              {state.descriptionShort}
            </p>
          </div>
          <div className="lg:col-start-3 lg:col-span-3 w-full lg:w-11/12 mx-auto">
            {/* Preview Image */}
            <div
              className="h-60 lg:h-72 md:h-full bg-cover border shadow-sm"
              style={{ backgroundImage: `url(${state.img})` }}
            ></div>
          </div>
        </div>
        <div className="mt-12 lg:grid grid-cols-5">
          {/* Technologies */}
          <div className="flex flex-col gap-y-6 py-4 lg:col-span-2">
            <h5 className="font-medium text-slate-700 text-center border border-x-0">
              Technologies
            </h5>
            <div className="flex flex-wrap justify-around gap-x-8 gap-y-8">
              {state.technologies.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-x-2 gap-y-1 w-3/12"
                >
                  <i class={`${t.icon} text-4xl`}></i>
                  <p className="text-center text-sm md:text-[1rem] whitespace-nowrap">
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Description */}
          <div className="lg:col-start-3 col-span-3 lg:w-11/12 m-auto px-8 md:px-8 mt-4">
            <Details key={state.key} descriptionLong={state.descriptionLong} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Details(props) {
  return (
    <div>
      <div className="flex flex-col gap-y-8 text-md sm:text-lg">
        <div>
          <p className="lg:px-2">{props.descriptionLong}</p>
        </div>
        <ul className="list-disc list-outside pl-8">
          <li>Use it to study up before a party.</li>
          <li>
            Discreetly open it up while you're at the bar and see one of your
            new boyfriend's buddies approaching.
          </li>
        </ul>
        <div>
          <p>
            Check out the live demo at{" "}
            <a href="https://whosthat.io">whosthat.io</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export { Project, Details };
