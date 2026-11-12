import { Plus, History } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AiHeader = () => {
  return (
    <header className="flex items-center justify-between pb-4 border-b border-zinc-800/60">
      {/* Title & Grounding Status Indicator */}
      <div className="flex items-center gap-3.5">
        <h1 className="text-2xl font-bold tracking-tight text-white">AI Assistant</h1>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="font-medium text-zinc-200">Grounded in workspace task data</span>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-2.5">
        <Button
          variant="secondary"
        >
          <Plus className="w-4 h-4 text-black" />
          <span>New conversation</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          aria-label="Conversation history"
          className="h-9 w-9 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white rounded-md transition-all cursor-pointer shadow-sm"
        >
          <History className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};

export default AiHeader;