export default function Footer() {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // No <Link> because we can't open a new tab with it
  return (
    <>
      <footer className="footer footer-center p-10 bg-gray-200 dark:bg-zinc-900 text-gray-950 dark:text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a
            id="features"
            className="link link-hover"
            onClick={() => scrollToId("home")}
          >
            Home
          </a>
          <a
            id="features"
            className="link link-hover"
            onClick={() => scrollToId("features")}
          >
            Features
          </a>
          <a
            className="link link-hover"
            onClick={() => window.open("https://osuapp.club/", "_blank")}
          >
            Learn More
          </a>
          <a
            className="link link-hover"
            onClick={() =>
              window.open("https://apps.ideal-logic.com/osusli", "_blank")
            }
          >
            Join Our Club
          </a>
          <a
            className="link link-hover"
            onClick={() =>
              window.open(
                "https://youtube.com/playlist?list=PLmkNs5q4-ReRzTkOPRRNxCxZUZrInlkgU&si=4gvPhJGVgQqiMXA_",
                "_blank",
              )
            }
          >
            Fall 2023 Meetings
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* email */}
            <a
              className="link transition-all duration-200 ease-in-out transform hover:scale-125"
              onClick={() =>
                window.open(
                  "mailto:nyumat@oregonstate.edu?subject=%5BApp%20Development%20Club%5D%20Hello%20from%20BeavsAI",
                  "_blank",
                )
              }
            >
              <svg
                className="w-6 h-6 text-orange-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#D44638"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
                />
              </svg>
            </a>
            {/* discord */}
            <a
              className="link transition-all duration-200 ease-in-out transform hover:scale-125"
              onClick={() =>
                window.open("https://discord.gg/Pquct2eKxF", "_blank")
              }
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#7289da"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
            </a>
            {/* github */}
            <a
              className="link transition-all duration-200 ease-in-out transform hover:scale-125"
              onClick={() =>
                window.open("https://github.com/OSU-App-Club", "_blank")
              }
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  fill="#000"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <div className="text-center text-sm text-gray-950 dark:text-base-content link link-hover">
            <p>© 2023 App Development Club at Oregon State University</p>
          </div>
        </aside>
      </footer>
    </>
  );
}
