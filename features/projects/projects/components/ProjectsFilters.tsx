"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import ReusableTabs from "@/components/reusable/Tabs/ReusableTabs";
import { PROJECT_STATUS_TABS } from "../data/project-generic.types";
import ReusableSelect from "@/components/reusable/Select/Select";


export function ProjectsFilters() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-3">
        {/* Status Filter */}
        <ReusableTabs options={PROJECT_STATUS_TABS.options} />
      </div>
      {/* Search */}
      <div className="relative w-full lg:max-w-xs">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          placeholder="Search by project name..."
          className="pl-9 bg-[#141414] border-white/5 text-gray-200 rounded-full h-9 focus-visible:ring-1 focus-visible:ring-white/20"
        />
      </div>
    </div>
  );
}