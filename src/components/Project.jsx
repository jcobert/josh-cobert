import React from "react";
import Heading, { getHeading } from "./Heading";
import projects from "../data/projects.json";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/solid";

function Project(props) {
  const location = useLocation();
  return (
    <div>
      <div className="page-wrapper">
        <div>
          <Link to={"/projects"} className="flex text-lg">
            <ChevronLeftIcon className="w-6" />
            <p>All projects</p>
          </Link>
        </div>
        <Heading key={location.key} title={location.state} />
      </div>
    </div>
  );
}

export default Project;
