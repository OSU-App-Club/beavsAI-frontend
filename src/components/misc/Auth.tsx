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
      <div className="flex justify-center items-center gap-2">
        <SignInButton>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl link text-gray-600 dark:text-white hover:text-orange-600 dark:hover:text-orange-600">
            Login
          </p>
        </SignInButton>
        <SignUpButton>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl link text-gray-600 dark:text-white hover:text-orange-600 dark:hover:text-orange-600">
            Sign Up
          </p>
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
