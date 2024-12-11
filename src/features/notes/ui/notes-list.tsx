import { getNotes } from "../data/get-notes";
import { Note } from "../types";
import { useQuery } from "@/core/query";

function NotesList() {
  const { data: notes, isLoading } = useQuery<Note[]>({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!notes) {
    return <div>No notes found</div>;
  }

  return (
    <div className="mt-10 w-full max-w-[480px] space-y-4">
      {notes.map((note) => (
        <div
          className="bg-white p-4 sm:rounded-[20px] w-full border border-gray-200"
          key={note.id}
          dangerouslySetInnerHTML={{ __html: note.note }}
        />
      ))}
    </div>
  );
}

export { NotesList };
