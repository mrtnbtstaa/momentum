"use client";

import HeaderSection from "@/components/reusable/HeaderSection/HeaderSection";
import { TeamMember } from "../types/members.t";
import { useDialogStore } from "@/store/useDialogStore";
import { DIALOG_KEY } from "@/lib/dialog-key";
import InviteMembersModal from "./Modal/InviteMemberModal";

interface MemberHeaderProps {
    member: TeamMember[]
}

const MemberHeader = ({ member }: MemberHeaderProps) => {

    const openDialog = useDialogStore((state) => state.openDialog)

    return (
        <>
            <HeaderSection
                title="Team"
                subTitle={`${member.length} members · ${member.filter(m => m.status === 'Active').length} active`}
                buttonContent="Invite members"
                onButtonClicked={() => openDialog(DIALOG_KEY.INVITE_MEMBER_DIALOG)}
            />
            <InviteMembersModal />
        </>
    )
}

export default MemberHeader;