import {SignInButton, SignOutButton, SignUpButton, useAuth, UserButton} from "@clerk/clerk-react";

export default function Auth() {
    const { isLoaded, userId} = useAuth();

    if (!isLoaded || !userId) {
        return (
        <>
            <SignInButton><div className="login-button">Login</div></SignInButton>
            <SignUpButton><div className="signup-button">Sign Up</div></SignUpButton>
        </>
    );
    } else {
        return (
        <>
            <UserButton/>
            <SignOutButton><div className="signup-button">Logout</div></SignOutButton>
        </>
    );
    }
}