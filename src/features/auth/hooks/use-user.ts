import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "@/core/services/firebase";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user: User | null) => {
      setUser(user);
    });
  }, []);

  return user;
}
