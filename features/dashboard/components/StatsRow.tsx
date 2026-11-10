import { Card, CardContent } from "@/components/ui/card";
import { statsData } from "../lib/data";

export function StatsRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsData.map((stat, i) => (
        <Card key={i} className="bg-[#141414] border-white/5 shadow-none">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-medium text-gray-400">{stat.label}</span>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-4xl font-semibold text-white">{stat.value}</span>
              <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-md">{stat.subtext}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}