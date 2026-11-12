"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Info } from 'lucide-react';
import ReusableDialog from '@/components/reusable/Dialog/Dialog';
import { useDialogStore } from '@/store/useDialogStore';
import { DIALOG_KEY } from '@/lib/dialog-key';
import ReusableLabel from '@/components/reusable/Label/Label';
import ReusableSelect from '@/components/reusable/Select/Select';
import { PROJECT_ASSIGNMENT } from '../../types/generic-member.t';
import ReusableTextArea from '@/components/reusable/TextArea/TextArea';
import ReusableInput from '@/components/reusable/Input/Input';

interface InviteMembersModalProps {
    onSendInvites?: (emails: string[], role: string, project: string, note: string) => void;
}

const InviteMembersModal = ({
    onSendInvites,
}: InviteMembersModalProps) => {
    const [emails, setEmails] = useState<string[]>([
        "sarah.v@lumina.design",
        "dev-alex@core.io"
    ]);
    const [currentInput, setCurrentInput] = useState('');
    const [role, setRole] = useState<'Member' | 'Manager' | 'Administrator'>('Member');
    const [project, setProject] = useState('Atlas Core System');
    const [note, setNote] = useState('');

    const dialogKey = useDialogStore((state) => state.dialogKey);
    const openDialog = useDialogStore((state) => state.openDialog);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if ((e.key === 'Enter' || e.key === ',') && currentInput.trim()) {
            e.preventDefault();
            const trimmed = currentInput.trim().replace(',', '');
            if (trimmed && !emails.includes(trimmed)) {
                setEmails([...emails, trimmed]);
                setCurrentInput('');
            }
        } else if (e.key === 'Backspace' && !currentInput && emails.length > 0) {
            setEmails(emails.slice(0, -1));
        }
    };

    const removeEmail = (emailToRemove: string) => {
        setEmails(emails.filter(e => e !== emailToRemove));
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        onSendInvites?.(emails, role, project, note);
        openDialog(null);
    };

    const roleDescriptions = {
        Member: "Can view assigned projects, create tasks, and collaborate with the team.",
        Manager: "Can manage project workflows, assign tasks, and oversee team workloads.",
        Administrator: "Full workspace access, user management, and security configurations."
    };

    return (
        <ReusableDialog
            isOpen={dialogKey === DIALOG_KEY.INVITE_MEMBER_DIALOG}
            setOpen={(val) => openDialog(val ? DIALOG_KEY.INVITE_MEMBER_DIALOG : null)}
            dialogTitle="Invite members"
            dialogDescription="Add teammates to collaborate on projects and tasks."
        >
            <form onSubmit={handleSend} className="flex flex-col">

                {/* Body Form with Uniform Spacing */}
                <div className="px-6 py-4 space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar">

                    {/* Email Addresses Tag Input Box */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <ReusableLabel label="Email addresses" required />
                            <span className="text-[11px] text-zinc-500">Separate with commas or enter</span>
                        </div>

                        <div
                            aria-label="Email recipient tags"
                            className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-2.5 flex flex-wrap items-center gap-2 min-h-16 focus-within:ring-1 focus-within:ring-zinc-700 transition-all"
                        >
                            {emails.map((email) => (
                                <span
                                    key={email}
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-zinc-800/90 border border-zinc-700/60 text-xs text-zinc-200 font-mono shadow-sm"
                                >
                                    {email}
                                    <button
                                        type="button"
                                        onClick={() => removeEmail(email)}
                                        aria-label={`Remove ${email}`}
                                        className="text-zinc-400 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 rounded"
                                    >
                                        <X className="w-3.5 h-3.5" aria-hidden="true" />
                                    </button>
                                </span>
                            ))}
                            <ReusableInput
                                value={currentInput}
                                onChange={(e) => setCurrentInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder={emails.length === 0 ? "name@company.com" : ""}
                                aria-label="Email addreses"
                            />
                        </div>
                    </div>

                    {/* Role Segmented Selector */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-1.5">
                            <ReusableLabel label="Role" required />
                            <Info className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
                        </div>

                        <div className="grid grid-cols-3 p-1.5 rounded-2xl gap-1 bg-zinc-950/40 border border-zinc-800/80">
                            {(['Member', 'Manager', 'Administrator'] as const).map((r) => (
                                <Button
                                    key={r}
                                    type="button"
                                    onClick={() => setRole(r)}
                                    aria-pressed={role === r}
                                    className={`py-2 text-xs font-medium rounded-xl transition-all cursor-pointer focus-visible:ring-1 focus-visible:ring-indigo-500 ${role === r
                                        ? 'bg-zinc-800 text-white shadow-md font-semibold border border-zinc-700/50'
                                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 bg-transparent shadow-none border-transparent'
                                        }`}
                                >
                                    {r}
                                </Button>
                            ))}
                        </div>
                        <p className="text-[11px] text-zinc-500 px-1 leading-relaxed">
                            {roleDescriptions[role]}
                        </p>
                    </div>

                    {/* Project Assignment Dropdown */}
                    <div className="space-y-2">
                        <ReusableLabel label="Project assignment" required />
                        <ReusableSelect
                            className="w-full"
                            options={PROJECT_ASSIGNMENT}
                            value={project}
                            onValueChange={setProject}
                            aria-label="Project assignment"
                        />
                    </div>

                    {/* Personal Note Textarea */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <ReusableLabel label="Personal note" />
                            <span className="text-[11px] text-zinc-500 font-mono">{note.length} / 140 max</span>
                        </div>
                        <ReusableTextArea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            maxLength={140}
                            rows={3}
                            placeholder="Add a personal note to the invite email..."
                            aria-label="Personal note"
                        />
                    </div>

                </div>

                {/* Footer Actions & Counter */}
                <footer className="flex items-center justify-between px-6 py-4 border-t border-white/5 bg-[#0A0A0A]">
                    <span className="text-xs text-zinc-400 font-medium">
                        Pending invites: <strong className="text-white font-mono">{emails.length}</strong>
                    </span>

                    <div className="flex items-center gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => openDialog(null)}
                            className="bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-zinc-300 text-xs h-9 px-4 rounded-xl cursor-pointer focus-visible:ring-1 focus-visible:ring-indigo-500"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={emails.length === 0}
                            className="bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs h-9 px-5 rounded-xl shadow-sm cursor-pointer disabled:opacity-40 transition-all hover:scale-[1.02] focus-visible:ring-1 focus-visible:ring-indigo-500"
                        >
                            Send invitations ({emails.length})
                        </Button>
                    </div>
                </footer>

            </form>
        </ReusableDialog>
    );
};

export default InviteMembersModal;