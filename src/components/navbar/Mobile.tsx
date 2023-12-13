import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ChangeEventHandler, useState } from "react";
import Auth from "../misc/Auth";

interface NavItemProps {
  href: string;
  title: string;
  handleToggle: () => void;
}

type Theme = "light" | "dark";

const NavItem = ({ href, title, handleToggle }: NavItemProps) => {
  const handleLinkClick = () => {
    handleToggle();
    document
      .getElementById(href.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <li
      className="py-3 border-1 rounded-lg my-4 flex items-center justify-center hover:bg-orange-600 hover:bg-opacity-10 cursor-pointer after:bg-orange-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-700 after:ease-in-out after:delay-6"
      onClick={handleLinkClick}
    >
      <a
        href={href}
        role="link"
        title={title}
        className="sm:text-sm md:text-base lg:text-lg xl:text-xl dark:text-zinc-200 text-zinc-800 dark:text-whit cursor-pointer font-semibold"
      >
        {title}
      </a>
    </li>
  );
};

interface MobileProps {
  cb?: () => void;
  themeChangeFn: ChangeEventHandler<HTMLInputElement>;
  getInitialTheme: () => Theme;
  theme: Theme;
}

export default function Mobile({ cb, themeChangeFn, theme }: MobileProps) {
  const [parent] = useAutoAnimate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative py-3 sm:max-w-5xl ml-auto sm:hidden scale-125">
        <nav>
          <button
            className={`text-black dark:text-white w-10 h-10 relative focus:outline-none shadow-inner hover:text-orange-600 hover:scale-125 transform transition duration-500 ease-in-out bg-transparent ${
              open ? "open" : ""
            }`}
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open Menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  open ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  open ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
          <ul
            ref={parent}
            className={`absolute top-14 right-3 w-[7rem] bg-white/30 dark:bg-zinc-800/90 backdrop-blur-md shadow-lg rounded-lg  transform transition duration-500 ease-in-out ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {open && (
              <>
                <div className="flex flex-col mx-2">
                  <NavItem href="#home" title="Home" handleToggle={cb} />
                  <NavItem
                    href="#features"
                    title="Features"
                    handleToggle={cb}
                  />
                  <NavItem href="#about" title="About" handleToggle={cb} />
                  <Auth mobile={open} />

                  <label className="swap swap-rotate mb-4">
                    <input
                      type="checkbox"
                      className="theme-controller"
                      value={theme}
                      onChange={themeChangeFn}
                    />
                    {theme === "dark" ? (
                      <>
                        <svg
                          className="swap-on fill-white w-10 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                        <svg
                          className="swap-off fill-white w-10 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,
                                                    1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg
                          className="swap-on fill-zinc-800 w-10 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,
                                                        1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                          />
                        </svg>
                        <svg
                          className="swap-off fill-zinc-800 w-10 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,
                                                        1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1
                                                        ,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,
                                                        3.5,0,0,1,12,15.5Z"
                          />
                        </svg>
                      </>
                    )}
                  </label>
                </div>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}
