import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-slate-700">
      <div className="md:max-w-7xl md:w-11/12 mx-auto text-white mt-24 py-8 md:py-4 flex flex-col md:flex-row gap-y-8 md:justify-between items-center">
        {/* Links */}
        <div class="text-3xl md:text-xl flex gap-x-16 md:gap-x-12">
          <a
            class="hover:text-blue-300 transition-all"
            href="https://www.linkedin.com/in/joshua-cobert/"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            class="hover:text-blue-300 transition-all"
            href="https://github.com/jcobert"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            class="hover:text-blue-300 transition-all"
            href="mailto:josh@joshcobert.com"
          >
            <i class="fas fa-envelope"></i>
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-y-8 gap-x-8 items-center">
          {/* CTA */}
          <div class="">
            <a
              class="flex items-center gap-x-3 text-blue-300 hover:text-slate-100 transition-all"
              href="https://github.com/jcobert/josh-cobert"
            >
              <i class="fas fa-code"></i>
              <p>View the source code</p>
            </a>
          </div>
          {/* Credit */}
          <div class="">
            <p id="copyright" class="">
              &#128736;{" " + currentYear} Josh Cobert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
