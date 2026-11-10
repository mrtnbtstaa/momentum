"use client";
import { ColumnDef, createColumnHelper, createPaginatedRowModel, rowPaginationFeature, tableFeatures, TableFeatures } from "@tanstack/react-table";
import {
    CheckCircle2,
    FolderKanban,
    AtSign,
    Clock,
    UserCheck,
    CheckCircle,
    AlertCircle,
    MoreVertical
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NotificationItem } from "../types/notifications.t";

const features: TableFeatures = tableFeatures({
    rowPaginationFeature,
    paginatedRowModel: createPaginatedRowModel(),
});

const columnHelper = createColumnHelper<typeof features, NotificationItem>();

interface NotificationColumnsProps {
    onActionClick?: (item: NotificationItem) => void;
    onMarkAsRead?: (id: string) => void;
    onDelete?: (id: string) => void;
}

export const NotificationColumns = ({
    onActionClick,
    onMarkAsRead,
    onDelete,
}: NotificationColumnsProps): ColumnDef<TableFeatures, NotificationItem, unknown>[] => {

    const getIcon = (type: NotificationItem['type']) => {
        switch (type) {
            case 'task_assigned':
                return <CheckCircle2 className="w-4 h-4 text-sky-400" />;
            case 'project_milestone':
            case 'project_member':
                return <FolderKanban className="w-4 h-4 text-purple-400" />;
            case 'mention':
                return <AtSign className="w-4 h-4 text-indigo-400" />;
            case 'deadline':
                return <Clock className="w-4 h-4 text-rose-400" />;
            case 'team_invite':
                return <UserCheck className="w-4 h-4 text-emerald-400" />;
            case 'task_completed':
                return <CheckCircle className="w-4 h-4 text-emerald-400" />;
            case 'priority_updated':
                return <AlertCircle className="w-4 h-4 text-amber-400" />;
            default:
                return <CheckCircle2 className="w-4 h-4 text-zinc-400" />;
        }
    };

    return columnHelper.columns([
        {
            accessorKey: 'title',
            header: 'NOTIFICATION',
            cell: ({ row }: any) => {
                const item = row.original;
                return (
                    <div className="flex items-start gap-3.5 py-1">
                        {/* Unread indicator dot */}
                        <div className="pt-1.5 shrink-0">
                            {item.unread ? (
                                <span className="w-2 h-2 rounded-full bg-sky-400 block shadow-sm shadow-sky-400/50" />
                            ) : (
                                <span className="w-2 h-2 rounded-full bg-transparent block" />
                            )}
                        </div>

                        {/* Icon badge */}
                        <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                            {getIcon(item.type)}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs font-semibold text-white">{item.title}</span>
                                <span className="text-[11px] text-[#888888] font-mono">•</span>
                                <span className="text-[11px] text-[#888888] font-medium">{item.subtitle}</span>
                            </div>
                            <p className="text-xs text-zinc-300 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                );
            },
        },
        {
            id: 'actions',
            header: 'DATE & ACTIONS',
            cell: ({ row }: any) => {
                const item = row.original;
                return (
                    <div className="flex items-center justify-end gap-4">
                        <span className="text-xs text-[#888888] font-mono">{item.timestamp}</span>

                        {item.actionLabel && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => onActionClick?.(item)}
                                className="bg-[#141414] hover:bg-white/10 border-white/10 text-xs text-sky-400 hover:text-sky-300 h-7 px-3 rounded-lg cursor-pointer transition-colors shadow-sm"
                            >
                                {item.actionLabel} →
                            </Button>
                        )}

                        <DropdownMenu>
                            <DropdownMenuTrigger render={
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-[#888888] hover:text-white hover:bg-white/5 cursor-pointer">
                                    <MoreVertical className="w-4 h-4" />
                                </Button>
                            }>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-40 bg-[#0A0A0A] border-white/10 text-white rounded-xl p-1 shadow-2xl">
                                <DropdownMenuItem onClick={() => onMarkAsRead?.(item.id)} className="text-xs focus:bg-white/10 focus:text-white cursor-pointer py-2">
                                    {item.unread ? 'Mark as read' : 'Mark as unread'}
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => onDelete?.(item.id)} className="text-xs text-rose-400 focus:bg-rose-500/10 focus:text-rose-300 cursor-pointer py-2">
                                    Delete notification
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                );
            },
        },
    ]);
};