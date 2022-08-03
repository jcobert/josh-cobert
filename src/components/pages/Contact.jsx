import React from "react";
import Heading, { getHeading } from "../Heading";

function Contact() {
  const heading = getHeading("Contact");
  return (
    <div>
      <div className="page-wrapper">
        <div className="mb-14 sm:mb-20 md:mb-24 lg:mb-32">
          <Heading
            key={heading.id}
            title={heading.title}
            paragraph={heading.paragraph}
          />
        </div>
        {/* Links */}
        <div className="flex flex-col lg:flex-row lg:justify-evenly gap-x-12 lg:gap-x-20 gap-y-12 md:gap-y-16 w-fit lg:w-10/12 mx-auto">
          <div className="text-xl flex-1">
            <a
              class="flex flex-col sm:flex-row lg:flex-col justify-center sm:justify-start items-center gap-y-2 lg:gap-y-4 gap-x-4 text-theme-primary hover:text-slate-600 transition-all"
              href="mailto:josh@joshcobert.com"
            >
              <i class="fas fa-envelope text-4xl lg:text-5xl text-slate-500 hover:text-theme-primary"></i>
              <p>Send me an email</p>
            </a>
          </div>
          <div className="text-xl flex-1">
            <a
              class="flex flex-col sm:flex-row lg:flex-col justify-center sm:justify-start items-center gap-y-2 lg:gap-y-4 gap-x-4 text-theme-primary hover:text-slate-600 transition-all"
              href="https://www.linkedin.com/in/joshua-cobert"
            >
              <i class="fab fa-linkedin text-4xl lg:text-5xl text-slate-500 hover:text-theme-primary"></i>
              <p>Connect on LinkedIn</p>
            </a>
          </div>
          <div className="text-xl flex-1">
            <a
              class="flex flex-col sm:flex-row lg:flex-col justify-center sm:justify-start items-center gap-y-2 lg:gap-y-4 gap-x-4 text-theme-primary hover:text-slate-600 transition-all"
              href="https://github.com/jcobert"
            >
              <i class="fab fa-github text-4xl lg:text-5xl text-slate-500 hover:text-theme-primary"></i>
              <p>Clone me</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
