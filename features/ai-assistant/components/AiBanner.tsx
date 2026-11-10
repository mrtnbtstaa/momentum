import { Sparkles, Terminal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AiBanner = () => {
  const tools = [
    'search_tasks',
    'get_task',
    'create_task',
    'update_task',
    'assign_task',
    'add_comment',
  ];

  return (
    <div className="relative rounded-2xl p-6 sm:p-8  to-zinc-950 border border-indigo-500/25 shadow-2xl overflow-hidden flex flex-col gap-5">
      {/* Background ambient lighting blur */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Meta Bar */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
          <span>Momentum AI</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 shadow-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Task Engine Connected</span>
        </div>
      </div>

      {/* Main Title & Description */}
      <div className="flex flex-col gap-2.5 relative z-10 max-w-3xl">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
          Ask me to find, assign, create, or update tasks across your workspace.
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed">
          Powered strictly by your task catalog. I can search tasks, assign owners, modify deadlines, post comments, and draft new work items.
        </p>
      </div>

      {/* Tool Capability Pills / Badges */}
      <div className="flex flex-wrap items-center gap-2 pt-1 relative z-10">
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-400 mr-1">
          <Terminal className="w-3.5 h-3.5 text-zinc-500" />
          <span>Tools:</span>
        </div>
        {tools.map((tool) => (
          <Badge
            key={tool}
            variant="outline"
            className="px-3 py-1 rounded-lg bg-zinc-900/80 border-zinc-800/80 hover:border-indigo-500/40 text-xs font-mono text-indigo-300 transition-colors shadow-sm cursor-default"
          >
            {tool}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default AiBanner;