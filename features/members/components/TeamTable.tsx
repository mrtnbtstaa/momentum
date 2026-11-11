"use client";
import { useState, useMemo } from 'react';
import ReusableTable from '@/components/reusable/Table/Table';
import TableColumns from './Columns';
import { TeamMember } from '../types/members.t';
import MemberHeader from './MemberHeader';
import Wrapper from '@/components/reusable/Wrapper/Wrapper';
import MemberFilter from './MemberFilter';

interface TeamViewProps {
    data: TeamMember[];
    onInviteClick?: () => void;
    onEditMember?: (member: TeamMember) => void;
    onSuspendMember?: (id: string) => void;
}

const TeamView = ({
    data,
    onInviteClick,
    onEditMember,
    onSuspendMember,
}: TeamViewProps) => {
    const [globalFilter, setGlobalFilter] = useState('');
    const [roleFilter] = useState<string>('All');
    const [statusFilter] = useState<string>('All');

    // Filter logic across tabs and search query
    const filteredData = useMemo(() => {
        return data.filter((member) => {
            const matchesSearch =
                member.name.toLowerCase().includes(globalFilter.toLowerCase()) ||
                member.email.toLowerCase().includes(globalFilter.toLowerCase());

            const matchesRole =
                roleFilter === 'All' ||
                (roleFilter === 'Administrators' && member.role === 'Administrator') ||
                (roleFilter === 'Managers' && member.role === 'Manager') ||
                (roleFilter === 'Members' && member.role === 'Member');

            const matchesStatus =
                statusFilter === 'All' ||
                (statusFilter === 'Active' && member.status === 'Active') ||
                (statusFilter === 'Suspended' && member.status === 'Suspended');

            return matchesSearch && matchesRole && matchesStatus;
        });
    }, [data, globalFilter, roleFilter, statusFilter]);

    return (
        <Wrapper >
            <MemberHeader member={data} />
            <MemberFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
            <ReusableTable
                columns={TableColumns({onEditMember, onSuspendMember})}
                data={filteredData}
                footerTitle="members"
            />
        </Wrapper>
    );
};

export default TeamView;