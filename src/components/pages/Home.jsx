import React from "react";
import Heading from "../Heading";
import Card from "../Card";
import projects from "../../data/projects.json";

function Home() {
  return (
    <div>
      <div className="lg:max-w-6xl lg:w-11/12 mx-auto mt-24 sm:mt-32 md:mt-40 mb-12">
        <Heading />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 lg:max-w-6xl gap-y-10 sm:gap-y-12 gap-x-6 mx-auto">
        {projects.map((p) => (
          <Card 
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
  );
}

export default Home;
