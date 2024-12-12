import { useEffect, useState } from "react";
import { auth } from "@/core/services/firebase";
import { User } from "../types";

export function useUser(): [User, boolean] {
  const [user, setUser] = useState<User>(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user: User) => {
      setUser(user);
      setIsPending(false);
    });
  }, []);

  return [user, isPending];
}
