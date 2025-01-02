import { GoogleIcon } from "@/core/components/icons";
import { GithubIcon } from "@/core/components/icons/github";
import { signInWithGoogle } from "../data/auth";

function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen w-screen">
      <h1 className="text-2xl font-bold">Endless notes</h1>
      <div className="flex flex-col items-center gap-4 rounded-[10px] drop-shadow-md p-8 min-w-[300px]">
        <button
          className="flex cursor-pointer items-center gap-2 rounded-[10px] bg-blue-500 p-2 text-white w-full"
          onClick={signInWithGoogle}
        >
          <GoogleIcon />
          Sign in with Google
        </button>
        <button className="cursor-not-allowed flex items-center gap-2 rounded-[10px] bg-gray-500 p-2 text-white w-full">
          <GithubIcon />
          Sign in with Github <small className="text-xs">soon</small>
        </button>
      </div>
    </div>
  );
}

export { SignInPage };
