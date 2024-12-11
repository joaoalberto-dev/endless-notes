import { getNotes } from "../data/get-notes";
import { Note } from "../types";
import { useQuery } from "@/core/query";

function useNotes() {
  const { data: notes, isLoading, refetch: refetchNotes } = useQuery<Note[]>({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  return { notes, isLoading, refetchNotes };
}

export { useNotes };
