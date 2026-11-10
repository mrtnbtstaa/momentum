import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface ChatMessageUserProps {
  message: string;
  timestamp?: string;
  userName?: string;
}

const ChatMessageUser = ({
  message,
  timestamp = "10:42 AM",
  userName = "Sarah Chen (You)",
}: ChatMessageUserProps) => {
  return (
    <div className="flex flex-col gap-2 items-end">
      <div className="flex items-center gap-2 text-xs text-zinc-500">
        <span>{timestamp}</span>
        <span className="text-zinc-300 font-medium">{userName}</span>
        <Avatar className="w-6 h-6 border border-zinc-800">
          <AvatarFallback className="bg-indigo-600 text-white text-[10px]">SC</AvatarFallback>
        </Avatar>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-xs sm:text-sm text-zinc-100 max-w-2xl leading-relaxed">
        {message}
      </div>
    </div>
  );
};

export default ChatMessageUser;