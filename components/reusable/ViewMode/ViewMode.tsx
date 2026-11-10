"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useViewModeStore } from "@/store/useViewModeStore";
import { viewMode } from "@/types/grid.types";
import { cn } from "cn";


const ViewMode = () => {

    const setViewMode = useViewModeStore((state) => state.setViewMode)

    return (
        <Tabs defaultValue="grid" className="hidden sm:block">
            <TabsList className="bg-[#141414] border border-white/10 p-1 h-9">
                {viewMode.map((v) => (
                    <TabsTrigger
                        onClick={() => setViewMode(v.name)}
                        key={v.name}
                        value={v.name}
                        className={cn(
                            "h-7 w-8 p-0 text-zinc-400 transition-colors",
                            "hover:bg-white/5 hover:text-white",
                            "data-[state=active]:bg-white/10 data-[state=active]:text-white"
                        )}
                    >
                        <v.icon className="h-4 w-4" />
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    )

}

export default ViewMode;