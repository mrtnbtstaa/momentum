import { Button } from "@/components/ui/button";
import ViewMode from "../ViewMode/ViewMode";
import { LucideIcon } from "lucide-react";

interface HeaderSectionProps {
    title: string;
    subTitle: string;
    buttonContent: string;
    onButtonClicked?: () => void;
    withIcon?: React.ReactNode;
    hasViewMode?: boolean;
}

const HeaderSection = ({ title, subTitle, buttonContent, onButtonClicked, withIcon: icon, hasViewMode = false}: HeaderSectionProps) => {
    return (
        <header className="flex md:items-center justify-between gap-4">
            <div>
                <h1 className="text-2xl md:text-3xl font-semibold text-white">{title}</h1>
                <p className="text-sm text-gray-400 mt-1">
                    {subTitle}
                </p>
            </div>

            <div className="flex items-center gap-3">
                {/* View Toggle */}
                {hasViewMode && <ViewMode />}
                <Button
                variant={"secondary"}
                onClick={onButtonClicked}
                >
                {icon && icon}
                {buttonContent}
                </Button>
            </div>
        </header>
    )
}

export default HeaderSection;