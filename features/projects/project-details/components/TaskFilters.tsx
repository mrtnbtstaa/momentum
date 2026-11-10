import ReusableTabs from "@/components/reusable/Tabs/ReusableTabs";
import { GenericTabsOption } from "@/components/reusable/Tabs/tabs.types";

interface TaskFiltersProps {
  statusFilter: string;
  setStatusFilter: (val: string) => void;
  totalTasksCount: number;
}

const TASK_STATUES: GenericTabsOption<string> = {
  options: [
    {tab: "All"},
    {tab: "To Do"},
    {tab: "In Progress"},
    {tab: "In Review"},
    {tab: "Done"},
  ]
}

const TaskFilters = ({
  statusFilter,
  setStatusFilter,
  totalTasksCount,
}: TaskFiltersProps) => {

  return (
    <div className="flex flex-col gap-4 pt-2">
      {/* Top Bar: Title & View Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-white flex items-center gap-2.5 tracking-tight">
            Tasks{' '}
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700/50">
              {totalTasksCount} total
            </span>
          </h3>
        </div>

    
      </div>

      {/* Bottom Bar: Status Filter Pills & Metadata Dropdowns */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        {/* Status Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <ReusableTabs 
            defaultValue="All"
            options={TASK_STATUES.options}
            value={statusFilter}
            onValueChange={(status) => setStatusFilter(status)} /> 
        </div>

      </div>
    </div>
  );
};

export default TaskFilters;