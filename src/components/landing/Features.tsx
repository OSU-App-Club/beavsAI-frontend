import { MockModal } from ".";
import BrowserWindow from "./BrowserWindow";

export default function FeaturesOne() {
  return (
    <>
      <div className="mx-auto  max-w-5xl sm:mb-64 sm:mt-56 md:mt-72 lg:mt-80 xl:mt-[16rem] mt-32">
        <div className="relative isolate">
          <h2 className="mt-2 font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-zinc-800 dark:text-white text-center">
            1. Add a course
          </h2>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fb4405] to-[#fff] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <MockModal />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div className="relative left-[calc(80%-13rem)] aspect-[1155/678] w-[36.125rem] translate-y-2/3 rotate-[30deg] bg-gradient-to-tr from-[#db4405] to-[#fff] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]" />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-0 sm:overflow-auto lg:overflow-auto xl:overflow-auto"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative right-[calc(80%-13rem)] aspect-[1155/678] w-[36.125rem] translate-y-[400px] rotate-[30deg] bg-gradient-to-tr from-[#fff] to-[#fb4405] blur-[60px] opacity-30 sm:right-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div>
            <h2 className="my-24 font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-zinc-800 dark:text-white text-center">
              2. Send a message
            </h2>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <BrowserWindow />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu xl:overflow-hidden sm:overflow-auto lg:overflow-auto blur-3xl sm:top-[130px] scale-125"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(80%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-[#fb4405] to-[#fff] opacity-10 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
            <div className="relative right-[calc(80%-13rem)] aspect-[1155/678] w-[36.125rem] translate-y-[400px] rotate-[30deg] bg-gradient-to-tr from-[#fff] to-[#fb4405] opacity-30 sm:right-[calc(50%-36rem)] sm:w-[72.1875rem]" />
          </div>
        </div>
        <h2 className="my-24 font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-zinc-800 dark:text-white text-center">
          3. Get your answer.
        </h2>

        <h2 className="mt-2 font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-zinc-800 dark:text-white text-center">
          We know, it's really that easy.
        </h2>
      </div>
    </>
  );
}

export function FeaturesSecond() {
  return (
    <>
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-42">
        <div className="mb-8 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 dark:text-white">
              Start chatting in
              <span className="text-orange-600"> seconds</span>
            </h2>
            <p className="mt-4 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black/40 dark:text-gray-400">
              Understanding your course documents has never been easier than
              with Beavs.ai.
            </p>
          </div>
        </div>

        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 mx-12">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-600 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-orange-600">
                Step 1
              </span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-black/70 dark:text-slate-200">
                Create an account
              </span>
              <span className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-zinc-700 dark:text-zinc-500">
                Join Beavs.ai with your OSU email. Please note that{" "}
                <span className="text-orange-600 font-extrabold">
                  to use beavs.ai, you must have an OSU email.
                </span>
                We accept GitHub, Google, and Apple accounts.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-600 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-orange-600">
                Step 2
              </span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-black/70 dark:text-slate-200">
                Add a course to your account
              </span>
              <span className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-zinc-700 dark:text-zinc-500">
                Add a course to your account selecting it from our vector store
                through the chat interface.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-600 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-orange-600">
                Step 3
              </span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-black/70 dark:text-slate-200">
                Start chatting with your course
              </span>
              <span className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-zinc-700 dark:text-zinc-500">
                That's it! You can now chat with your personal AI assistant &
                get answers to your questions. Go beavs.
              </span>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
}
