import { useEffect, useRef, useState } from "react";
import Auth from "../misc/Auth";
import Mobile from "./Mobile";

type Theme = "light" | "dark";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return savedTheme ?? "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const themeRef = useRef<Theme>(getInitialTheme());

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = themeRef.current === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    themeRef.current = newTheme;
  };

  return (
    <>
      <nav
        className={`navbar flex items-center justify-evenly p-6 bg-transparent dark:bg-transparent gap-4 sm:gap-72 md:gap-72 lg:gap-72 xl:gap-96 max-x-5xl mx-auto ${
          isSticky
            ? "sticky top-0 z-50 rounded-lg backdrop-filter backdrop-blur-md bg-white/5 dark:bg-zinc-950/5 border-b-[0.1px] border-zinc-800/10 dark:border-zinc-200/10"
            : ""
        }`}
        ref={navbarRef}
      >
        {/* Logo */}
        <div className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 dark:text-white">
          Beavs<span className="text-orange-600">AI</span>
        </div>
        {/* Mobile Nav */}
        <Mobile
          themeChangeFn={handleThemeChange}
          getInitialTheme={getInitialTheme}
          theme={theme}
        />
        {/* Desktop Nav */}
        <div
          className={`space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6 items-center justify-center hidden sm:flex`}
        >
          <a
            href="#home"
            role="link"
            title="Home"
            className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-zinc-800 dark:text-white hover:text-orange-600 dark:hover:text-orange-600 relative after:bg-orange-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Home
          </a>
          <a
            href="#features"
            role="link"
            title="Features"
            className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-zinc-800 dark:text-white hover:text-orange-600 dark:hover:text-orange-600 relative after:bg-orange-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Features
          </a>
          <a
            href="#about"
            role="link"
            title="About"
            className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-zinc-800 dark:text-white hover:text-orange-600 dark:hover:text-orange-600 relative after:bg-orange-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            About
          </a>
          <Auth mobile={false} />
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value={theme}
              onChange={handleThemeChange}
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
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </>
            ) : (
              <>
                <svg
                  className="swap-on fill-zinc-800 w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-off fill-zinc-800 w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              </>
            )}
          </label>
        </div>
      </nav>
    </>
  );
}
