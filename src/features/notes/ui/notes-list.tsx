import { motion } from "motion/react";
import { TrashIcon } from "lucide-react";
import { deleteNote } from "../data/delete-note";
import { useNotes } from "../hooks/use-notes";


function NotesList() {
  const { notes, isLoading, refetchNotes } = useNotes();

  async function handleDeleteNote(id: string) {
    await deleteNote(id);
    refetchNotes();
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!notes) {
    return <div>No notes found</div>;
  }

  return (
    <div className="mt-10 w-full max-w-[480px] space-y-4">
      {notes.map((note, index) => (
        <div key={note.id} className="relative gap-2 group">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white p-4 sm:rounded-[20px] w-full border border-gray-200"
            key={note.id}
            dangerouslySetInnerHTML={{ __html: note.note }}
          />
          <div className="hidden group-hover:block absolute right-4 top-1/2 -translate-y-1/2">
            <TrashIcon className="size-4" onClick={() => handleDeleteNote(note.id)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export { NotesList };
