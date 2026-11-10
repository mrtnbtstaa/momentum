"use client";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@base-ui/react/button";
import { X } from "lucide-react";


interface DialogProps {
    children: React.ReactNode;
    isOpen: boolean;
    setOpen: (value: boolean) => void;
    dialogTitle: string;
    dialogDescription: string;
}

const ReusableDialog = ({ children, isOpen, setOpen, dialogTitle, dialogDescription }: DialogProps) => {

    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <DialogContent className="scrollbar-thin [scrollbar-color:rgba(255,255,255,0.1)_transparent] [&::-webkit-scrollbar]:w-0.2 sm:max-w-125 bg-[#0A0A0A] border-white/10 text-white p-0 gap-0 overflow-hidden [&>button]:hidden flex flex-col max-h-[85vh]">
                {/* Header */}
                <DialogHeader className="flex items-start justify-between px-6 py-5 border-b border-white/5 shrink-0">
                    <div className="flex flex-col gap-1">
                        <DialogTitle className="text-2xl font-semibold text-white tracking-tight">
                            {dialogTitle}
                        </DialogTitle>
                        <p className="text-sm text-gray-400 mt-1">
                            {dialogDescription}
                        </p>
                    </div>

                    {/* Custom Close Button */}
                    <Button onClick={() => setOpen(false)} className="absolute right-4 top-4 rounded-full p-1.5 bg-white/5 hover:bg-white/10 transition-colors">
                        <X className="h-4 w-4 text-gray-400" />
                    </Button>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    )
}
export default ReusableDialog;