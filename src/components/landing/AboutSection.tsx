import team from "../../assets/team-picture.jpg";
export default function AboutSection() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center mt-64">
        <div className="flow-root sm:mt-24 space-y-12 mb-16">
          <h2 className="mt-2 font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-gray-900 dark:text-white">
            Brought to you by the{" "}
            <span
              role="link"
              className="text-orange-600 link link-hover"
              title="OSU App Club"
              onClick={() =>
                window.open("https://clubs.oregonstate.edu/osuapp", "_blank")
              }
            >
              OSU App Club
            </span>{" "}
          </h2>
          <p className="mt-4 text-lg xs:text-base sm:text-xl md:text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-400">
            The OSU App Club is a student-run organization at Oregon State
            University that aims to provide students with the opportunity to
            learn about software development and to build real-world
            applications like this one.
          </p>
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <img src={team} alt="Team" className="w-full scale" />
          </div>
        </div>
      </div>
    </>
  );
}
