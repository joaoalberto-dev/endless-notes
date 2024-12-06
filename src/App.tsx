import "./App.css";

import { signInWithGoogle, signOut } from "@/features/auth/data/auth";
import { useUser } from "@/features/auth/hooks/use-user";

function App() {
  const user = useUser();

  return (
    <>
      <p>Endless notes</p>
      {user ? (
        <>
          <p>User {user.displayName} is logged in</p>
          <button onClick={signOut}>Sign out</button>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </>
  );
}

export default App;
