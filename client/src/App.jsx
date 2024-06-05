import {
    SignedIn,
    SignedOut,
    UserButton,
    SignInButton,
    SignUpButton
} from "@clerk/clerk-react";

const App = () => {
    return (
        <div className="font-serif">
            <SignedOut>
                <SignInButton mode="modal" className="border p-3 bg-gray-950 text-white" />
                <SignUpButton className="border p-3 bg-gray-950 text-white" mode="modal"/>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    );
};

export default App;
