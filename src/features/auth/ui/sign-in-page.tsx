import { GoogleIcon } from "@/core/components/icons";
import { signInWithGoogle } from "../data/auth";
import { GithubIcon } from "@/core/components/icons/github";

function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen w-screen">
      <h1 className="text-2xl font-bold">Endless notes</h1>
      <div className="flex flex-col items-center gap-4 rounded-lg drop-shadow-md p-8 min-w-[300px]">
        <button
          className="flex cursor-pointer items-center gap-2 rounded-md bg-blue-500 p-2 text-white w-full"
          onClick={signInWithGoogle}
        >
          <GoogleIcon />
          Sign in with Google
        </button>
        <button className="cursor-not-allowed flex items-center gap-2 rounded-md bg-gray-500 p-2 text-white w-full">
          <GithubIcon />
          Sign in with Github <small className="text-xs">soon</small>
        </button>
      </div>
    </div>
  );
}

export { SignInPage };
