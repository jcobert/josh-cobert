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
        <div className="w-fit">
          <Link
            to={"/projects"}
            className="flex text-lg text-theme-primary hover:text-slate-700 transition-all"
          >
            <ChevronLeftIcon className="w-6" />
            <p>All projects</p>
          </Link>
        </div>
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-rows-1 gap-y-10 lg:gap-y-10 lg:mb-16 xl:mb-20 md:grid-cols-2 lg:grid-cols-5 mt-8 md:mt-20">
          {/* Title */}
          <div className="flex flex-col gap-y-8 md:gap-y-10 lg:col-span-2">
            <h1 className="font-quicksand text-theme-primary text-[2.5rem] sm:text-5xl md:text-6xl xl:text-7xl text-center md:text-left">
              {state.title}
            </h1>
            <p className="text-lg w-10/12 md:w-full md:pr-4 mx-auto lg:mx-0">
              {state.descriptionShort}
            </p>
          </div>
          {/* Preview Image */}
          <div className="lg:col-start-3 lg:col-span-3 lg:row-span-2 w-11/12 lg:w-11/12 mx-auto lg:mt-4 xl:mb-12 md:mr-0">
            <div
              className="h-60 md:h-52 lg:h-72 xl:h-80 bg-cover border shadow-md md:shadow-lg"
              style={{ backgroundImage: `url(${state.img})` }}
            ></div>
          </div>
          {/* Technologies */}
          <div className="flex flex-col gap-y-6 py-4 md:col-span-2 lg:col-span-2 w-11/12 md:w-10/12 lg:w-11/12 mx-auto lg:mx-0 md:mt-2 lg:mt-10 lg:py-0">
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
        </div>
        {/* <div className="mt-12 lg:grid grid-cols-5"> */}
        {/* <div className="mt-12"></div> */}
        {/* Details */}
        <div className="lg:col-start-3 col-span-3 lg:w-11/12 m-auto px-8 md:px-8 mt-4">
          <Details key={state.key} state={state} />
        </div>
      </div>
    </div>
  );
}

function Details(props) {
  let content = "";
  switch (props.state.title) {
    case "Who's That?":
      content = (
        <div className="flex flex-col gap-y-8 text-md sm:text-lg">
          <ul className="list-disc list-outside pl-8">
            <li>Use it to study up before a party.</li>
            <li>
              Discreetly open it up while you're at the bar and see one of your
              new boyfriend's buddies approaching.
            </li>
          </ul>
          <div className="text-lg font-medium">
            <p>
              Check out the live demo at{" "}
              <a
                className="text-theme-primary hover:text-slate-400 transition-all"
                href="https://whosthat.io"
              >
                whosthat.io
              </a>
            </p>
          </div>
        </div>
      );
      break;

    case "Geoguessr Map Creator":
      content = (
        <div className="flex flex-col gap-y-8 text-md sm:text-lg">
          <div>
            <h4 className="font-medium text-lg mb-2">Background</h4>
            <div className="flex flex-col gap-y-4">
              <p>
                When my friend showed me the Geoguessr game, I instantly fell in
                love with the concept. If you’re not familiar, the premise is
                that you are placed in a random location in the world in Google
                street view. You then have to guess exactly where you are by
                looking around.
              </p>
              <p>
                There is a feature to create a custom game by choosing locations
                on a map that you can then share and play with others. The
                problem with this is that if you want to play a map that you
                have created, you will know the locations in advance. What fun
                is a game that you’re guaranteed to win?
              </p>
              <p>
                I noticed that they included an option to import a CSV file with
                coordinates, as an alternative to picking points on the map. I
                saw this as an opportunity to automate the custom map creation
                and allow myself to play the games as well as others. By having
                the computer pick the locations at random, I could play along
                with my friends and be at no advantage.
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-2">How it Works</h4>
            <div className="flex flex-col gap-y-4">
              <p>
                The program works by randomly generating a pair of
                latitude/longitude coordinates, querying that location against
                the Google Maps Street View API to check if it exists, and
                saving each valid location in a CSV file. This file can then be
                imported into Geoguessr when creating a custom map.
              </p>
              <p>
                For more information on the Google Maps API, visit: <br></br>
                <a
                  className="text-theme-primary hover:text-slate-600 transition-all"
                  href="https://developers.google.com/maps/documentation/streetview/overview"
                >
                  developers.google.com/maps/documentation/streetview/overview
                </a>
              </p>
              <p>
                For more information on Geoguessr and to play, visit: <br></br>
                <a
                  className="text-theme-primary hover:text-slate-600 transition-all"
                  href="https://www.geoguessr.com"
                >
                  geoguessr.com
                </a>
              </p>
            </div>
          </div>
        </div>
      );
      break;

    default:
      break;
  }

  return (
    <div>
      <div className="flex flex-col gap-y-8 text-md sm:text-lg lg:w-11/12 xl:w-10/12 mx-auto mt-2 sm:mt-6">
        <div>
          <p className="">{props.state.descriptionLong}</p>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
}

export { Project, Details };
