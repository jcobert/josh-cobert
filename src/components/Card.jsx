import React from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";

function CardPreview(props) {
  return (
    <div className="text-center">
      <div className="bg-slate-50 md:max-w-2xl mx-auto rounded-xl border round border-slate-400 shadow-md">
        {/* Title */}
        <div className="py-4 font-semibold text-2xl md:text-2xl text-white bg-theme-primary rounded-[.685rem] rounded-b-none shadow-sm">
          <h4>{props.title}</h4>
        </div>
        {/* Body */}
        <div className="flex flex-col gap-y-6 text-left px-8 pt-6 md:pt-8">
          {/* Description */}
          <p className="text-md sm:text-lg">{props.descriptionShort}</p>
          {/* Preview Image */}
          <div
            className="h-36 bg-cover border shadow-sm w-full mx-auto"
            style={{ backgroundImage: `url(${props.img})` }}
          ></div>
          {/* Technologies */}
          <div className="flex flex-col gap-y-6 py-4">
            <h5 className="font-medium text-slate-700 text-center border border-x-0">
              Technologies
            </h5>
            <div className="flex flex-wrap justify-around gap-x-8 gap-y-8">
              {props.technologies.map((t, i) => (
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
            {/* CTA */}
            <div className="bg-gray-50 hover:bg-theme-primary text-theme-primary hover:text-white font-medium w-full sm:w-6/12 md:w-full h-16 md:h-12 mx-auto mt-4 mb-8 rounded-md border border-theme-primary hover:border-white transition-all">
              <NavLink to={"/projects"} className="flex justify-center h-full">
                <p className="self-center">Check it out</p>
                <div className="self-center">
                  <ChevronRightIcon className="w-6" />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardFull(props) {
  return (
    <div className="text-center">
      <div className="bg-slate-50 md:max-w-full mx-aut pb-2 sm:pb-4 md:pb-6 lg:pb-12 rounded-xl border round border-slate-400 shadow-md">
        {/* Title */}
        <div className="py-4 font-semibold text-2xl md:text-2xl text-white bg-theme-primary rounded-[.685rem] rounded-b-none shadow-sm">
          <h4>{props.title}</h4>
        </div>
        {/* Body */}
        <div className="flex flex-col gap-y-6 text-left px-8 pt-6 md:pt-8 lg:p-12 lg:pb-2">
          <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2">
            {/* Description */}
            <p
              className="text-md sm:text-lg lg:px-2"
              dangerouslySetInnerHTML={{ __html: props.descriptionLong }}
            ></p>
            {/* Preview Image */}
            <div
              className="h-36 lg:h-48 bg-cover border shadow-sm w-full lg:w-11/12 mx-auto"
              style={{ backgroundImage: `url(${props.img})` }}
            ></div>
          </div>
          <div className="flex flex-col sm:gap-y-4 lg:flex-row lg:items-center lg:justify-around lg:w-full">
            {/* Technologies */}
            <div className="flex flex-col gap-y-6 py-4 lg:w-6/12">
              <h5 className="font-medium text-slate-700 text-center border border-x-0">
                Technologies
              </h5>
              <div className="flex flex-wrap justify-around gap-x-8 gap-y-8">
                {props.technologies.map((t, i) => (
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
            {/* Show More */}
            <div className="bg-gray-50 hover:bg-theme-primary text-theme-primary hover:text-white font-medium w-10/12 sm:w-6/12 md:w-48 h-16 md:h-12 mx-auto rounded-md border border-theme-primary hover:border-white transition-all">
              <button className="w-full h-full">
                <div className="flex gap-x-1 justify-center h-full mx-auto">
                  <p className="self-center">See more</p>
                  <div className="self-center">
                    <ChevronRightIcon className="w-6" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CardFull, CardPreview };
