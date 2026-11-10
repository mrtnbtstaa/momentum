import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    ColumnDef,
    createColumnHelper,
    createPaginatedRowModel,
    rowPaginationFeature,
    TableFeatures,
    tableFeatures,
} from "@tanstack/react-table";
import { Project } from "../types/projects.t";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { DIALOG_KEY } from "@/lib/dialog-key";

const features: TableFeatures = tableFeatures({
    rowPaginationFeature,
    paginatedRowModel: createPaginatedRowModel(),
});

const columnHelper = createColumnHelper<typeof features, Project>();

interface TableColumnsProps {
    onEditProject: () => void;
    onViewProject: () => void;
    onDeleteProject: () => void;
}

const TableColumns = ({ onEditProject, onViewProject, onDeleteProject }: TableColumnsProps): ColumnDef<TableFeatures, Project>[] => {
    return (
        columnHelper.columns([
            {
                accessorKey: "title",
                header: "Project Name & Description",
                cell: ({ row }) => {
                    const project = row.original;

                    return (
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                                <span className="text-[13px] font-medium text-white">
                                    {project.title}
                                </span>
                                <span className="line-clamp-1 text-[12px] text-[#666666]">
                                    {project.description}
                                </span>
                            </div>
                        </div>
                    );
                },
            },
            {
                accessorKey: "status",
                header: "Status",
                cell: ({ row }) => {
                    const status = row.original.status;
                    const statusStyles = "bg-[#1A1A1A] text-[#A3A3A3] border-white/5";

                    const statusDotStyles: Record<Project["status"], string> = {
                        Active: "bg-blue-500",
                        "On hold": "bg-orange-500",
                        Completed: "bg-blue-500",
                    };

                    return (
                        <Badge
                            variant="outline"
                            className={`gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-normal shadow-none ${statusStyles}`}
                        >
                            <span
                                className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[status]}`}
                            />
                            {status}
                        </Badge>
                    );
                },
            },
            {
                accessorKey: "progress",
                header: "Progress",
                cell: ({ row }) => {
                    const { progress, status } = row.original;

                    const progressColorStyles: Record<Project["status"], string> = {
                        Active: "[&>div]:bg-blue-400",
                        "On hold": "[&>div]:bg-orange-400",
                        Completed: "[&>div]:bg-white",
                    };

                    return (
                        <div className="flex max-w-37.5 items-center gap-3">
                            <Progress
                                value={progress}
                                className={`h-0.75 bg-white/10 ${progressColorStyles[status]}`}
                            />
                            <span className="min-w-7.5 text-[12px] text-[#A3A3A3]">
                                {progress}%
                            </span>
                        </div>
                    );
                },
            },
            {
                accessorKey: "ownerName",
                header: "Lead & Team",
                cell: ({ row }) => {
                    const { ownerName, ownerInitials, members } = row.original;

                    return (
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <Avatar className="h-5 w-5 border border-white/10">
                                    <AvatarFallback className="bg-[#222] text-[9px] text-gray-300">
                                        {ownerInitials}
                                    </AvatarFallback>
                                </Avatar>
                                <span className="text-[12px] text-[#A3A3A3]">{ownerName}</span>
                            </div>
                            <div className="flex -space-x-1">
                                {members.slice(1).map((member, index) => (
                                    <Avatar
                                        key={`${member.initials}-${index}`}
                                        className="h-5 w-5 border border-[#0F0F0F]"
                                    >
                                        <AvatarFallback className="bg-[#222] text-[9px] text-gray-400">
                                            {member.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                ))}
                            </div>
                        </div>
                    );
                },
            },
            {
                accessorKey: "dateRange",
                header: () => <div className="pr-2 text-right">Timeline</div>,
                cell: ({ row }) => (
                    <div className="pr-2 text-right text-[13px] text-[#888888]">
                        {row.original.dateRange}
                    </div>
                ),
            },
            {
                id: 'actions',
                header: 'Actions',
                cell: ({ row }: any) => {
                    const member = row.original;
                    return (
                        <DropdownMenu>
                            <DropdownMenuTrigger render={
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-[#888888] hover:text-white hover:bg-white/5 cursor-pointer">
                                    <MoreVertical className="w-4 h-4" />
                                </Button>
                            }>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-36 bg-[#0A0A0A] border-white/10 text-white rounded-xl p-1 shadow-2xl">
                                <DropdownMenuItem onClick={onEditProject} className="text-xs focus:bg-white/10 focus:text-white cursor-pointer py-2">
                                    Edit Project
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={onViewProject} className="text-xs focus:bg-white/10 focus:text-white cursor-pointer py-2">
                                    View Project
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={onDeleteProject} className="text-xs text-rose-400 focus:bg-rose-500/10 focus:text-rose-300 cursor-pointer py-2">
                                    Delete Project
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    );
                },
            },
        ]) as ColumnDef<TableFeatures, Project>[]
    );
}


export default TableColumns;