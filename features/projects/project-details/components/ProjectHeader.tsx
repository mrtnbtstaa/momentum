"use client";

import { Calendar, Plus, Users, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReadMore from '@/components/reusable/ReadMore/ReadMore';
import { useDialogStore } from '@/store/useDialogStore';
import { DIALOG_KEY } from '@/lib/dialog-key';
import ManageMembersModal from './Modal/ManageMemebersModal';
import { useParams } from 'next/navigation';
import { projectsData } from '../../projects/data/mockProjects';
import CreateProjectModal from '../../projects/components/Modal/CreateProjectModal';

const statusStyles: Record<string, string> = {
  Active: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20",
  "On hold": "bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20",
  Completed: "bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20",
};

const statusDotStyles: Record<string, string> = {
  Active: "bg-blue-400",
  "On hold": "bg-orange-400",
  Completed: "bg-green-400",
};

interface ProjectHeaderProps {
  completedCount: number;
  totalTasks: number;
  onCreateTask?: () => void;
}

const ProjectHeader = ({
  completedCount,
  totalTasks,
  onCreateTask,
}: ProjectHeaderProps) => {
  const openDialog = useDialogStore((state) => state.openDialog);
  const { id } = useParams();

  const projectMembers = projectsData.find((p) => String(p.id) === String(id));

  // Defensive fallback if project ID is not found
  if (!projectMembers) {
    return (
      <div className="pb-6 border-b border-zinc-800/80 text-xs text-zinc-500">
        Project not found or loading...
      </div>
    );
  }

  const safeTotalTasks = totalTasks > 0 ? totalTasks : 1;
  const progressPercentage = Math.round((completedCount / safeTotalTasks) * 100);
  const projectStatus = projectMembers.status || "Active";

  return (
    <>
      <div className="flex flex-col gap-6 pb-6 border-b border-zinc-800/80">
        {/* Breadcrumb & Top Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-medium tracking-wider text-zinc-400 uppercase">
              Projects <span className="text-zinc-600" aria-hidden="true">/</span>{' '}
              <span className="text-zinc-200">{projectMembers.title}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight text-white">{projectMembers.title}</h1>

              <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${statusStyles[projectStatus] || statusStyles.Active}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${statusDotStyles[projectStatus] || statusDotStyles.Active} animate-pulse`} aria-hidden="true" />
                {projectStatus}
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-800/80 text-zinc-300 text-xs font-medium border border-zinc-700/50">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt={projectMembers.ownerName}
                  className="w-4 h-4 rounded-full object-cover"
                />
                <span>{projectMembers.ownerName}</span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-800/80 text-zinc-300 text-xs font-medium border border-zinc-700/50">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
                <span>Sep 12 – Nov 30</span>
              </div>
            </div>

            <ReadMore content={projectMembers.description ?? ""} />

            <div className="flex items-center gap-2 pt-1">
              <div className="flex -space-x-1.5 overflow-hidden" aria-hidden="true">
                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-zinc-950 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="" />
                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-zinc-950 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="" />
                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-zinc-950 object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" alt="" />
                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-zinc-950 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="" />
              </div>
              <span className="text-xs text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">+4</span>
              <span className="text-xs text-zinc-400 ml-1">{projectMembers.members?.length ?? 0} members active</span>
            </div>
          </div>

          {/* Action Buttons & Progress Bar Card */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-start justify-between gap-4 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80 shadow-sm">
            <div className="md:w-full lg:w-64 flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-zinc-400">PROGRESS - {progressPercentage}%</span>
                <span className="text-zinc-200">{completedCount} / {totalTasks} tasks completed</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={completedCount}
                aria-valuemin={0}
                aria-valuemax={totalTasks}
                className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden"
              >
                <div
                  className="bg-zinc-100 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                onClick={() => openDialog(DIALOG_KEY.CREATE_TASK_DIALOG)}
                className="bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs h-9 px-4 rounded-lg shadow-sm flex items-center gap-1.5 cursor-pointer transition-transform hover:scale-[1.02] focus-visible:ring-1 focus-visible:ring-zinc-400"
              >
                <Plus className="w-4 h-4" aria-hidden="true" /> Create task
              </Button>
              <Button
                onClick={() => openDialog(DIALOG_KEY.MANAGE_MEMBER_DIALOG)}
                variant="outline"
                className="bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border-zinc-700/80 text-xs h-9 px-3 rounded-lg flex items-center gap-1.5 cursor-pointer focus-visible:ring-1 focus-visible:ring-zinc-600"
              >
                <Users className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" /> Manage members
              </Button>
              <Button
                onClick={() => openDialog(DIALOG_KEY.CREATE_PROJECT_DIALOG)}
                variant="outline"
                className="bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border-zinc-700/80 text-xs h-9 px-3 rounded-lg flex items-center gap-1.5 cursor-pointer focus-visible:ring-1 focus-visible:ring-zinc-600"
              >
                <Settings className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" /> Edit project
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CreateProjectModal dialogType="edit" />
      <ManageMembersModal projectName={projectMembers.title} members={projectMembers.members ?? []} onAddMember={() => { }} onRemoveMember={() => { }} />
    </>
  );
};

export default ProjectHeader;