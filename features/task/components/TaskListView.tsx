"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { tasksData } from "../data/tasksData";
import TaskItem from "./TaskItem";
import { TaskStatus } from "../types/tasks.t";

const TasksListView = () => {
  // Default open states matching the image
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    "Overdue": true,
    "Due this week": true,
    "In progress": false,
    "Completed": false,
  });

  const toggleGroup = (status: string) => {
    setOpenGroups((prev) => ({ ...prev, [status]: !prev[status] }));
  };

  // Dot colors for the group headers
  const statusDots: Record<TaskStatus, string> = {
    "Overdue": "bg-red-500",
    "Due this week": "bg-blue-500",
    "In progress": "bg-orange-500", // Assuming orange for In progress
    "Completed": "bg-green-500",
  };

  return (
    <div className="bg-[#141414] border border-white/5 rounded-2xl flex flex-col overflow-hidden">
      {tasksData.map((group) => {
        const isOpen = openGroups[group.status];
        
        // Hardcoding the count for In Progress and Completed to match the image
        // In a real app, this would be group.tasks.length
        const displayCount = 
          group.status === "In progress" ? 0 : 
          group.status === "Completed" ? 0 : 
          group.tasks.length;

        return (
          <div key={group.status} className="flex flex-col border-b border-white/3 last:border-0">
            
            {/* Group Header */}
            <button 
              onClick={() => toggleGroup(group.status)}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/2 transition-colors"
            >
              <div className="flex items-center gap-3">
                {isOpen ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )}
                <span className={cn("w-1.5 h-1.5 rounded-full", statusDots[group.status])} />
                <span className="text-[13px] font-medium text-white">{group.status}</span>
              </div>
              <span className="text-[12px] text-gray-500">{displayCount} tasks</span>
            </button>

            {/* Group Content (Tasks) */}
            {isOpen && (
              <div className="flex flex-col pb-2">
                {group.tasks.length > 0 ? (
                  group.tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                  ))
                ) : (
                  <div className="px-14 py-4 text-[13px] text-gray-600 italic">
                    No tasks in this group
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TasksListView;