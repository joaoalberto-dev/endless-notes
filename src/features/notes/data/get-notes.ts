import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/core/services/firebase";
import { getDocs } from "firebase/firestore";
import { Note } from "../types";

async function getNotes(): Promise<Note[]> {
  const notesCollection = collection(db, "notes");
  const q = query(notesCollection, orderBy("createdAt", "asc"))
  const notes = await getDocs(q);

  return notes.docs.map((doc) => {
    return {
      id: doc.id,
      note: doc.data().note,
      createdAt: doc.data().createdAt,
      updatedAt: doc.data().updatedAt,
    };
  });
}

export { getNotes };
