import { useNotes } from "@/features/notes/hooks/use-notes";
import { Note } from "@/features/notes/types";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useSound } from "use-sound";

const indicatorVariants = {
  hover: {
    width: 40,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
  rest: {
    width: "8px",
    transition: {
      duration: 0.3,
    },
  },
};

import hoverSound from "@/core/sound/hover.m4a";

function Timeline() {
  const [playHover] = useSound(hoverSound);
  const notes = useNotes();
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [position, setPosition] = useState(0);

  function handleMouseEnter(
    note: Note,
    event: React.MouseEvent<HTMLDivElement>
  ) {
    setCurrentNote(note);

    const rect = event.currentTarget.getBoundingClientRect();

    setPosition(rect.y + rect.height / 2 - 8);
    playHover();
  }

  function handleMouseLeave() {
    setCurrentNote(null);
  }

  if (!notes.notes) return null;

  return (
    <div className="fixed opacity-50 hover:opacity-100 transition-opacity duration-300 z-10 left-0 m-4 w-[44px] h-full flex flex-col justify-center overflow-x-visible rounded-[10px]">
      <div className="fixed left-0 top-0">
        <AnimatePresence>
          {currentNote && (
            <motion.p
              initial={{ opacity: 0, x: 110, top: position }}
              animate={{
                opacity: 1,
                x: 100,
                top: position,
              }}
              exit={{ opacity: 0, x: 110, top: position }}
              className="absolute text-nowrap text-xs text-gray-500 pointer-events-none"
            >
              {new Date(
                (currentNote?.updatedAt || currentNote?.createdAt) ?? 0
              ).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      {notes.notes.map((note) => (
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          key={`timeline-${note.id}`}
          className="p-[8px] px-[32px]"
          onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) =>
            handleMouseEnter(note, event)
          }
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            variants={indicatorVariants}
            className="h-[2px] rounded-[10px] bg-gray-800 pointer-events-none"
          />
        </motion.div>
      ))}
    </div>
  );
}

export { Timeline };
