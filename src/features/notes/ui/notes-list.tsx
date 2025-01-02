import { motion } from "motion/react";
import { useNotes } from "../hooks/use-notes";
import { DeleteNote } from "./delete-note";

function NotesList() {
  const { notes, isLoading } = useNotes();

  if (isLoading || !notes?.length) return null;

  return (
    <div className="mt-10 w-full max-w-[480px] p-2 space-y-4">
      {notes.map((note, index) => (
        <div key={`note-${note.id}`} className="relative gap-2 group">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gray-50 p-4 sm:rounded-[10px] w-full border border-gray-200"
            key={note.id}
            dangerouslySetInnerHTML={{ __html: note.content }}
          />
          <DeleteNote note={note} />
        </div>
      ))}
    </div>
  );
}

export { NotesList };
