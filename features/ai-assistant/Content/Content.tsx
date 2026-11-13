import AiBanner from "../components/AiBanner";
import AiHeader from "../components/AiHeader";
import ChatMessageAi from "../components/ChatMessageAi";
import ChatMessageUser from "../components/ChatMessageUser";
import PromptInputBar from "../components/PromptInputBar";
import QuickPrompts from "../components/QuickPrompts";

const AiAssistant = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
      
      {/* Top Header */}
      <AiHeader />

      <div className="max-w-5xl mx-auto w-full flex flex-col gap-6">
        
        {/* Momentum AI Banner */}
        {/* <AiBanner /> */}

        {/* Quick Action Prompt Chips */}
        <QuickPrompts />

        {/* Chat Thread */}
        <div className="flex flex-col gap-6 pt-2">
          <ChatMessageUser message="Can you find tasks assigned to Sarah Chen in Atlas Core that are overdue or due this week, and reassign the urgent one to Marcus?" />
          <ChatMessageAi />
        </div>

        {/* Bottom Input Bar */}
        <PromptInputBar />

      </div>
    </div>
  );
};

export default AiAssistant;