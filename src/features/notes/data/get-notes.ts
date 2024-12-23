import { auth, db } from "@/core/services/firebase/firebase";
import { getCollection } from "@/core/services/firebase/queries";
import { Note } from "../types";

async function getNotes(): Promise<Note[]> {
  if (!auth.currentUser) throw new Error("User not authenticated");

  try {
    const notes = await getCollection(
      db,
      `notes/${auth.currentUser.uid}/notes`
    );

    return notes.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as Note)
    );
  } catch {
    return [];
  }
}

export { getNotes };
