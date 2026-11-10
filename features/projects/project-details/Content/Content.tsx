"use client";

import { useState } from 'react';
import { Task } from '../../projects/types/projects.t';
import { INITIAL_ACTIVITIES, INITIAL_TASKS } from '../data/mockTasks';
import ProjectHeader from '../components/ProjectHeader';
import MetricCards from '../components/MetricCards';
import { AiStatusSummary } from '../components/AiStatusSummary';
import TaskFilters from '../components/TaskFilters';
import TaskList from '../components/TaskList';
import ActivityFeed from '../components/ActivityFeed';
import ProjectNotes from '../components/ProjectNotes';
import Wrapper from '@/components/reusable/Wrapper/Wrapper';

const Content = () => {
    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
    const [statusFilter, setStatusFilter] = useState<string>('All');

    // Compute metrics dynamically based on task state
    const totalTasks = tasks.length;
    const completedCount = tasks.filter((t) => t.completed || t.status === 'Completed').length;
    const inProgressCount = tasks.filter((t) => t.status === 'In Progress' && !t.completed).length;
    const overdueCount = tasks.filter((t) => t.isOverdue && !t.completed).length;

    const handleToggleTask = (id: string) => {
        setTasks((prev) =>
            prev.map((task) => {
                if (task.id === id) {
                    const nextCompleted = !task.completed;
                    return {
                        ...task,
                        completed: nextCompleted,
                        status: nextCompleted ? 'Completed' : task.isOverdue ? 'Overdue' : 'In Progress',
                    };
                }
                return task;
            })
        );
    };

    const handleCreateTask = () => {
        const title = prompt('Enter task title:');
        if (!title) return;
        const newTask: Task = {
            id: Date.now().toString(),
            code: `CORE-0${Math.floor(Math.random() * 90) + 10}`,
            title,
            category: 'General',
            status: 'In Progress',
            priority: 'Medium',
            dueDate: 'Nov 15',
            assigneeAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
            completed: false,
        };
        setTasks([newTask, ...tasks]);
    };

    // Filter tasks
    const filteredTasks = tasks.filter((task) => {
        if (statusFilter === 'All') return true;
        if (statusFilter === 'Overdue') return task.isOverdue && !task.completed;
        if (statusFilter === 'In Progress') return task.status === 'In Progress' && !task.completed;
        if (statusFilter === 'Completed') return task.completed || task.status === 'Completed';
        return true;
    });

    return (
        <Wrapper>
            {/* Project Header */}
            <ProjectHeader
                completedCount={completedCount}
                totalTasks={totalTasks}
                onCreateTask={handleCreateTask}
            />

            {/* Metric Cards */}
            <MetricCards
                totalTasks={totalTasks}
                inProgressCount={inProgressCount}
                completedCount={completedCount}
                overdueCount={overdueCount}
            />

            {/* AI Status Summary Banner */}
            <AiStatusSummary />

            {/* Main Content Split: Tasks & Sidebar (Activity / Notes) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                {/* Left / Main Column: Task List or Board */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    <TaskFilters
                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}
                        totalTasksCount={totalTasks}
                    />

                    <TaskList tasks={filteredTasks} onToggleTask={handleToggleTask} />
                </div>

                {/* Right Column: Activity Feed & Project Notes */}
                <div className="flex flex-col gap-6">
                    <ActivityFeed activities={INITIAL_ACTIVITIES} />
                    <ProjectNotes />
                </div>
            </div>
        </Wrapper>
    );
}

export default Content;