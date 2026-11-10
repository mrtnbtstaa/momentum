import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GenericTabsOption } from "./tabs.types";

interface TabProps<T extends string> extends GenericTabsOption<T>{
    onValueChange?: (value: T) => void;
    value?: T;
    defaultValue?: string;
}

const ReusableTabs = <T extends string>({ options, value, defaultValue = "All", onValueChange }: TabProps<T>) => {
    return (
        <Tabs defaultValue={defaultValue} value={value} onValueChange={onValueChange} className="w-full min-w-0 max-w-full">
            <div className="min-w-0 max-w-full overflow-x-auto overflow-y-hidden scrollbar-none">
                <TabsList className="flex w-max min-w-full justify-start bg-[#141414] border border-white/5 h-9 p-1 rounded-md">
                    {options.map(({ tab }) => (
                        <TabsTrigger
                            key={tab}
                            value={tab}
                            className="flex-none whitespace-nowrap rounded-md text-xs h-7 px-3 sm:px-4 text-gray-400 hover:text-white hover:bg-white/5 data-[state=active]:bg-white/10 data-[state=active]:text-white"
                        >
                            {tab}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </div>
        </Tabs>
    );
};

export default ReusableTabs;