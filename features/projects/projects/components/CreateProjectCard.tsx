import { Plus } from "lucide-react";

interface CreateProjectCardProps {
  onClickProject: () => void;
}

export function CreateProjectCard({ onClickProject }: CreateProjectCardProps) {
  return (
    <button 
      onClick={onClickProject}
      className="bg-[#FF5E2C] hover:bg-[#E55326] rounded-2xl p-6 flex flex-col items-start justify-end min-h-85 text-left transition-colors relative group overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-white/20 transition-all" />

      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-6">
        <Plus className="h-5 w-5 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-1.5">Start a new project</h3>
      <p className="text-sm text-white/80 leading-relaxed">
        Define scope, set deadlines, and invite your team.
      </p>
    </button>
  );
}