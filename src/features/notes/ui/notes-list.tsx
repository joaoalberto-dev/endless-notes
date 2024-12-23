import { TrashIcon } from "lucide-react";
import { motion } from "motion/react";
import { deleteNote } from "../data/delete-note";
import { useNotes } from "../hooks/use-notes";

import deleteSound from "@/core/sound/delete.m4a";
import { useSound } from "use-sound";

function NotesList() {
  const { notes, isLoading, refetchNotes } = useNotes();
  const [playDelete] = useSound(deleteSound);

  async function handleDeleteNote(id: string) {
    await deleteNote(id);
    refetchNotes();
    playDelete();
  }

  if (isLoading || !notes?.length) return null;

  return (
    <div className="mt-10 w-full max-w-[480px] p-2 space-y-4">
      {notes.map((note, index) => (
        <div key={`note-${note.id}`} className="relative gap-2 group">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gray-50 p-4 sm:rounded-[20px] w-full border border-gray-200"
            key={note.id}
            dangerouslySetInnerHTML={{ __html: note.content }}
          />
          <div className="hidden group-hover:block absolute right-4 top-1/2 -translate-y-1/2">
            <TrashIcon
              className="size-4"
              onClick={() => handleDeleteNote(note.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export { NotesList };
