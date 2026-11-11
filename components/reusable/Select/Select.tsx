import { cn } from "cn";
import { ComponentPropsWithoutRef } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectProps<T extends string> extends ComponentPropsWithoutRef<"select"> {
    options: SelectOption<T>[]
    value: T;
    onValueChange: (value: T) => void;
}

const ReusableSelect = <T extends string>({ options, value, onValueChange, className, ...props }: SelectProps<T>) => {
    return (
        <Select {...props} defaultValue="Select value" value={value} onValueChange={(val) => {
            if(val != null){
                onValueChange(val as T)
            }
        }}>
            <SelectTrigger className={cn("bg-[#141414] border-white/10 text-white h-24 focus:ring-1 focus:ring-white/20", className)}>
                <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#141414] border-white/10 text-gray-300">
                {options.map((v, _) => {
                    return (
                        <SelectItem key={v.value} value={v.value}>
                            <div className="flex items-center gap-2">
                                {v.label}
                            </div>
                        </SelectItem>
                    )
                })}
            </SelectContent>
        </Select>
    )
}

export default ReusableSelect;