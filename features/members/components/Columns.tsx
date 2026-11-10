"use client";
import { ColumnDef, createColumnHelper, createPaginatedRowModel, rowPaginationFeature, tableFeatures, TableFeatures } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TeamMember } from "../types/members.t";

const features: TableFeatures = tableFeatures({
    rowPaginationFeature,
    paginatedRowModel: createPaginatedRowModel(),
});

const columnHelper = createColumnHelper<typeof features, TeamMember>();

interface TableColumnsProps {
    onEditMember?: (member: TeamMember) => void;
    onSuspendMember?: (id: string) => void;
}

const TableColumns = ({ onEditMember, onSuspendMember }: TableColumnsProps): ColumnDef<TableFeatures, TeamMember>[] => {

    return columnHelper.columns([
        {
            accessorKey: 'name',
            header: 'Member',
            cell: ({ row }: any) => {
                const member = row.original;
                return (
                    <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8 border border-white/10">
                            <AvatarImage src={member.avatar} className="object-cover" />
                            <AvatarFallback className="bg-indigo-600 text-white text-xs font-bold">
                                {member.name.split(' ').map((n: string) => n[0]).join('')}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold text-white">{member.name}</span>
                            <span className="text-[11px] text-[#888888]">{member.email}</span>
                        </div>
                    </div>
                );
            },
        },
        {
            accessorKey: 'role',
            header: 'Role',
            cell: ({ getValue }: any) => {
                const role = getValue() as string;
                return (
                    <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${role === 'Administrator' ? 'bg-sky-400' : 'bg-[#888888]'}`} />
                        <span className="text-xs font-medium text-zinc-300">{role}</span>
                    </div>
                );
            },
        },
        {
            accessorKey: 'status',
            header: 'Status',
            cell: ({ getValue }: any) => {
                const status = getValue() as string;
                const isActive = status === 'Active';
                return (
                    <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'}`} />
                        <span className={`text-xs font-medium ${isActive ? 'text-zinc-300' : 'text-rose-400'}`}>
                            {status}
                        </span>
                    </div>
                );
            },
        },
        {
            accessorKey: 'assignedTasks',
            header: 'Assigned Tasks',
            cell: ({ getValue }: any) => <span className="text-xs font-mono text-zinc-300">{getValue() as number}</span>,
        },
        {
            accessorKey: 'completedTasks',
            header: 'Completed Tasks',
            cell: ({ getValue }: any) => <span className="text-xs font-mono text-[#888888]">{getValue() as number}</span>,
        },
        {
            accessorKey: 'workloadPercentage',
            header: 'Workload',
            cell: ({ row }: any) => {
                const member = row.original;
                const isHeavy = member.workloadStatus === 'Heavy';
                return (
                    <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-[#888888]">—</span>
                        <span className={isHeavy ? 'text-amber-400 font-semibold' : 'text-zinc-300'}>
                            {member.workloadPercentage}% {member.workloadStatus}
                        </span>
                    </div>
                );
            },
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
                            <DropdownMenuItem onClick={() => onEditMember?.(member)} className="text-xs focus:bg-white/10 focus:text-white cursor-pointer py-2">
                                Edit Member
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onSuspendMember?.(member.id)} className="text-xs text-rose-400 focus:bg-rose-500/10 focus:text-rose-300 cursor-pointer py-2">
                                Suspend
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ]) as ColumnDef<TableFeatures, TeamMember>[];
};

export default TableColumns;