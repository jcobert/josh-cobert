import React from "react";
import Heading, { getHeading } from "../Heading";

function Projects() {
  const heading = getHeading("Projects");
  return (
    <div>
      <div className="page-wrapper">
        <Heading
          key={heading.id}
          title={heading.title}
          paragraph={heading.paragraph}
        />
      </div>
    </div>
  );
}

export default Projects;
