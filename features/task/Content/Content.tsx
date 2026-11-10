"use client";

import ReusableTabs from "@/components/reusable/Tabs/ReusableTabs";
import { TASK_SORT, TASK_STATUS_TAB } from "../types/task-generic.types";
import ViewRenderer from "@/components/reusable/ViewRenderer/ViewRenderer";
import TaskBoardView from "../components/TaskBoardView";
import TaskListView from "../components/TaskListView";
import ReusableSelect from "@/components/reusable/Select/Select";
import TaskHeader from "../components/TaskHeader";
import Wrapper from "@/components/reusable/Wrapper/Wrapper";

const Content = () => {
    return (
        <Wrapper>

            {/* Header Area */}
            <TaskHeader />

            {/* Filters & Toggles */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

                {/* Status Tabs */}
                <ReusableTabs options={TASK_STATUS_TAB.options} />

                {/* Right Side: Sort & View Toggles */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500 whitespace-nowrap">Sort by:</span>
                        <ReusableSelect value="" onValueChange={(val) => {}} options={TASK_SORT.options} />
                    </div>

                </div>
            </div>

            <ViewRenderer
                gridView={<TaskBoardView />}
                listView={
                    <div className="flex flex-col gap-4 mt-2 w-full">
                        <TaskListView />
                    </div>
                }
                gridClassName="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
            />
        </Wrapper>
    );
}

export default Content;