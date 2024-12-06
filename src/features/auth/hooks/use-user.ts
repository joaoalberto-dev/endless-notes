import { useEffect, useState, useTransition } from "react";
import { auth } from "@/core/services/firebase";
import { User } from "../types";

export function useUser(): [User, boolean] {
  const [user, setUser] = useState<User>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      auth.onAuthStateChanged((user: User) => {
        setUser(user);
      });
    });
  }, []);

  return [user, isPending];
}
