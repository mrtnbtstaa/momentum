"use client";

import ReusableTabs from "@/components/reusable/Tabs/ReusableTabs";
import { TASK_SORT, TASK_STATUS_TAB } from "../types/task-generic.types";
import ReusableSelect from "@/components/reusable/Select/Select";

const TaskFilter = () => {

    return (
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

            {/* Status Tabs */}
            <ReusableTabs options={TASK_STATUS_TAB.options} />

            {/* Right Side: Sort & View Toggles */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500 whitespace-nowrap">Sort by:</span>
                    <ReusableSelect value="" onValueChange={(val) => { }} options={TASK_SORT} />
                </div>

            </div>
        </div>
    )

}

export default TaskFilter;