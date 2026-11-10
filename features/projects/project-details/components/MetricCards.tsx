interface MetricCardsProps {
  totalTasks: number;
  inProgressCount: number;
  completedCount: number;
  overdueCount: number;
}

const MetricCards = ({
  totalTasks,
  inProgressCount,
  completedCount,
  overdueCount,
}: MetricCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4 flex flex-col justify-between gap-3">
        <span className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">Total Tasks</span>
        <span className="text-3xl font-semibold text-white tracking-tight">{totalTasks}</span>
      </div>

      <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4 flex flex-col justify-between gap-3">
        <span className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">In Progress</span>
        <span className="text-3xl font-semibold text-white tracking-tight">{inProgressCount}</span>
      </div>

      <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4 flex flex-col justify-between gap-3 relative overflow-hidden">
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald-500" />
        <span className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">Completed</span>
        <span className="text-3xl font-semibold text-white tracking-tight">{completedCount}</span>
      </div>

      <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4 flex flex-col justify-between gap-3 relative overflow-hidden">
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-rose-500" />
        <span className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">Overdue</span>
        <span className="text-3xl font-semibold text-white tracking-tight">{overdueCount}</span>
      </div>
    </div>
  );
};

export default MetricCards