import { Edit3 } from 'lucide-react';

const ProjectNotes = () => {
  return (
    <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white tracking-wide">Project Notes</h3>
        <button className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1 font-medium">
          <Edit3 className="w-3 h-3" /> Edit notes
        </button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3.5 text-xs text-indigo-400 font-mono mb-2">
        ## RFC 014 - Design System Architecture
      </div>

      <div className="flex flex-col gap-3 text-xs text-zinc-300 leading-relaxed">
        <p>
          <span className="text-zinc-500 font-mono mr-1.5">1.</span>
          All primitives must strictly conform to headless accessibility guidelines (ARIA-1.2 specification).
        </p>
        <p>
          <span className="text-zinc-500 font-mono mr-1.5">2.</span>
          Token inheritance must evaluate without CSS specificity wars: base layers compile to scoped CSS variables.
        </p>
        <p>
          <span className="text-zinc-500 font-mono mr-1.5">3.</span>
          Next architectural milestone sync will occur Thursday at 10:00 AM PST.
        </p>
      </div>
    </div>
  );
};

export default ProjectNotes;