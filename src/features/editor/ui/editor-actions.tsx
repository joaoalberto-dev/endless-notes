import { Button } from "@/core/components/button/button";
import { CheckIcon, Loader2 } from "lucide-react";
import { saveNote } from "../data/save-note";
import { useCurrentEditor } from "@tiptap/react";
import { useTransition } from "react";
import { toast } from "sonner";

function EditorActions() {
  const { editor } = useCurrentEditor();
  const [isPending, startTransition] = useTransition();
  const disabled =
    editor?.state.doc.textContent.trim() === "" || isPending;

  async function handleSave() {
    if (!editor || disabled) return;

    startTransition(async () => {
      try {
        await saveNote(editor.getHTML());
        editor.commands.clearContent();
      } catch {
        toast.warning("Failed to save note");
      }
    });
  }

  return (
    <div className="absolute bottom-2 right-2">
      <Button
        onClick={handleSave}
        className="bg-white rounded-full flex items-center justify-center w-10 h-10 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={disabled}
      >
        {isPending ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <CheckIcon className="w-4 h-4" />
        )}
      </Button>
    </div>
  );
}

export { EditorActions };
