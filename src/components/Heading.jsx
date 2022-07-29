import React from "react";

function Heading() {
  return (
    <div>
      <div className="flex flex-col gap-y-8 md:gap-y-10">
        <h1 className="font-flamenco text-theme-primary text-4xl md:text-6xl lg:text-7xl text-center lg:text-left">
          Hey, I'm Josh Cobert
        </h1>
        <p className="text-lg w-10/12 mx-auto md:w-8/12 lg:w-6/12 lg:mx-0">
          Thanks for paying me a visit. I am a software developer and creative
          professional. I like long walks on the beach and refactoring code.
          Please check out some of the projects I have worked on and feel free
          to reach out if you'd like to collaborate!
        </p>
      </div>
    </div>
  );
}

export default Heading;
