import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ScrollToTop from "./ScrollRestore";

const navigation = [
  { name: "Home", to: "/", current: true },
  { name: "Projects", to: "/projects", current: false },
  { name: "About", to: "/about", current: false },
  { name: "Contact", to: "/contact", current: false },
];

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 70);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  function handleHamburger(e) {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <ScrollToTop />
      <Disclosure
        as="nav"
        className={`bg-gray-100 fixed w-full z-50 top-0 shadow-md mb-16`}
        onClick={setVisible}
      >
        {({ close }) => (
          <>
            <div className="lg:max-w-7xl lg:w-11/12 mx-auto px-2 sm:px-8 md:px-10 lg:px-0">
              <div
                className={`relative flex items-center justify-between h-16 ${
                  visible ? "h-16" : "h-[2.5rem]"
                } transition-all`}
              >
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button
                    onClick={handleHamburger}
                    className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-theme-primary focus:outline-none
                    ${visible ? "" : "p-1 m-1"}
                    `}
                  >
                    <span className="sr-only">Open main menu</span>
                    {menuOpen ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                  <div className="flex-shrink-0 flex items-center">
                    <NavLink key={"logoHomeSm"} to={"/"}>
                      <div
                        className={`border-2 bg-white hover:bg-theme-primary border-slate-300 hover:border-slate-200 text-theme-primary hover:text-white transition rounded-full w-12 h-12 pt-1 pl-[.1rem] ${
                          visible ? "" : "h-[2rem] w-[2rem] pt-0"
                        }`}
                      >
                        <h4
                          className={`block font-flamenco text-center text-3xl ${
                            visible ? "text-3xl" : "text-xl"
                          }`}
                        >
                          JC
                        </h4>
                      </div>
                    </NavLink>
                  </div>
                  <div className="hidden sm:block sm:ml-6 my-auto">
                    <div className="flex space-x-4 items-center">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.to}
                          className={({ isActive }) =>
                            `text-xl font-flamenco transition-all px-3 py-2 rounded-md ${
                              isActive
                                ? "text-theme-primary hover:text-slate-500 font-semibold"
                                : "text-gray-700 hover:bg-theme-primary hover:text-white"
                            } ${visible ? "" : "text-lg py-0"}`
                          }
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
            >
              <Disclosure.Panel className="sm:hidden">
                <div
                  onClick={handleHamburger}
                  className="px-2 pt-2 pb-3 space-y-1"
                >
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        `text-[1.7rem] leading-8 font-flamenco ${
                          isActive
                            ? "bg-theme-primary text-white font-medium"
                            : "text-gray-700 hover:bg-slate-500 hover:text-white"
                        } block px-3 py-2 rounded-md font-medium text-right`
                      }
                      aria-current={item.current ? "page" : undefined}
                      onClick={close}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Header;
