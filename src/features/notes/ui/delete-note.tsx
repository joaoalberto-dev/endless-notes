import { TrashIcon } from "lucide-react";
import { deleteNote } from "../data/delete-note";
import { useNotes } from "../hooks/use-notes";

import deleteSound from "@/core/sound/delete.m4a";
import { useState } from "react";
import { useSound } from "use-sound";
import { Note } from "../types";

type DeleteNoteProps = { note: Note };

function DeleteNote({ note }: DeleteNoteProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { refetchNotes } = useNotes();
  const [playDelete] = useSound(deleteSound);
  let timeout: NodeJS.Timeout;

  function startDeleting() {
    setIsDeleting(true);
  }

  function resetDeletingCountdown() {
    if (isDeleting) {
      clearTimeout(timeout);
    }
  }

  function stopDeletingCountdown() {
    timeout = setTimeout(() => {
      setIsDeleting(false);
    }, 3000);
  }

  async function handleDeleteNote() {
    await deleteNote(note.id);
    refetchNotes();
    playDelete();
  }

  return (
    <div
      className="hidden group-hover:block absolute right-4 top-1/2 -translate-y-1/2"
      onPointerLeave={stopDeletingCountdown}
      onPointerEnter={resetDeletingCountdown}
    >
      {isDeleting ? (
        <p onClick={handleDeleteNote} className="text-red-500 cursor-pointer">
          Confirm
        </p>
      ) : (
        <TrashIcon
          className="size-4 text-red-200 hover:text-red-500 cursor-pointer"
          onClick={startDeleting}
        />
      )}
    </div>
  );
}

export { DeleteNote };
