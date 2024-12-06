import "./App.css";

import { signOut } from "@/features/auth/data/auth";
import { useUser } from "@/features/auth/hooks/use-user";
import { SignInPage } from "./features/auth/ui/sign-in-page";

function App() {
  const [user, isPending] = useUser();
  const signedIn = user !== null && !isPending;

  if (!signedIn) {
    return <SignInPage />;
  }

  return (
    <>
      <p>User {user.displayName} is logged in</p>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default App;
