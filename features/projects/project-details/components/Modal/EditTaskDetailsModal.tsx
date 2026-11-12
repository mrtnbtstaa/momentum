"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar } from 'lucide-react';
import ReusableDialog from '@/components/reusable/Dialog/Dialog';
import { Task } from '@/features/projects/projects/types/projects.t';
import ReusableSelect from '@/components/reusable/Select/Select';
import { PROJECT_TASK_URGENT_STATUS, PROJECT_TASK_WORKFLOW_STATUS } from '../../data/project-task-generic.types';
import { useDialogStore } from '@/store/useDialogStore';
import { DIALOG_KEY } from '@/lib/dialog-key';
import ReusableLabel from '@/components/reusable/Label/Label';
import { DialogFooter } from '@/components/ui/dialog';
import ReusableInput from '@/components/reusable/Input/Input';
import ReusableTextArea from '@/components/reusable/TextArea/TextArea';

interface EditTaskModalProps {
  task: Task | null;
  onSave?: (updatedTask: Task) => void;
  onDeleteTask?: (id: string) => void;
  onSwitchToDetails?: () => void;
}

export const EditTaskModal: React.FC<EditTaskModalProps> = ({
  task,
  onSave,
  onDeleteTask,
  onSwitchToDetails,
}) => {
  if (!task) return null;

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(
    "Deprecate legacy hex color references across core widgets. Migrate theme tokens into W3C Community Group JSON specs with bidirectional Figma Variables sync & multi-density tokens."
  );
  const [status, setStatus] = useState(task.status || "In Progress");
  const [priority, setPriority] = useState(task.priority || "Urgent");
  const [dueDate, setDueDate] = useState("11/02/2026");

  const dialogKey = useDialogStore((state) => state.dialogKey);
  const openDialog = useDialogStore((state) => state.openDialog);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave?.({
      ...task,
      title,
      status: status as any,
      priority: priority as any,
    });
    openDialog(null);
  };

  return (
    <ReusableDialog
      isOpen={dialogKey === DIALOG_KEY.EDIT_PROJECT_TASK_DETAILS_DIALOGS}
      setOpen={(value) => openDialog(value ? DIALOG_KEY.EDIT_PROJECT_TASK_DETAILS_DIALOGS : null)}
      dialogTitle="Edit Task"
      dialogDescription="Update task specifications, timeline, assignee, and deliverables."
    >
      {/* Flex container enforcing fixed modal height with a pinned footer */}
      <form onSubmit={handleSave} className="flex flex-col h-full max-h-[80vh]">

        {/* Scrollable Body Container */}
        <div className="p-6 flex flex-col gap-5 overflow-y-auto custom-scrollbar flex-1 min-h-0">

          {/* Sub-header info badge */}
          <div className="flex items-center justify-between text-xs pb-1 border-b border-white/5">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">{task.code}</span>
              <span aria-hidden="true">•</span>
              <span>Tokens Engine</span>
              <span aria-hidden="true">•</span>
              <span>Atlas Core</span>
            </div>
            <span className="text-zinc-500 font-medium">Core Deliverable</span>
          </div>

          {/* Task Title Input */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <ReusableLabel label="Task Title" required />
              <span className="text-[11px] text-zinc-500 font-mono">{title.length} / 120</span>
            </div>
            <ReusableInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={120}
              aria-label="Task Title"
              required
            />
          </div>

          {/* Description & Specs Textarea */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <ReusableLabel label="Description & Specifications" required />
              <span className="text-[11px] text-zinc-500">Atlas Core Specification</span>
            </div>
            <ReusableTextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              required
              aria-label="Description and Specifications"
            />
          </div>

          {/* Grid for Workflow Status, Priority, Assignee, Due Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="space-y-2">
              <ReusableLabel label="Workflow Status" required />
              <ReusableSelect
                value={status}
                onValueChange={(val) => { }}
                className="w-full"
                options={PROJECT_TASK_WORKFLOW_STATUS}
                aria-label="Workflow Status"
              />
            </div>

            <div className="space-y-2">
              <ReusableLabel label="Priority Severity" required />
              <ReusableSelect
                value={priority}
                onValueChange={(val) => { }}
                className="w-full"
                options={PROJECT_TASK_URGENT_STATUS}
                aria-label="Priority Severity"
              />
            </div>

            {/* Assignee */}
            <div className="rounded-xl flex flex-col gap-2">
              <ReusableLabel label="Assignee" />
              <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-2">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6 shrink-0">
                    <AvatarImage src={task.assigneeAvatar} className="object-cover" alt="Sarah Chen avatar" />
                    <AvatarFallback className="bg-indigo-600 text-white text-[10px]">SC</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs font-semibold text-zinc-200">Sarah Chen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Due Date */}
            <div className="rounded-2xl flex flex-col justify-between gap-2">
              <div className="flex items-center justify-between">
                <ReusableLabel label="Due Date" required />
              </div>
              <div className="relative">
                <ReusableInput
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  aria-label="Due Date"
                />
                <Calendar className="w-4 h-4 text-zinc-400 absolute right-3 top-3 pointer-events-none" aria-hidden="true" />
              </div>
            </div>

          </div>

        </div>

        {/* Footer Actions (Pinned via shrink-0 & mt-auto) */}
        <DialogFooter className="flex items-center justify-between px-6 py-4 bg-[#0A0A0A] border-t border-white/5 shrink-0 mt-auto">


          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => openDialog(null)}
              className="bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-zinc-300 text-xs h-9 px-4 rounded-xl cursor-pointer focus-visible:ring-1 focus-visible:ring-zinc-600"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs h-9 px-5 rounded-xl shadow-sm flex items-center gap-2 cursor-pointer transition-transform hover:scale-[1.02] focus-visible:ring-1 focus-visible:ring-zinc-400"
            >
              Save
            </Button>
          </div>
        </DialogFooter>

      </form>
    </ReusableDialog>
  );
};

export default EditTaskModal;