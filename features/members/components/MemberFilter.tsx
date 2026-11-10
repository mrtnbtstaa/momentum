import ReusableTabs from "@/components/reusable/Tabs/ReusableTabs";
import { TEAM_MEMBER_TABS } from "../types/generic-member.t";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface MemberFilterProps {
    globalFilter: string;
    setGlobalFilter: (val: string) => void
}

const MemberFilter = ({globalFilter, setGlobalFilter}: MemberFilterProps) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

            {/* Filter Pills / Tabs */}
            <ReusableTabs options={TEAM_MEMBER_TABS.options} />

            {/* Search Bar */}
            <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-[#888888] absolute left-3 top-3" />
                <Input
                    placeholder="Search by name or email..."
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="bg-[#141414] border-white/10 text-xs text-white placeholder:text-[#888888] h-10 pl-9 rounded-xl focus-visible:ring-white/20"
                />
            </div>
        </div>
    )
}

export default MemberFilter;