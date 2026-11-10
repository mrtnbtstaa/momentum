import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RotateCcw } from "lucide-react";
import { teamActivity } from "../lib/data";

export function TeamActivity() {
  return (
    <Card className="bg-[#141414] border-white/5 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-base font-medium text-white">Recent team activity</CardTitle>
        <RotateCcw className="w-3 h-3 text-gray-500 cursor-pointer hover:text-white transition" />
      </CardHeader>
      <CardContent className="space-y-4">
        {teamActivity.map((activity, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-white/10 text-[10px] text-white">{activity.user}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <span className="text-white font-medium">{activity.name}</span>{" "}
                <span className="text-gray-500">{activity.action}</span>
              </div>
            </div>
            <span className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}