import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveNote } from "../data/save-note";
import { Note } from "../types";

function useSaveNotes() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (note: string) => saveNote(note),
    onMutate: (note) => {
      queryClient.cancelQueries({ queryKey: ["notes"] });

      const previousNotes = queryClient.getQueryData<Note[]>(["notes"]) || [];

      queryClient.setQueryData(["notes"], (old: Note[]) => {
        return [...(old || []), note];
      });

      return { previousNotes };
    },
    onError: (_error, _note, context) => {
      queryClient.setQueryData(["notes"], context?.previousNotes);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
}

export { useSaveNotes };
