import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/core/services/firebase";

async function deleteNote(id: string) {
  await deleteDoc(doc(db, "notes", id));
}

export { deleteNote };
