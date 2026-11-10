import { Button } from "@/components/ui/button";

const DashboardIntro = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
      {/* Greeting Section */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-white">
          Good morning, Sarah
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Here is your daily engineering and product telemetry.
        </p>
      </div>

      {/* Actions Section */}
      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <Button 
          variant="secondary" 
          className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10"
        >
          Create project
        </Button>
        <Button 
          variant="secondary" 
          className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10"
        >
          Open AI Assistant
        </Button>
        <Button 
          className="w-full sm:w-auto bg-white text-black hover:bg-gray-200"
        >
          Create task
        </Button>
      </div>
    </div>
  );
};

export default DashboardIntro;