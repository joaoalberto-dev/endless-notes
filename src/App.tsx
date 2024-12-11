import "./App.css";

import { useUser } from "@/features/auth/hooks/use-user";
import { SignInPage } from "./features/auth/ui/sign-in-page";
import { Editor } from "./features/editor/ui/editor";
import { Toaster } from "sonner";
import { NotesList } from "./features/notes/ui/notes-list";

function App() {
  const [user, isPending] = useUser();
  const signedIn = user !== null && !isPending;

  if (!signedIn) {
    return <SignInPage />;
  }

  return (
    <div className="relative flex flex-col h-screen w-screen overflow-x-hidden pb-32 items-start sm:items-center justify-start">
      <div className="sm:pt-[calc(50vh-150px)] w-full flex justify-center">
        <Editor />
      </div>
      <NotesList />
      <Toaster />
    </div>
  );
}

export default App;
