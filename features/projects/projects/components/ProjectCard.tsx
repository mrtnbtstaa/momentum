"use client";

import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "cn";
import { useDialogStore } from "@/store/useDialogStore";
import { DIALOG_KEY } from "@/lib/dialog-key";
import { Project } from "../types/projects.t";
import { useRouter } from "next/navigation";

const statusStyles = {
    Active: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20",
    "On hold": "bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20",
    Completed: "bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20",
};

const statusDotStyles = {
    Active: "bg-blue-400",
    "On hold": "bg-orange-400",
    Completed: "bg-green-400",
};

const progressColor = {
    Active: "[&>div]:bg-primary",
    "On hold": "[&>div]:bg-primary",
    Completed: "[&>div]:bg-green-500",
};

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {

    const openDialog = useDialogStore((state) => state.openDialog);
    const setDialogType = useDialogStore((state) => state.setDialogType);
    const router = useRouter();

    return (
        <div className="bg-[#141414] border border-white/5 rounded-2xl p-5 flex flex-col hover:border-white/10 transition-colors">
            {/* Header */}

            <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className={`px-2 py-0.5 gap-1.5 font-normal text-xs rounded-full ${statusStyles[project.status]}`}>
                    <span className={
                        cn(
                            `w-1.5 h-1.5 rounded-full ${statusDotStyles[project.status]}`,
                            statusDotStyles[project.status].includes("Active") && "animate-ping"
                        )
                    } />
                    {project.status}
                </Badge>

                <DropdownMenu>
                    <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="h-6 w-6 text-gray-500 hover:text-white -mr-2">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>}>

                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-[#141414] border-white/10 text-gray-300">
                        <DropdownMenuItem
                            onClick={() => {
                                openDialog(DIALOG_KEY.CREATE_PROJECT_DIALOG);
                                setDialogType("edit");
                            }}
                            className="focus:bg-white/10 focus:text-white cursor-pointer"
                        >
                            Edit Project
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => router.push(`/projects/${project.id}`)}
                            className="focus:bg-white/10 focus:text-white cursor-pointer"
                        >
                            View Project
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => openDialog(DIALOG_KEY.DELETE_PROJECT_DIALOG)} className="focus:bg-red-500/10 focus:text-red-400 text-red-400 cursor-pointer">Delete Project</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Title & Description */}
            <div className="mb-6 flex-1">
                <h3 className="text-xl font-semibold text-white mb-1.5">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                    {project.description}
                </p>
            </div>

            {/* Progress */}
            <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Progress</span>
                    <span className="text-white font-medium">{project.progress}%</span>
                </div>
                <Progress
                    value={project.progress}
                    className={`h-1 ${progressColor[project.status]}`}
                />
            </div>

            {/* Footer Details */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                        <Avatar className="h-5 w-5">
                            <AvatarFallback className="bg-white/10 text-[9px]">{project.ownerInitials}</AvatarFallback>
                        </Avatar>
                        {project.ownerName}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                        {project.members.map((member) => (
                            <Avatar key={member.id} className="h-6 w-6 border-2 border-[#141414] -ml-1.5 first:ml-0">
                                <AvatarFallback className={`${member.color} text-[9px] text-white`}>
                                    {member.initials}
                                </AvatarFallback>
                            </Avatar>
                        ))}
                        <div className="h-6 w-6 rounded-full bg-white/5 border-2 border-[#141414] -ml-1.5 flex items-center justify-center text-[9px] text-gray-400">
                            +2
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-1 text-xs text-gray-500">
                    <span>{project.dateRange}</span>
                    <span>{project.category}</span>
                </div>
            </div>
        </div>
    );
}