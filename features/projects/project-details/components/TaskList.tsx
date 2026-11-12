"use client";

import { Task } from '../../projects/types/projects.t';
import { MoreVertical, Check, Info, Edit2, Trash2 } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useDialogStore } from '@/store/useDialogStore';
import { DIALOG_KEY } from '@/lib/dialog-key';
import { useParams } from 'next/navigation';
import { INITIAL_TASKS } from '../data/mockTasks';
import ProjectDetailsModal from './ProjectDetailsModal';

interface TaskListProps {
    tasks: Task[];
    onToggleTask: (id: string) => void;
    onEditTask?: (task: Task) => void;
    onDeleteTask?: (id: string) => void;
}

const TaskList = ({
    tasks,
    onToggleTask,
    onEditTask,
    onDeleteTask,
}: TaskListProps) => {
    const openDialog = useDialogStore((state) => state.openDialog);
    const { id } = useParams();
    const task = INITIAL_TASKS.find((p) => p.id == id)
    return (
        <>
            <div className="flex flex-col gap-2.5">
                {tasks.length === 0 ? (
                    <div className="bg-zinc-950/40 border border-zinc-800/80 rounded-xl p-8 text-center text-sm text-zinc-500">
                        No tasks found matching the selected filter.
                    </div>
                ) : (
                    tasks.map((task) => {
                        return (
                            <div
                                key={task.id}
                                className="bg-zinc-950/40 border border-zinc-800/80 hover:border-zinc-700/80 rounded-xl p-4 flex items-center justify-between gap-4 transition-all group"
                            >
                                {/* Left Side: Checkbox & Title/Meta */}
                                <div className="flex items-center gap-3.5 min-w-0">
                                    <button
                                        type="button"
                                        onClick={() => onToggleTask(task.id)}
                                        className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors cursor-pointer shrink-0 ${task.completed
                                            ? 'bg-indigo-600 border-indigo-500 text-white'
                                            : 'border-zinc-700 bg-zinc-900/80 hover:border-zinc-600'
                                            }`}
                                    >
                                        {task.completed && <Check className="w-3.5 h-3.5 stroke-3" />}
                                    </button>

                                    <div className="flex flex-col gap-0.5 min-w-0">
                                        <span
                                            className={`text-sm font-medium truncate ${task.completed ? 'line-through text-zinc-500' : 'text-zinc-100 group-hover:text-white'
                                                }`}
                                        >
                                            {task.title}
                                        </span>
                                        <div className="flex items-center gap-2 text-xs text-zinc-500">
                                            <span className="font-mono text-zinc-400">{task.code}</span>
                                            <span>•</span>
                                            <span>{task.category}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Due Date, Priority, Avatar & Dropdown Menu */}
                                <div className="flex items-center gap-4 shrink-0">
                                    {/* Due Date Badge / Label */}
                                    {task.isOverdue ? (
                                        <span className="px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium">
                                            {task.dueDate}
                                        </span>
                                    ) : task.completed ? (
                                        <span className="text-xs text-zinc-500 font-medium px-1">Done</span>
                                    ) : (
                                        <span className="text-xs text-zinc-400 font-medium px-1">{task.dueDate}</span>
                                    )}

                                    {/* Priority Badge */}
                                    <span
                                        className={`px-2.5 py-1 rounded-md text-xs font-medium border ${task.priority === 'Urgent'
                                            ? 'bg-zinc-800/80 border-zinc-700/80 text-zinc-200'
                                            : task.priority === 'High'
                                                ? 'bg-zinc-800/80 border-zinc-700/80 text-zinc-200'
                                                : task.priority === 'Medium'
                                                    ? 'bg-zinc-800/80 border-zinc-700/80 text-zinc-300'
                                                    : 'bg-zinc-800/80 border-zinc-700/80 text-zinc-400'
                                            }`}
                                    >
                                        {task.priority}
                                    </span>

                                    {/* Assignee Avatar */}
                                    <Avatar className="w-6 h-6 border border-zinc-800">
                                        {task.assigneeAvatar ? (
                                            <AvatarImage src={task.assigneeAvatar} alt="Assignee" className="object-cover" />
                                        ) : null}
                                        <AvatarFallback className="bg-zinc-800 text-[10px] text-zinc-300 font-semibold">
                                            U
                                        </AvatarFallback>
                                    </Avatar>

                                    {/* Action Dropdown Menu */}
                                    <DropdownMenu>
                                        <DropdownMenuTrigger render={
                                            <Button
                                                type="button"
                                                className="text-zinc-500 hover:text-zinc-300 p-1 rounded-md transition-colors cursor-pointer focus:outline-none"
                                                aria-label="Task options"
                                            >
                                                <MoreVertical className="w-4 h-4" />
                                            </Button>}>

                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="end"
                                            className="w-36 bg-zinc-900 border-zinc-800 text-zinc-200 rounded-xl p-1.5 shadow-2xl"
                                        >
                                            <DropdownMenuItem
                                                onClick={() => openDialog(DIALOG_KEY.PROJECT_TASK_DETAILS_DIALOGS)}
                                                className="text-xs flex items-center gap-2 px-3 py-2 rounded-lg focus:bg-zinc-800 focus:text-white cursor-pointer"
                                            >
                                                <Info className="w-4 h-4 text-zinc-400" />
                                                Details
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onClick={() => openDialog(DIALOG_KEY.EDIT_PROJECT_TASK_DETAILS_DIALOGS)}
                                                className="text-xs flex items-center gap-2 px-3 py-2 rounded-lg focus:bg-zinc-800 focus:text-white cursor-pointer"
                                            >
                                                <Edit2 className="w-4 h-4 text-zinc-400" />
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onClick={() => openDialog(DIALOG_KEY.DELETE_PROJECT_TASK_DIALOG)}
                                                className="text-xs flex items-center gap-2 px-3 py-2 rounded-lg focus:bg-rose-500/10 focus:text-rose-400 text-rose-500 cursor-pointer"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
           <ProjectDetailsModal task={task} />
        </>
    );
};

export default TaskList;