import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <div className="text-center">
      <div className="bg-slate-50 md:w-11/12 md:max-w-2xl mx-auto rounded-xl border border-slate-400 shadow-md">
        {/* Title */}
        <div className="py-4 font-bold text-xl md:text-2xl text-theme-primary bg-white rounded-xl rounded-b-none shadow-sm">
          <h4>{props.title}</h4>
        </div>
        {/* Body */}
        <div className="flex flex-col gap-y-6 text-left px-8 py-4">
          {/* Description */}
          <p>{props.descriptionShort}</p>
          {/* Technologies */}
          <div className="">
            <h5 className="font-medium">Technologies</h5>
            <ul className="list-disc list-outside pl-8 pt-2">
              <li>React</li>
              <li>Redux</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
        {/* CTA */}
        <div className="bg-gray-50 hover:bg-theme-primary text-slate-700 hover:text-white font-medium w-96 sm:w-72 md:w-48 h-16 md:h-12 mx-auto my-8 rounded-md border border-theme-primary hover:border-white transition-all">
          <NavLink to={"/projects"} className="flex justify-center h-full">
            <p className="self-center">Check it out</p>
            <div className="self-center">
              <ChevronRightIcon className="w-6" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Card;
