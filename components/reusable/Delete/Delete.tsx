"use client";

import { FileX, X } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
} from "@/components/ui/alert-dialog";

interface DeleteProjectModalProps {
    title?: string;
    name?: string;
    isOpen: boolean;
    onOpenChange: (value: boolean) => void;
    onDelete?: () => void;
}

const ReusableDelete = ({
    isOpen = false,
    onOpenChange,
    onDelete,
    name = "Atlas Core Infrastructure",
    title = "Project",
}: DeleteProjectModalProps) => {

    return (
        <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
            <AlertDialogContent className="max-w-130 bg-[#0F0F0F] border border-white/10 p-0 gap-0 overflow-hidden shadow-2xl rounded-2xl">

                {/* Top Section with Red Gradient Background */}
                <div className="relative bg-linear-to-br from-[#2A1215] via-[#141414] to-[#141414] px-8 pt-8 pb-6">

                    {/* Custom Close Button */}
                    <AlertDialogCancel 
                        aria-label="Close dialog"
                        className="absolute right-4 top-4 h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 border-none text-gray-400 hover:text-white p-0 flex items-center justify-center transition-colors cursor-pointer"
                    >
                        <X className="h-4 w-4" aria-hidden="true" />
                    </AlertDialogCancel>

                    {/* Icon & Label */}
                    <div className="flex items-center gap-3.5 mb-5">
                        <div className="h-11 w-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                            <FileX className="h-5 w-5 text-red-500" aria-hidden="true" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[11px] font-bold tracking-wider text-red-500 uppercase">
                                Destructive Action
                            </span>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-500" aria-hidden="true" />
                                <span className="text-xs text-gray-400 font-medium">
                                    High Impact · Cascade Delete
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Title & Description */}
                    <AlertDialogTitle className="text-2xl font-semibold text-white tracking-tight mb-2">
                        Delete {title}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-sm text-gray-400 leading-relaxed">
                        This action <span className="text-red-400 font-medium">cannot be undone</span>. You are about to permanently delete{" "}
                        <span className="text-white font-semibold">{name}</span>. All associated data will be wiped permanently.
                    </AlertDialogDescription>
                </div>

                {/* Bottom Section (Actions) */}
                <div className="px-4 py-4 bg-[#0A0A0A] border-t border-white/5">
                    <div className="flex justify-end items-center gap-3">
                        <AlertDialogCancel className="bg-transparent border border-white/10 hover:bg-white/5 text-gray-300 hover:text-white h-10 px-5 rounded-xl font-medium text-xs cursor-pointer transition-colors shadow-none mt-0">
                            Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                            onClick={onDelete}
                            className="bg-red-600 hover:bg-red-700 text-white h-10 px-5 rounded-xl font-semibold text-xs cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                        >
                            Delete {title}
                        </AlertDialogAction>
                    </div>
                </div>

            </AlertDialogContent>
        </AlertDialog>
    );
};

export default ReusableDelete;