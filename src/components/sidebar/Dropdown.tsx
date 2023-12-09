import { UserResource } from "@clerk/types";
import { Link } from "react-router-dom";

interface DropdownProps {
  user: UserResource | null;
}

export default function Dropdown({ user }: DropdownProps) {
  return (
    user && (
      <>
        <div className="dropdown dropdown-top  flex flex-col justify-center items-center absolute bottom-0 mb-4 gap-2 w-[-webkit-fill-available] m-6 ">
          <div
            tabIndex={0}
            role="button"
            id="menu"
            onClick={() => {
              const menu = document.getElementById("menu-content");
              if (menu) {
                menu.classList.replace("hidden", "block");
              }
            }}
            className="w-full hover:bg-gray-300 dark:hover:bg-gray-900 rounded-lg hover:opacity-100 transition duration-300"
          >
            <div className="w-full flex flex-row  rounded-lg shadow-xl p-4 items-center justify-between border-2 border-gray-300">
              <h1 className="text-black dark:text-white text-lg font-semibold">
                {user?.fullName}
                <br />
                <span className="text-xs font-normal">
                  {user?.username ?? user?.primaryEmailAddress?.emailAddress}
                </span>
              </h1>
              <div className="profile-image">
                <img
                  src={user?.profileImageUrl ?? ""}
                  alt="Profile Image"
                  className="w-16 rounded-full"
                />
              </div>
            </div>
          </div>
          <ul
            key={user?.id}
            tabIndex={0}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu"
            id="menu-content"
            className="dropdown-content z-[1] menu w-52 shadow-xl gap-2 rounded-box p-2 bg-gray-300 dark:bg-transparent text-black dark:text-white border-2 border-gray-400"
          >
            <li>
              <Link
                to="/"
                className="mx-2 hover:text-[#dc4405] dark:hover:bg-gray-300 active:bg-black active:text-[#dc4405] focus:outline-none"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/chat"
                onClick={() =>
                  document
                    .getElementById("menu-content")
                    ?.classList.add("hidden")
                }
                className="mx-2 hover:text-[#dc4405] dark:hover:bg-gray-300 active:bg-black active:text-[#dc4405] focus:outline-none"
              >
                Chat History
              </Link>
            </li>
          </ul>
        </div>
      </>
    )
  );
}
