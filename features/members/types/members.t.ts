export interface TeamMember {
    id: string;
    name: string;
    email: string;
    avatar: string;
    role: 'Administrator' | 'Manager' | 'Member';
    status: 'Active' | 'Suspended';
    assignedTasks: number;
    completedTasks: number;
    workloadPercentage: number;
    workloadStatus: 'Balanced' | 'Heavy' | 'Light';
}