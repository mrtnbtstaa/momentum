import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { upcomingDeadlines } from "../lib/data";

export function UpcomingDeadlines() {
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High": return <Badge variant="outline" className="text-red-400 border-red-400/20 bg-red-400/10">High</Badge>;
      case "Medium": return <Badge variant="outline" className="text-blue-400 border-blue-400/20 bg-blue-400/10">Medium</Badge>;
      case "Low": return <Badge variant="outline" className="text-gray-400 border-gray-400/20 bg-gray-400/10">Low</Badge>;
      default: return null;
    }
  };

  return (
    <Card className="col-span-1 lg:col-span-2 bg-[#141414] border-white/5 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-base font-medium text-white">My upcoming deadlines</CardTitle>
        <span className="text-xs text-gray-400">Next 7 days</span>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingDeadlines.map((item, i) => (
          <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
            <div>
              <p className="text-sm font-medium text-white">{item.title}</p>
              <p className="text-xs text-gray-500 mt-1">{item.project}</p>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-400">{item.date}</span>
              {getPriorityBadge(item.priority)}
            </div>
          </div>
        ))}
        <div className="pt-2 text-sm text-gray-400 flex items-center gap-1 cursor-pointer hover:text-white">
          View all <span aria-hidden>→</span>
        </div>
      </CardContent>
    </Card>
  );
}