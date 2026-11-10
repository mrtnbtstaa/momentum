import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ProjectMember } from '@/features/projects/projects/types/projects.t';
import { useDialogStore } from '@/store/useDialogStore';
import { DIALOG_KEY } from '@/lib/dialog-key';
import ReusableDialog from '@/components/reusable/Dialog/Dialog';
import { DialogFooter } from '@/components/ui/dialog';

interface ManageMembersModalProps {
    members: ProjectMember[];
    onAddMember: (email: string, role: string) => void;
    onRemoveMember: (id: string) => void;
    projectName?: string;
}

const ManageMembersModal = ({
    members,
    onAddMember,
    onRemoveMember,
    projectName = "Atlas Core Infrastructure",
}: ManageMembersModalProps) => {
    const { dialogKey, openDialog } = useDialogStore((state) => state);
    const [email, setEmail] = useState('');
    const [role] = useState<string>('Member');

    const handleInvite = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        onAddMember(email, role);
        setEmail('');
    };

    return (
        <ReusableDialog
            isOpen={dialogKey === DIALOG_KEY.MANAGE_MEMBER_DIALOG}
            setOpen={(val) => val ? openDialog(DIALOG_KEY.MANAGE_MEMBER_DIALOG) : openDialog(null)}
            dialogTitle="Manage Members"
            dialogDescription={`${members.length} active contributors on ${projectName}`}
        >
            <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto custom-scrollbar flex flex-col">
                <div className="flex flex-col gap-5">
                    {/* Inline Invite Form */}
                    <form onSubmit={handleInvite} className="flex items-center gap-3">
                        <Input
                            type="email"
                            placeholder="colleague@acmeproduct.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label="New member email address"
                            className="flex-1 bg-zinc-900 border-zinc-800 text-xs text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-zinc-700 h-10 rounded-xl px-4"
                        />
                        <Button
                            type="submit"
                            disabled={!email.trim()}
                            className="bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs h-10 px-5 rounded-xl shadow-sm shrink-0 cursor-pointer disabled:opacity-40 transition-all hover:scale-[1.02]"
                        >
                            Invite
                        </Button>
                    </form>

                    {/* Members List */}
                    <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-1">
                        {members.map((member) => (
                            <div
                                key={member.id}
                                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-zinc-700/60 transition-colors"
                            >
                                <div className="flex items-center gap-3 min-w-0">
                                    <Avatar className="h-9 w-9 shrink-0">
                                        <AvatarFallback className={`text-xs font-bold text-white ${member.color}`}>
                                            {member.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-xs font-semibold text-zinc-100 truncate">
                                            Team Member #{member.id}
                                        </span>
                                        <span className="text-[11px] text-zinc-400 truncate">
                                            {member.id === "1" ? "Lead Architect" : "Platform Eng"}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                    <button
                                        type="button"
                                        aria-label={`Change role for team member ${member.id}`}
                                        className="px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700/50 text-xs font-medium text-zinc-200 flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
                                    >
                                        {member.id === "1" ? "Admin" : "Member"}
                                        <ChevronDown className="w-3 h-3 text-zinc-400" aria-hidden="true" />
                                    </button>

                                    {member.id !== "1" && (
                                        <button
                                            type="button"
                                            onClick={() => onRemoveMember(member.id)}
                                            aria-label={`Remove team member ${member.id}`}
                                            className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-500"
                                        >
                                            <X className="w-4 h-4" aria-hidden="true" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Action */}
                <DialogFooter className="flex items-center justify-end pt-3 border-t border-zinc-800/60 mt-auto">
                    <Button
                        type="button"
                        onClick={() => openDialog(null)}
                        className="bg-sky-500 hover:bg-sky-400 text-zinc-950 font-semibold text-xs h-9 px-6 rounded-xl shadow-sm cursor-pointer transition-transform hover:scale-[1.02] focus-visible:ring-1 focus-visible:ring-sky-600"
                    >
                        Done
                    </Button>
                </DialogFooter>
            </div>
        </ReusableDialog>
    );
};

export default ManageMembersModal;