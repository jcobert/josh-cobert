import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-slate-700 text-white mt-24 py-8 flex flex-col gap-y-8 items-center">
      {/* Links */}
      <div class="text-3xl flex gap-x-16">
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
      <div class="">
        <p id="copyright" class="">&#9935;{' '+currentYear} Josh Cobert</p>
      </div>
    </div>
  );
}

export default Footer;
