import { cn } from "@/lib/utils";
import { TaskStatus } from "../types/tasks.t";
import { tasksData } from "../data/tasksData";
import TaskCard from "./TaskCard";

const statusDots: Record<TaskStatus, string> = {
    "Overdue": "bg-red-500",
    "Due this week": "bg-blue-500",
    "In progress": "bg-orange-500",
    "Completed": "bg-green-500",
};

const columnsToRender: TaskStatus[] = ["Overdue", "In progress", "Completed"];

const TaskBoardView = () => {
    // Build the lookup once instead of scanning tasksData per column.
    const tasksByStatus = new Map(
        tasksData.map((group) => [group.status, group.tasks]),
    );

    return (
        <>
            {columnsToRender.map((status) => {
                const displayTasks = tasksByStatus.get(status) ?? [];

                return (
                    <div
                        key={status}
                        className="bg-[#141414] border border-white/5 rounded-2xl p-4 flex flex-col gap-3 min-h-87.5"
                    >
                        {/* Column Header */}
                        <div className="flex items-center justify-between px-2 mb-1">
                            <div className="flex items-center gap-2.5">
                                <span
                                    className={cn(
                                        "w-1.5 h-1.5 rounded-full",
                                        statusDots[status],
                                    )}
                                />
                                <h3 className="text-[13px] font-medium text-white">
                                    {status}
                                </h3>
                            </div>
                            <span className="text-[12px] text-gray-500">
                                {displayTasks.length}
                            </span>
                        </div>

                        {/* Task Cards */}
                        <div className="flex flex-col gap-2.5">
                            {displayTasks.length === 0 ? (
                                <p className="px-2 text-[12px] text-gray-600">
                                    No tasks
                                </p>
                            ) : (
                                displayTasks.map((task) => (
                                    <TaskCard
                                        key={task.id}
                                        task={task}
                                        status={status}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default TaskBoardView;