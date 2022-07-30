import React from "react";
import Heading from "../Heading";
import Card from "../Card";

function Home() {
  return (
    <div>
      <div className="lg:max-w-6xl lg:w-11/12 mx-auto mt-24 sm:mt-32 md:mt-40">
        <Heading />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default Home;
