import { collection } from "firebase/firestore";

import { db } from "@/core/services/firebase";
import { getDocs } from "firebase/firestore";
import { Note } from "../types";

async function getNotes(): Promise<Note[]> {
  const notesCollection = collection(db, "notes");

  const notes = await getDocs(notesCollection);

  return notes.docs.map((doc) => {
    return {
      id: doc.id,
      note: doc.data().note,
    };
  });
}

export { getNotes };
