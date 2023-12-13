import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";

interface AuthProps {
  mobile?: boolean;
}

export default function Auth({ mobile }: AuthProps) {
  const { isLoaded, userId } = useAuth();

  if (mobile && (!isLoaded || !userId)) {
    return (
      <div
        className={`flex justify-center items-center gap-6 ${
          open ? "flex-col space-y-4 my-4" : "flex-row"
        }`}
      >
        <SignInButton>
          <a
            role="button"
            title="Sign In"
            className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-zinc-800 dark:text-white hover:text-orange-600 dark:hover:text-orange-600 relative after:bg-orange-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Login
          </a>
        </SignInButton>
        <SignUpButton>
          <a
            role="button"
            title="Sign Up"
            className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-zinc-800 dark:text-white hover:text-orange-600 dark:hover:text-orange-600 relative after:bg-orange-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Sign Up
          </a>
        </SignUpButton>
      </div>
    );
  } else if (mobile && (isLoaded || userId)) {
    return (
      <>
        <div className="flex flex-col justify-center items-center x">
          <li className="border-1 py-3 -mb-2 rounded-lg flex items-center justify-center cursor-pointer px-2">
            <UserButton />
          </li>
          <SignOutButton>
            <li className="border-1 my-4 py-3 rounded-lg flex items-center justify-center hover:bg-orange-600 hover:bg-opacity-10 cursor-pointer after:bg-orange-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-700 after:ease-in-out after:delay-6 px-2">
              <a
                role="button"
                title="Sign Out"
                className="sm:text-sm md:text-base lg:text-lg xl:text-xl dark:text-zinc-200 text-zinc-800 dark:text-whit cursor-pointer font-semibold"
              >
                Sign Out
              </a>
            </li>
          </SignOutButton>
        </div>
      </>
    );
  } else if (!isLoaded || !userId) {
    return (
      <div
        className={`flex justify-center items-center gap-4 ${
          mobile ? "flex-col space-y-4 mb-4" : "flex-row"
        }`}
      >
        <SignInButton>
          <a
            role="button"
            title="Sign In"
            className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-zinc-800 dark:text-white hover:text-orange-600 dark:hover:text-orange-600 relative after:bg-orange-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Login
          </a>
        </SignInButton>
        <SignUpButton>
          <a
            role="button"
            title="Sign Up"
            className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-zinc-800 dark:text-white hover:text-orange-600 dark:hover:text-orange-600 relative after:bg-orange-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Sign Up
          </a>
        </SignUpButton>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row justify-center items-center space-x-6">
        <UserButton />
        <SignOutButton>
          <a
            role="button"
            title="Sign Out"
            className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-zinc-800 dark:text-white hover:text-orange-600 dark:hover:text-orange-600 relative after:bg-orange-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Sign Out
          </a>
        </SignOutButton>
      </div>
    );
  }
}
