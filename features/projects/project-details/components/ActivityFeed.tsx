import { ActivityItem } from '../../projects/types/projects.t';

interface ActivityFeedProps {
  activities: ActivityItem[];
}

const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  return (
    <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white tracking-wide">Activity</h3>
        <span className="text-xs text-zinc-400 font-medium cursor-pointer hover:text-zinc-200">Recent</span>
      </div>

      <div className="flex flex-col gap-4 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-zinc-800">
        {activities.map((act) => (
          <div key={act.id} className="flex items-start gap-3 relative pl-1">
            <div className="w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-950 shrink-0 mt-0.5 z-10" />
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-zinc-300 leading-relaxed">{act.description}</span>
              <span className="text-[11px] text-zinc-500">{act.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;