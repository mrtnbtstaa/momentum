"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReusableDialog from "@/components/reusable/Dialog/Dialog";
import { useDialogStore } from "@/store/useDialogStore";
import { DIALOG_KEY } from "@/lib/dialog-key";
import ReusableRadioGroup from "@/components/reusable/RadioGroup/RadioGroup";
import ReusableSelect from "@/components/reusable/Select/Select";
import ReusableLabel from "@/components/reusable/Label/Label";
import { Globe, Lock } from "lucide-react";
import { PROJECT_RADIO_GROUP, PROJECT_LEAD_SELECT, PROJECT_QUARTER_SELECT, PROJECT_STATUS, PROJECT_URGENCY } from "../../data/project-generic.types";
import { DialogFooter } from "@/components/ui/dialog";

interface ProjectDialogProps {
    dialogType?: "create" | "edit" | string
}

const CreateProjectModal = ({ dialogType = "create" }: ProjectDialogProps) => {

    const { dialogKey, openDialog, setDialogType } = useDialogStore((state) => state);

    const [workflow, setWorkflow] = useState<string | number>("sprint");
    const [access, setAccess] = useState("public");

    return (
        <ReusableDialog
            isOpen={dialogKey === DIALOG_KEY.CREATE_PROJECT_DIALOG}
            setOpen={(value) => openDialog(value ? DIALOG_KEY.CREATE_PROJECT_DIALOG : null)}
            dialogTitle={dialogType == "create" ? "Create new project" : "Edit project"}
            dialogDescription={dialogType == "create"
                ? "Define project scope, configure workflow cadence, and set milestones for your team."
                : "Update project identity, workflow cadence, lead ownership, and access permissions."}
        >
            {/* Body Form */}
            <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto custom-scrollbar">

                {/* Project Name */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <ReusableLabel label="Project name" required />
                        <span className="text-xs text-gray-500">Unique slug generated</span>
                    </div>
                    <div className="relative">
                        <Input
                            id="name"
                            defaultValue="Atlas Core Infrastructure"
                            className="bg-[#141414] border-white/10 text-white pr-20 focus-visible:ring-1 focus-visible:ring-white/20 h-10"
                        />
                        <span className="absolute right-3 top-3 text-xs text-gray-500">/eng-atlas</span>
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <ReusableLabel label="Description" required />
                    <Textarea
                        id="description"
                        defaultValue="Unified micro-edge mesh topology supporting sub-5ms routing for planetary microservices."
                        className="bg-[#141414] border-white/10 text-white min-h-20 resize-none focus-visible:ring-1 focus-visible:ring-white/20 text-sm"
                    />
                </div>

                {/* Workflow Template */}
                <div className="space-y-2">
                    <ReusableLabel label="Workflow template" required />
                    <ReusableRadioGroup
                        options={PROJECT_RADIO_GROUP.options}
                        value={workflow}
                        onChange={setWorkflow} />
                </div>

                {dialogType == "edit" ? (
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <ReusableLabel label="Lifecyle status" required />
                            <ReusableSelect value="" onValueChange={(val) => {}} className="w-full" options={PROJECT_STATUS.options} />
                        </div>

                        <div className="space-y-2">
                            <ReusableLabel label="Urgency level" required />
                            <ReusableSelect value="" onValueChange={(val) => {}} className="w-full" options={PROJECT_URGENCY.options} />
                        </div>
                    </div>
                ) : (<div className="space-y-2">
                    <ReusableLabel label="Urgency level" required />
                    <ReusableSelect value="" onValueChange={(val) => {}} className="w-full" options={PROJECT_URGENCY.options} />
                </div>)}

                {/* Lead & Delivery Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <ReusableLabel label="Project Lead" required />
                        <ReusableSelect value="" onValueChange={(val) => {}} className="w-full" options={PROJECT_LEAD_SELECT.options} />
                    </div>

                    <div className="space-y-2">
                        <ReusableLabel label="Target Delivery" required />
                        <ReusableSelect value="" onValueChange={(val) => {}} className="w-full" options={PROJECT_QUARTER_SELECT.options} />
                    </div>
                </div>

                {/* Access Level */}
                <div className="space-y-2">
                    <ReusableLabel label="Access level" required />
                    <div className="grid grid-cols-2 gap-2 p-1 bg-[#141414] rounded-lg border border-white/10">
                        <Button
                            onClick={() => setAccess("public")}
                            className={`flex items-center justify-center gap-2 py-2 rounded-md text-xs font-medium transition-colors ${access === "public" ? "bg-white/10 text-white shadow-sm" : "text-gray-500 hover:text-gray-300"
                                }`}
                        >
                            <Globe className="h-3.5 w-3.5" /> Workspace Public
                        </Button>
                        <Button
                            onClick={() => setAccess("private")}
                            className={`flex items-center justify-center gap-2 py-2 rounded-md text-xs font-medium transition-colors ${access === "private" ? "bg-white/10 text-white shadow-sm" : "text-gray-500 hover:text-gray-300"
                                }`}
                        >
                            <Lock className="h-3.5 w-3.5" /> Private / Restricted
                        </Button>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <DialogFooter className="flex items-end justify-end px-6 py-4 border-t border-white/5 bg-[#0A0A0A]">
                <div className="flex items-center gap-3">
                    <Button onClick={() => {
                        openDialog(null);
                        setDialogType(null);
                    }} variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/5 text-xs h-9">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        openDialog(null);
                        setDialogType(null);
                    }} className="bg-white text-black hover:bg-gray-200 rounded-full text-xs h-9 px-6 font-medium">
                        Create project
                    </Button>
                </div>
            </DialogFooter>
        </ReusableDialog>
    );
}

export default CreateProjectModal;