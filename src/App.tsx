import "./App.css";

import { useUser } from "@/features/auth/hooks/use-user";
import { SignInPage } from "./features/auth/ui/sign-in-page";
import { Editor } from "./features/editor/ui/editor";
import { NotesList } from "./features/notes/ui/notes-list";
import LoaderPage from "./core/components/loader/loader-page";
import { PageLayout } from "./core/components/layout/page-layout";
import { Timeline } from "./features/timeline/ui/timeline";

function App() {
  const [user, isPending] = useUser();

  if (isPending) return <LoaderPage />;

  if (!user) return <SignInPage />;

  return (
    <PageLayout>
      <div className="sm:pt-[calc(50vh-150px)] w-full flex justify-center">
        <Editor />
      </div>
      <NotesList />
      <Timeline />
    </PageLayout>
  );
}

export default App;
