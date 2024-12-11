import { db } from "@/core/services/firebase";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";

async function saveNote(note: string) {
  const notesCollection = collection(db, "notes");

  return await addDoc(notesCollection, {
    note,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

export { saveNote };
