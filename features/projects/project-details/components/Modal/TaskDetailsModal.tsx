"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Edit3,
  FileText,
  Calendar,
  Trash2,
  Sparkles
} from 'lucide-react';
import ReusableDialog from '@/components/reusable/Dialog/Dialog';
import { Task } from '@/features/projects/projects/types/projects.t';
import { useDialogStore } from '@/store/useDialogStore';
import { DIALOG_KEY } from '@/lib/dialog-key';

interface TaskDetailsModalProps {
  task: Task | null;
  onEditClick?: () => void;
  onDeleteTask?: (id: string) => void;
}

const TaskDetailsModal = ({
  task,
  onEditClick,
  onDeleteTask,
}: TaskDetailsModalProps) => {
  if (!task) return null;
  const dialogKey = useDialogStore((state) => state.dialogKey);
  const openDialog = useDialogStore((state) => state.openDialog);

  return (
    <ReusableDialog
      isOpen={dialogKey === DIALOG_KEY.PROJECT_TASK_DETAILS_DIALOGS}
      setOpen={(value) => openDialog(value ? DIALOG_KEY.PROJECT_TASK_DETAILS_DIALOGS : null)}
      dialogTitle="Atlas Core"
      dialogDescription={task.title}
    >
      {/* Flex container enforcing fixed modal height with a pinned footer */}
      <div className="flex flex-col h-full max-h-[80vh]">

        {/* Scrollable Body Container */}
        <div className="p-6 flex flex-col gap-4 overflow-y-auto custom-scrollbar flex-1 min-h-0">

          {/* Top 2x2 Grid for Status, Priority, Assignee, Due Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Status Card */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-4 flex flex-col justify-between gap-3">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Status</span>
              <div className="flex items-center">
                <div className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500" aria-hidden="true" /> In Progress
                </div>
              </div>
            </div>

            {/* Priority Card */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-4 flex flex-col justify-between gap-3">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Priority</span>
              <div className="flex items-center">
                <div className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-medium text-rose-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" aria-hidden="true" /> Urgent
                </div>
              </div>
            </div>

            {/* Assignee Card */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-4 flex flex-col justify-between gap-3">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Assignee</span>
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={task.assigneeAvatar} className="object-cover" alt="Sarah Chen avatar" />
                  <AvatarFallback className="bg-indigo-600 text-white text-xs">SC</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-zinc-200">Sarah Chen</span>
                  <span className="text-[11px] text-zinc-500">Product Lead</span>
                </div>
              </div>
            </div>

            {/* Due Date Card */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-4 flex flex-col justify-between gap-3">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Due Date</span>
              <div className="flex items-center">
                <div className="px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-medium text-rose-400 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" /> Nov 02 (Overdue)
                </div>
              </div>
            </div>

          </div>

          {/* Description / Specs Section */}
          <div className="flex flex-col gap-2 pt-2">
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" aria-hidden="true" /> Description / Specs
            </span>
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-4 text-xs text-zinc-300 leading-relaxed">
              Deprecate legacy hex color references across core widgets. Migrate theme tokens into <strong className="text-white font-medium">W3C Community Group JSON specs</strong> with bidirectional Figma Variables sync &amp; multi-density tokens.
            </div>
          </div>

          {/* Activity / Audit Log Item */}
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-3.5 flex items-center gap-3 text-xs text-zinc-400">
            <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-300" aria-hidden="true">
              <Sparkles className="w-3 h-3 text-sky-400" />
            </div>
            <div>
              <strong className="text-zinc-200 font-semibold">Sarah Chen</strong> updated status to <span className="text-sky-400 font-medium">In Progress</span> <span className="text-zinc-600" aria-hidden="true">•</span> 2h ago
            </div>
          </div>

        </div>

        {/* Footer Actions (Pinned via shrink-0 & mt-auto) */}
        <footer className="flex items-center justify-between px-6 py-4 bg-[#0A0A0A] border-t border-white/5 shrink-0 mt-auto">
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              onDeleteTask?.(task.id);
              openDialog(null);
            }}
            className="text-rose-500 hover:text-rose-400 hover:bg-rose-500/10 text-xs h-9 px-3 rounded-xl flex items-center gap-1.5 font-medium cursor-pointer focus-visible:ring-1 focus-visible:ring-rose-500"
          >
            <Trash2 className="w-4 h-4" aria-hidden="true" /> Delete Task
          </Button>

          <div className="flex items-center gap-3">
            {onEditClick && (
              <Button
                type="button"
                variant="outline"
                onClick={onEditClick}
                className="bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-zinc-300 text-xs h-9 px-4 rounded-xl flex items-center gap-1.5 cursor-pointer focus-visible:ring-1 focus-visible:ring-zinc-600"
              >
                <Edit3 className="w-3.5 h-3.5" aria-hidden="true" /> Edit Task
              </Button>
            )}
            <Button
              type="button"
              onClick={() => openDialog(null)}
              className="bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs h-9 px-5 rounded-xl shadow-sm cursor-pointer transition-transform hover:scale-[1.02] focus-visible:ring-1 focus-visible:ring-zinc-400"
            >
              Close
            </Button>
          </div>
        </footer>

      </div>
    </ReusableDialog>
  );
};

export default TaskDetailsModal;