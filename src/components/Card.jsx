import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";

function Card(props) {
  // Objects.props.technologies.forEach(t => {

  // });

  return (
    <div className="text-center">
      <div className="bg-slate-50 md:w-11/12 md:max-w-2xl mx-auto rounded-xl border border-slate-400 shadow-md">
        {/* Title */}
        <div className="py-4 font-bold text-xl md:text-2xl text-theme-primary bg-white rounded-xl rounded-b-none shadow-sm">
          <h4>{props.title}</h4>
        </div>
        {/* Body */}
        <div className="flex flex-col gap-y-6 text-left px-8 pt-6 md:pt-8">
          {/* Description */}
          <p className="text-md sm:text-lg">{props.descriptionShort}</p>
          {/* Technologies */}
          <div className="flex flex-col gap-y-6 py-4">
            {/* <h5 className="font-medium">Technologies</h5> */}
            <div className="flex flex-wrap justify-around gap-x-8 gap-y-8">
              {props.technologies.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-x-2 gap-y-1 w-3/12"
                >
                  <i class={`${t.icon} text-4xl`}></i>
                  <p className="text-center text-sm md:text-[1rem] whitespace-nowrap">{t.name}</p>
                </div>
              ))}
            </div>
            {/* CTA */}
            <div className="bg-gray-50 hover:bg-theme-primary text-slate-700 hover:text-white font-medium w-full sm:w-6/12 md:w-4/12 h-16 md:h-12 mx-auto mt-4 mb-8 rounded-md border border-theme-primary hover:border-white transition-all">
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

export default Card;
