import Auth from "../misc/Auth";
export default function Navbar() {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <nav className="navbar flex items-center justify-between p-6 bg-zinc-100 dark:bg-transparent">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 dark:text-white">
          Beavs<span className="text-orange-600">AI</span>
        </div>
        <div className="space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6 flex">
          <span
            title="Home"
            className="link text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-white hover:text-orange-600 dark:hover:text-orange-600"
            onClick={() => scrollToId("home")}
          >
            Home
          </span>
          <span
            role="link"
            title="Features"
            className="link text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-white hover:text-orange-600 dark:hover:text-orange-600"
            onClick={() => scrollToId("features")}
          >
            Features
          </span>
          <span
            role="link"
            title="About"
            className="link text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-white hover:text-orange-600 dark:hover:text-orange-600"
            onClick={() => scrollToId("about")}
          >
            About
          </span>

          <Auth />
        </div>
      </nav>
    </>
  );
}
