import React from "react";
import Heading, { getHeading } from "../Heading";
import projects from "../../data/projects.json";
import { CardFull } from "../Card";

function Projects() {
  const heading = getHeading("Projects");
  return (
    <div>
      <div className="page-wrapper">
        <div>
          <Heading
            key={heading.id}
            title={heading.title}
            paragraph={heading.paragraph}
          />
        </div>
        <div className="flex flex-col w-10/12 xl:w-9/12 mx-auto gap-y-14 sm:gap-y-16">
          {projects.map((p) => (
            <CardFull
              key={p.id}
              title={p.title}
              descriptionShort={p.descriptionShort}
              descriptionLong={p.descriptionLong}
              details={p.details}
              technologies={p.technologies}
              img={p.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
