import { Color } from "@tiptap/extension-color";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorMenu } from "./editor-menu";
import { EditorActions } from "./editor-actions";

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure(),
  Underline.configure(),
  Link.configure({
    protocols: ["http", "https"],
  }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
];

function Editor() {

  return (
    <div className="flex flex-col gap-2 w-full max-w-[480px]">
      <div className="w-full border relative border-gray-300 overflow-hidden rounded-[24px] max-w-[480px]">
        <EditorProvider
          editorContainerProps={{
            className:
              "*:focus:outline-none relative bg-gray-50 overflow-y-auto p-4 no-scrollbar min-h-[200px] max-h-[300px]",
          }}
          slotBefore={<EditorMenu />}
          slotAfter={<EditorActions />}
          extensions={extensions}
          content=""
        />
      </div>
    </div>
  );
}

export { Editor };
