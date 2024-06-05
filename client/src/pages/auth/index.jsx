import {
    SignedIn,
    SignedOut,
    UserButton,
    SignInButton,
    SignUpButton,
} from "@clerk/clerk-react";

const Auth = () => {
    return (
        <div>
            <SignedOut>
                <SignInButton
                    mode="modal"
                    className="border p-3 bg-gray-950 text-white"
                />
                <SignUpButton
                    className="border p-3 bg-gray-950 text-white"
                    mode="modal"
                />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    );
};

export default Auth;
