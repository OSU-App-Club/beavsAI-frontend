import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { Wrapper } from "../misc";

export default function Hero() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Wrapper className="mb-12 mt-28 sm:mt-30 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-zinc-800 dark:text-zinc-300">
          Chat with your
          <span className="text-orange-600 dark-text-orange-600">
            {" "}
            OSU
          </span>{" "}
          course
          <span className="text-orange-600 dark:text-orange-600">
            {" "}
            documents
          </span>{" "}
          in seconds.
        </h1>
        <p className="mt-8 max-w-prose dark:text-zinc-400/70 sm:text-2xl text-zinc-700 mx-12">
          BeavsAI allows you to have conversations with any course. Simply add a
          course from our vector store and start chatting with your very own AI
          assistant.
        </p>

        <div className="relative inline-flex group mt-16">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <div
            onClick={() => {
              if (
                user?.emailAddresses.every(
                  (e) => !e.emailAddress.endsWith("@oregonstate.edu"),
                )
              ) {
                toast.error(
                  "You must use an Oregon State email address to use this app.",
                  { toastId: "invalid-email" },
                );
                return;
              } else {
                navigate("/chat");
              }
            }}
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold dark:text-zinc-200 text-zinc-100 transition-all duration-200 bg-#db4505ed border-[1px] border-t-1 border-r-4 border-l-1 dark:bg-[#db45054c] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Get started
          </div>
        </div>
      </Wrapper>
    </>
  );
}
