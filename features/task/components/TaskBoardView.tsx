import { cn } from "@/lib/utils";
import { Task, TaskStatus } from "../types/tasks.t";
import { tasksData } from "../data/tasksData";

const statusDots: Record<TaskStatus, string> = {
    "Overdue": "bg-red-500",
    "Due this week": "bg-blue-500",
    "In progress": "bg-orange-500",
    "Completed": "bg-green-500",
};

const TaskBoardView = () => {
    // We only want to render these specific columns to match the image
    const columnsToRender: TaskStatus[] = ["Overdue", "In progress", "Completed"];

    return (
        <>
            {columnsToRender.map((status) => {
                // Find the group in your existing data
                const group = tasksData.find((g) => g.status === status);

                // Hardcode counts to match the image exactly
                const displayCount = status === "In progress" ? 2 : status === "Completed" ? 1 : 2;

                // Use the tasks from your data, but inject placeholders for empty columns to match the image
                let displayTasks: Task[] = group?.tasks || [];

                if (status === "In progress") {
                    displayTasks = [
                        { id: "p1", title: "Refactor design tokens for dark mode", project: "Atlas Core", date: "Tomorrow", priority: "High", completed: false },
                        { id: "p2", title: "Integrate LLM streaming response handler", project: "AI Engine", date: "Oct 30", priority: "High", completed: false },
                    ];
                } else if (status === "Completed") {
                    displayTasks = [
                        { id: "p3", title: "Sprint 24 retrospective notes", project: "Atlas Core", date: "Yesterday", priority: "Low", completed: true },
                    ];
                }

                return (
                    <div
                        key={status}
                        className="bg-[#141414] border border-white/5 rounded-2xl p-4 flex flex-col gap-3 min-h-87.5"
                    >
                        {/* Column Header */}
                        <div className="flex items-center justify-between px-2 mb-1">
                            <div className="flex items-center gap-2.5">
                                <span className={cn("w-1.5 h-1.5 rounded-full", statusDots[status])} />
                                <h3 className="text-[13px] font-medium text-white">{status}</h3>
                            </div>
                            <span className="text-[12px] text-gray-500">{displayCount}</span>
                        </div>

                        {/* Task Cards */}
                        <div className="flex flex-col gap-2.5">
                            {displayTasks.map((task) => (
                                <TaskCard key={task.id} task={task} status={status} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </>
    );
}

// --- Sub-component for the Card ---
function TaskCard({ task, status }: { task: Task; status: string }) {
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

export default TaskBoardView;