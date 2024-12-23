import { auth, db } from "@/core/services/firebase/firebase";
import { deleteCollectionDocument } from "@/core/services/firebase/queries";

async function deleteNote(id: string) {
  if (!auth.currentUser) throw new Error("User not authenticated");

  await deleteCollectionDocument(
    db,
    "notes",
    `${auth.currentUser.uid}/notes/${id}`
  );
}

export { deleteNote };
