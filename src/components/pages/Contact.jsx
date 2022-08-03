import React from "react";
import Heading, { getHeading } from "../Heading";

function Contact() {
  const heading = getHeading("Contact");
  return (
    <div>
      <div className="page-wrapper">
        <div className="mb-14 sm:mb-20 md:mb-24">
          <Heading
            key={heading.id}
            title={heading.title}
            paragraph={heading.paragraph}
          />
        </div>
        {/* Links */}
        <div className="flex flex-col gap-y-12">
          <div className="text-xl">
            <a
              class="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-y-2 gap-x-4 text-theme-primary hover:text-slate-600 transition-all"
              href="mailto:josh@joshcobert.com"
            >
              <i class="fas fa-envelope text-4xl"></i>
              <p>Send me an email</p>
            </a>
          </div>
          <div className="text-xl">
            <a
              class="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-y-2 gap-x-4 text-theme-primary hover:text-slate-600 transition-all"
              href="https://www.linkedin.com/in/joshua-cobert"
            >
              <i class="fab fa-linkedin text-4xl"></i>
              <p>Connect on LinkedIn</p>
            </a>
          </div>
          <div className="text-xl">
            <a
              class="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-y-2 gap-x-4 text-theme-primary hover:text-slate-600 transition-all"
              href="https://github.com/jcobert"
            >
              <i class="fab fa-github text-4xl"></i>
              <p>Clone me</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
