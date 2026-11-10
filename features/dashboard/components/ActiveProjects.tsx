import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Box, Smartphone, Shield } from "lucide-react";
import { activeProjects } from "../lib/data";

export function ActiveProjects() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "box": return <Box className="w-4 h-4 text-gray-400" />;
      case "mobile": return <Smartphone className="w-4 h-4 text-gray-400" />;
      case "shield": return <Shield className="w-4 h-4 text-gray-400" />;
      default: return null;
    }
  };

  return (
    <Card className="bg-[#141414] border-white/5 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-base font-medium text-white">Active projects</CardTitle>
        <span className="text-xs text-gray-400">5 of 12</span>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activeProjects.map((project, i) => (
          <div key={i} className="p-5 rounded-xl border border-white/5 bg-white/2">
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-sm font-medium text-white">{project.title}</h4>
              {getIcon(project.icon)}
            </div>
            <p className="text-xs text-gray-500 mb-6">Owner: {project.owner}</p>
            
            <div className="space-y-2">
              <Progress value={project.progress} className="h-1.5 bg-white/10" />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Progress</span>
                <span>{project.tasks}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}