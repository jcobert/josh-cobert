import React from "react";
import projects from "../data/projects.json";
import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/solid";

function Project(props) {
  let { projectId } = useParams();

  if (!projects.map((p) => p.id.toString()).includes(projectId)) {
    return <Navigate to={"/projects"} />;
  }
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
              {projects[projectId].title}
            </h1>
            <p className="text-lg w-10/12 md:w-full md:pr-4 mx-auto lg:mx-0">
              {projects[projectId].descriptionShort}
            </p>
          </div>
          {/* Preview Image */}
          <div className="lg:col-start-3 lg:col-span-3 lg:row-span-2 w-11/12 lg:w-11/12 mx-auto lg:mt-4 xl:mb-12 md:mr-0">
            <div
              className="h-60 md:h-52 lg:h-72 xl:h-80 bg-cover border shadow-md md:shadow-lg"
              style={{ backgroundImage: `url(${projects[projectId].img})` }}
            ></div>
          </div>
          {/* Technologies */}
          <div className="flex flex-col gap-y-6 py-4 md:col-span-2 lg:col-span-2 w-11/12 md:w-10/12 lg:w-11/12 mx-auto lg:mx-0 md:mt-2 lg:mt-10 lg:py-0">
            <h5 className="font-medium text-slate-700 text-center border border-x-0">
              Technologies
            </h5>
            <div className="flex flex-wrap justify-around gap-x-8 gap-y-8">
              {projects[projectId].technologies.map((t, i) => (
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
        {/* Details */}
        <div className="lg:col-start-3 col-span-3 lg:w-11/12 m-auto px-8 md:px-8 mt-4">
          <Details
            key={projects[projectId].id}
            title={projects[projectId].title}
            descriptionLong={projects[projectId].descriptionLong}
          />
        </div>
      </div>
    </div>
  );
}

function Details(props) {
  let content = "";

  switch (props.title) {
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
                className="text-theme-primary hover:text-slate-600 transition-all"
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
            <h4 className="font-medium text-lg md:text-xl mb-2">Background</h4>
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
            <h4 className="font-medium text-lg md:text-xl mb-2">
              How it Works
            </h4>
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
                  developers.google.com/maps
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
              <p>
                <i class="fab fa-github text-slate-700"></i> View the code on{" "}
                <a
                  className="text-theme-primary hover:text-slate-600 transition-all"
                  href="https://github.com/jcobert/map-maker"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      );
      break;

    case "Live Stream Configurator":
      content = (
        <div className="flex flex-col gap-y-8 text-md sm:text-lg">
          <div>
            <h4 className="font-medium text-lg md:text-xl mb-2">Background</h4>
            <div className="flex flex-col gap-y-4">
              <p>
                As the 2020 pandemic shook the world and my musician father
                could no longer perform live, he decided to take to the virtual
                stage. He began performing and broadcasting concerts through the
                Facebook Live platform, which brought with it a unique set of
                challenges.
              </p>
              <p>
                The process of starting a live stream through Facebook’s web
                portal and configuring the streaming software on the computer
                turned out to be a bit cumbersome and frustrating at times.
                Through the web portal, you generate a stream key, which you
                then enter into the settings of your streaming software to start
                the broadcast. Many times, however, the web page would not load
                or became unresponsive, which would derail the whole endeavor.
              </p>
              <p>
                I knew there had to be a more efficient and reliable way to
                achieve this task and after a little bit of research, I
                familiarized myself with Facebook’s API and created an applet to
                programmatically generate and retrieve a stream key.
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-lg md:text-xl mb-2">
              How it Works
            </h4>
            <div className="flex flex-col gap-y-4">
              <p>
                The program works by sending a POST request to the Facebook Live
                Video API, passing along parameters such as title and
                description for the live stream. A JSON object is returned,
                which includes the secure stream URL.
              </p>
              <p>
                In the case of configuring OBS for Facebook streaming, the
                Facebook Live URL is predefined and only the stream key must be
                entered. This program parses the stream key from the JSON data
                and copies it to the clipboard so it can be easily pasted into
                your streaming software.
              </p>
              <p>
                For more information on the Facebook Live API, visit: <br></br>
                <a
                  className="text-theme-primary hover:text-slate-600 transition-all"
                  href="https://developers.facebook.com/docs/live-video-api/"
                >
                  developers.facebook.com
                </a>
              </p>
              <p>
                For more information on OBS, visit: <br></br>
                <a
                  className="text-theme-primary hover:text-slate-600 transition-all"
                  href="https://obsproject.com/"
                >
                  obsproject.com
                </a>
              </p>
              <p>
                <i class="fab fa-github text-slate-700"></i> View the code on{" "}
                <a
                  className="text-theme-primary hover:text-slate-600 transition-all"
                  href="https://github.com/jcobert/facebook-live"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      );
      break;

    case "65 Pool":
      content = (
        <div className="flex flex-col gap-y-8 text-md sm:text-lg">
          <div>
            <h4 className="font-medium text-lg md:text-xl mb-2">Background</h4>
            <div className="flex flex-col gap-y-4">
              <p>
                This site is a web adaptation of a competition by the same name.
                I don't know the full history, but I was introduced to 65 Pool
                by my friend whose father had started this annual NFL playoff
                pool with friends and family decades prior. I eventually got
                invited to participate and have been playing every year since.
              </p>
              <p>
                The concept is as follows:
                <ul className="pl-4 list-disc list-outside">
                  <li>People buy in for $65, which forms the prize pot.</li>
                  <li>It lasts the duration of the NFL postseason.</li>
                  <li>
                    Each round of the playoffs, you make three picks for each
                    game - winner, over/under, and spread.
                  </li>
                  <li>
                    You get points for each correct pick and a running total is
                    kept.
                  </li>
                  <li>
                    The person with the most points at the end of the season
                    wins.
                  </li>
                </ul>
              </p>
              <p>
                Each year, someone organizes this 65 Pool and the process has
                much room for improvement. The organizer writes down the game
                lines on a piece of paper each week and sends out a photo of it.
                We make our picks and either send them back via email, text, or
                carrier pigeon - sometimes by proxy if the participant isn't in
                direct communication with the organizer. The organizer maintains
                a spreadhseet with all participants, their picks, and points.
                You can see how there is room for error and unnecessary burden
                on the organizer.
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-lg md:text-xl mb-2">Inspiration</h4>
            <p>
              This is a project I started working on with my good friend and
              veteran software engineer,{" "}
              <a
                className="text-theme-primary hover:text-slate-600 transition-all"
                href="https://github.com/jmagardino"
              >
                Joe Magardino
              </a>
              . After participating in 65 Pool for several years - witnessing
              the inefficiencies and opportunities for improvement - we decided
              to bring this game into the 21st century. By creating a
              centralized platform, we are looking to streamline workflows, open
              the door to new features, and maximize the potential of this great
              concept. For me, this has been a great way to learn functional
              programming with Elixir and explore the Phoenix framework.
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <p>
              If you're not familiar with Phoenix{" "}
              <i className="text-2xl devicon-phoenix-plain colored align-middle"></i>
              {" , "}I highly recommend you{" "}
              <a
                className="text-theme-primary hover:text-slate-600 transition-all"
                href="https://www.phoenixframework.org/"
              >
                check it out.
              </a>
            </p>
            <p>
              Note: This project is still in development, but you can follow
              along with us on{" "}
              <a
                className="text-theme-primary hover:text-slate-600 transition-all"
                href="https://github.com/jmagardino/65-pool"
              >
                <i class="fab fa-github"></i> GitHub
              </a>
              .
            </p>
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
          <p className="">{props.descriptionLong}</p>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
}

export { Project, Details };
