"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReusableDialog from "@/components/reusable/Dialog/Dialog";
import { useDialogStore } from "@/store/useDialogStore";
import { DIALOG_KEY } from "@/lib/dialog-key";
import ReusableSelect from "@/components/reusable/Select/Select";
import ReusableLabel from "@/components/reusable/Label/Label";
import { PROJECT_TASK_ASSIGNEE, PROJECT_TASK_URGENT_STATUS, PROJECT_TASK_WORKFLOW_STATUS } from "../../data/project-task-generic.types";
import { DialogFooter } from "@/components/ui/dialog";

interface CreateTaskModalProps {
    onTaskSubmit?: (taskData: any) => void;
}

const CreateTaskModal = ({  onTaskSubmit }: CreateTaskModalProps) => {
    const { dialogKey, openDialog, setDialogType } = useDialogStore((state) => state);
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onTaskSubmit?.({
            title: "Cryptographic key rotation & zero-trust certs",
            category: "Security Core (Zero-Trust & PKI)",
            status: "Overdue",
            priority: "URGENT",
            assignee: "Elena Rostova",
            dueDate: "10/24/2026",
        });
        openDialog(null);
        setDialogType(null);
    };

    return (
        <ReusableDialog
            isOpen={dialogKey === DIALOG_KEY.CREATE_TASK_DIALOG} // Adjust your dialog key as needed
            setOpen={(value) => openDialog(value ? DIALOG_KEY.CREATE_TASK_DIALOG : null)}
            dialogTitle="Create Task"
            dialogDescription="Add a new task to Atlas Core Infrastructure."
        >
            <form onSubmit={handleFormSubmit} className="flex flex-col">

                {/* Body Form with Uniform Spacing */}
                <div className="px-6 py-4 space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar">

                    {/* Task Title */}
                    <div className="space-y-2">
                        <ReusableLabel label="Task Title" required />
                        <Input
                            id="title"
                            defaultValue="Cryptographic key rotation & zero-trust certs"
                            className="bg-[#141414] border-white/10 text-white focus-visible:ring-1 focus-visible:ring-white/20 h-10 text-xs"
                        />
                    </div>

                    {/* Category / Module */}
                    <div className="space-y-2">
                        <ReusableLabel label="Category / Module" required />
                        <ReusableSelect
                            className="w-full bg-[#141414] border-white/10 text-white text-xs h-10"
                            options={PROJECT_TASK_URGENT_STATUS.options}
                            value=""
                            onValueChange={(val) => { }}
                        />
                    </div>

                    {/* Workflow Status & Priority Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <ReusableLabel label="Workflow Status" required />
                            <ReusableSelect
                                className="w-full bg-[#141414] border-white/10 text-white text-xs h-10"
                                options={PROJECT_TASK_WORKFLOW_STATUS.options}
                                value=""
                                onValueChange={(val) => { }}
                            />
                        </div>

                        <div className="space-y-2">
                            <ReusableLabel label="Priority" required />
                            <ReusableSelect
                                className="w-full bg-[#141414] border-white/10 text-white text-xs h-10"
                                options={PROJECT_TASK_URGENT_STATUS.options}
                                value=""
                                onValueChange={(val) => { }}
                            />
                        </div>
                    </div>

                    {/* Assignee & Due Date Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <ReusableLabel label="Assignee" required />
                            <ReusableSelect
                                className="w-full bg-[#141414] border-white/10 text-white text-xs h-10"
                                options={PROJECT_TASK_ASSIGNEE.options}
                                value=""
                                onValueChange={(val) => { }}
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <ReusableLabel label="Due Date" required />
                                <span className="text-[10px] text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-medium">
                                    Oct 24 (Overdue)
                                </span>
                            </div>
                            <Input
                                id="dueDate"
                                defaultValue="10/24/2026"
                                className="bg-[#141414] border-white/10 text-white focus-visible:ring-1 focus-visible:ring-white/20 h-10 text-xs font-mono"
                            />
                        </div>
                    </div>

                    {/* Description / Scope */}
                    <div className="space-y-2">
                        <ReusableLabel label="Description / Scope" required />
                        <Textarea
                            id="description"
                            defaultValue="Automated key rotation and certificate lifecycle automation across HashiCorp Vault integration. Requires zero-trust enforcement validation."
                            className="bg-[#141414] border-white/10 text-white min-h-24 resize-none focus-visible:ring-1 focus-visible:ring-white/20 text-xs leading-relaxed"
                        />
                    </div>

                </div>

                {/* Footer */}
                <DialogFooter className="flex items-center justify-between px-6 py-4 border-t border-white/5 bg-[#0A0A0A]">
                    <div className="flex items-center gap-3 ml-auto">
                        <Button
                            type="button"
                            onClick={() => {
                                openDialog(null);
                                setDialogType(null);
                            }}
                            variant="ghost"
                            className="text-gray-300 hover:text-white hover:bg-white/5 text-xs h-9 cursor-pointer"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="bg-white text-black hover:bg-gray-200 rounded-full text-xs h-9 px-6 font-medium cursor-pointer transition-transform active:scale-[0.98]"
                        >
                            Create task
                        </Button>
                    </div>
                </DialogFooter>

            </form>
        </ReusableDialog>
    );
};

export default CreateTaskModal;