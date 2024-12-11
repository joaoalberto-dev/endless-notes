import "./App.css";

import { signOut } from "@/features/auth/data/auth";
import { useUser } from "@/features/auth/hooks/use-user";
import { SignInPage } from "./features/auth/ui/sign-in-page";
import { Editor } from "./features/editor/ui/editor";
import { Toaster } from "sonner";

function App() {
  const [user, isPending] = useUser();
  const signedIn = user !== null && !isPending;

  if (!signedIn) {
    return <SignInPage />;
  }

  return (
    <div className="relative flex flex-col h-screen w-screen items-center justify-center">
      <div className="fixed top-0 right-0 p-4 flex justify-between items-center">
        <button onClick={signOut}>Sign out</button>
      </div>
      <Editor />
      <Toaster />
    </div>
  );
}

export default App;
