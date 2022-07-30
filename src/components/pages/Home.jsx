import React from "react";
import Heading from "../Heading";
import Card from "../Card";
import projects from "../../data/projects.json";

function Home() {
  return (
    <div>
      <div className="lg:max-w-6xl lg:w-11/12 mx-auto mt-24 sm:mt-32 md:mt-40">
        <Heading />
      </div>
      <div>
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
