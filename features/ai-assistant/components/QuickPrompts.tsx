import { Search, UserPlus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuickPromptItem {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    ariaLabel: string;
}

const QUICK_PROMPTS: QuickPromptItem[] = [
    {
        icon: Search,
        label: "Search overdue tasks in Atlas Core",
        ariaLabel: "Quick action: Search overdue tasks in Atlas Core",
    },
    {
        icon: UserPlus,
        label: "Assign ATL-042 to Marcus Vance",
        ariaLabel: "Quick action: Assign task ATL-042 to Marcus Vance",
    },
    {
        icon: Plus,
        label: "Create task \"Review token schema\"",
        ariaLabel: "Quick action: Create task Review token schema",
    },
];

const QuickPrompts = () => {
    return (
        <div className="flex flex-wrap items-center gap-2.5">
            {QUICK_PROMPTS.map(({ icon: Icon, label, ariaLabel }, index) => (
                <Button
                    key={index}
                    variant="outline"
                    aria-label={ariaLabel}
                    className="flex items-center gap-2 px-3.5 py-2 h-auto rounded-xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-300 hover:text-zinc-100 transition-all cursor-pointer shadow-none focus-visible:ring-1 focus-visible:ring-indigo-500"
                >
                    <Icon className="w-3.5 h-3.5 text-indigo-400 shrink-0" aria-hidden="true" />
                    <span>{label}</span>
                </Button>
            ))}
        </div>
    );
};

export default QuickPrompts;