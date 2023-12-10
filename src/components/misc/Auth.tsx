import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";

export default function Auth() {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded || !userId) {
    return (
      <div className="flex justify-center items-center gap-4">
        <SignInButton>
          <a
            href="#about"
            role="link"
            title="About"
            className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-zinc-800 dark:text-white hover:text-orange-600 dark:hover:text-orange-600 relative after:bg-orange-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Login
          </a>
        </SignInButton>
        <SignUpButton>
          <a
            href="#about"
            role="link"
            title="About"
            className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-zinc-800 dark:text-white hover:text-orange-600 dark:hover:text-orange-600 relative after:bg-orange-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Sign Up
          </a>
        </SignUpButton>
      </div>
    );
  } else {
    return (
      <>
        <UserButton />
        <SignOutButton>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl link text-gray-600 dark:text-white hover:text-orange-600 dark:hover:text-orange-600">
            Logout
          </p>
        </SignOutButton>
      </>
    );
  }
}
