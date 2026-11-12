import { cn } from "cn";
import { Task } from "../types/tasks.t";

interface TaskCardProps {
    task: Task
    status: string;
}

const TaskCard = ({ task, status }: TaskCardProps) => {
    const isOverdue = status === "Overdue";
    const isCompleted = task.completed;

    return (
        <div className="bg-[#1C1C1C] hover:bg-[#222222] transition-colors border border-white/5 rounded-xl p-4 flex flex-col gap-5 cursor-grab active:cursor-grabbing group">

            {/* Title */}
            <p
                className={cn(
                    "text-[13px] font-medium leading-relaxed pr-2",
                    isCompleted ? "text-gray-500 line-through decoration-gray-600" : "text-white"
                )}
            >
                {task.title}
            </p>

            {/* Footer (Date & Project) */}
            <div className="flex items-center justify-between mt-auto">
                <span
                    className={cn(
                        "text-[12px]",
                        isOverdue ? "text-red-400" : isCompleted ? "text-gray-600" : "text-gray-300"
                    )}
                >
                    {task.date}
                </span>
                <span className="text-[12px] text-gray-500">
                    {task.project}
                </span>
            </div>
        </div>
    );
}

export default TaskCard;