import ReusableTabs from "@/components/reusable/Tabs/ReusableTabs";
import { TEAM_MEMBER_TABS } from "../types/generic-member.t";
import { Search } from "lucide-react";
import ReusableInput from "@/components/reusable/Input/Input";

interface MemberFilterProps {
    globalFilter: string;
    setGlobalFilter: (val: string) => void
}

const MemberFilter = ({ globalFilter, setGlobalFilter }: MemberFilterProps) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Filter Pills / Tabs */}
            <ReusableTabs options={TEAM_MEMBER_TABS.options} />
            {/* Search Bar */}
            <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-[#888888] absolute left-3 top-3" />
                <ReusableInput
                    placeholder="Search by name or email..."
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                />
            </div>
        </div>
    )
}

export default MemberFilter;