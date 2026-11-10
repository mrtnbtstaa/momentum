import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { recentTasks } from "../lib/data";

export function MyRecentTasks() {
  return (
    <Card className="bg-[#141414] border-white/5 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-base font-medium text-white">My recent tasks</CardTitle>
        <span className="text-xs text-gray-400">Updated today</span>
      </CardHeader>
      <CardContent className="space-y-1">
        {recentTasks.map((task, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition group">
            <div className="flex items-center gap-3">
              <Checkbox 
                checked={task.completed} 
                className="border-white/20 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500" 
              />
              <span className={cn("text-sm", task.completed ? "text-gray-500 line-through" : "text-white")}>
                {task.title}
              </span>
            </div>
            <span className={cn(
              "text-xs px-2 py-1 rounded-md border",
              task.status === "Done" && "text-green-400 border-green-400/20 bg-green-400/10",
              task.status === "In Review" && "text-blue-400 border-blue-400/20 bg-blue-400/10",
              task.status === "In Progress" && "text-gray-400 border-gray-400/20 bg-gray-400/10",
            )}>
              {task.status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}