import { auth, db } from "@/core/services/firebase/firebase";
import { createCollectionDocument } from "@/core/services/firebase/queries";

async function saveNote(content: string) {
  if (!auth.currentUser) throw new Error("User not authenticated");

  return await createCollectionDocument(
    db,
    "notes",
    `${auth.currentUser.uid}/notes`,
    {
      content,
    }
  );
}

export { saveNote };
