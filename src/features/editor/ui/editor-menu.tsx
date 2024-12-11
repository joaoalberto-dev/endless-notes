import { Button } from "@/core/components/button/button";
import { cn } from "@/core/utils/cn";
import { useCurrentEditor } from "@tiptap/react";
import { useMemo } from "react";
import { RedoIcon, UndoIcon } from "lucide-react";

const buttonClasses = cn("text-xs rounded-full");

function EditorMenu() {
  const { editor } = useCurrentEditor();
  const commands = useMemo(() => {
    if (!editor) {
      return [];
    }

    return [
      {
        name: "bold",
        label: "Bold",
        command: () => editor.chain().focus().toggleBold().run(),
      },
      {
        name: "italic",
        label: "Italic",
        command: () => editor.chain().focus().toggleItalic().run(),
      },
      {
        name: "underline",
        label: "Underline",
        command: () => editor.chain().focus().toggleUnderline().run(),
      },
      {
        name: "link",
        label: "Link",
        command: () => {
          const href = window.prompt("Enter the URL of the link:");

          if (href) {
            editor.chain().focus().toggleLink({ href }).run();
          }
        },
      },
    ];
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex gap-2 p-2 py-2">
      <Button
        className={buttonClasses}
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
      >
        <UndoIcon className="w-4 h-4" />
      </Button>
      <Button
        className={buttonClasses}
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
      >
        <RedoIcon className="w-4 h-4" />
      </Button>
      {commands.map((command) => (
        <Button
          key={command.name}
          onClick={command.command}
          active={editor.isActive(command.name)}
          className={buttonClasses}
        >
          {command.label}
        </Button>
      ))}
    </div>
  );
}

export { EditorMenu };
