import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function AiInsights() {
  return (
    <Card className="bg-[#D948FF] border-none shadow-none text-white h-full overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
      <CardContent className="p-6 flex flex-col h-full relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-xs font-semibold tracking-wider uppercase text-white/90">AI Insights</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">3 tasks are at risk of slipping past deadline.</h3>
        <p className="text-sm text-white/90 leading-relaxed mb-8">
          Atlas Core design deliverables depend on upstream specs not yet approved. Review blocking dependencies to preserve velocity.
        </p>
        <Button 
          className="mt-auto w-fit bg-black text-white hover:bg-black/80 rounded-full px-5 h-9 text-sm font-medium"
        >
          Open AI Assistant →
        </Button>
      </CardContent>
    </Card>
  );
}