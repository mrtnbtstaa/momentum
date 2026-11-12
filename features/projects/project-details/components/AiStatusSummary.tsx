import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AiStatusSummary = () => {
  return (
    <div className="relative rounded-2xl p-6 bg-linear-to-r from-indigo-950/40 via-purple-950/30 to-zinc-900/80 border border-indigo-500/20 overflow-hidden shadow-xl">
      {/* Background ambient glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2.5 max-w-3xl">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            AI Status Summary
          </div>
          <h2 className="text-lg font-semibold text-white leading-snug">
            Atlas Core velocity is healthy, but 2 overdue security tasks require attention.
          </h2>
          <p className="text-sm text-zinc-300/90 leading-relaxed">
            Component token migrations are pacing 14% ahead of sprint schedule across design systems and client runtimes.
          </p>
          <p className="text-xs text-zinc-400">
            Cryptographic key rotation and zero-trust authentication compliance are flagged as blocking dependency targets for Sprint 32 sign-off.
          </p>
        </div>

        <div>
          <Button
            variant="outline"
            className="bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border-zinc-700/80 text-xs h-10 px-4 rounded-xl flex items-center gap-2 shadow-sm whitespace-nowrap"
          >
            Open full report <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AiStatusSummary;