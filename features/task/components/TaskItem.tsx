import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Task } from "../types/tasks.t";

const TaskItem = ({ task }: { task: Task }) => {
  const priorityColors = {
    High: "bg-red-500",
    Medium: "bg-blue-500",
    Low: "bg-gray-400",
  };

  return (
    <div className="flex items-center justify-between py-4 px-6 border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors group cursor-pointer">
      <div className="flex items-center gap-4 flex-1">
        <Checkbox 
          checked={task.completed} 
          className="border-white/20 data-[state=checked]:bg-white data-[state=checked]:text-black rounded-full h-5 w-5"
        />
        <div className="flex items-baseline gap-2">
          <span className={cn(
            "text-[14px] text-gray-200 font-medium transition-colors group-hover:text-white",
            task.completed && "line-through text-gray-500"
          )}>
            {task.title}
          </span>
          <span className="text-[12px] text-gray-500">
            {task.project}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <span className={cn(
          "text-[13px]",
          task.priority === "High" ? "text-red-400" : "text-gray-400"
        )}>
          {task.date}
        </span>
        <div className="flex items-center gap-2 w-16">
          <span className={cn("w-1.5 h-1.5 rounded-full", priorityColors[task.priority])} />
          <span className="text-[12px] text-gray-400">{task.priority}</span>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;