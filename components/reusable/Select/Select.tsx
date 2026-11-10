import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "cn";


interface SelectProps<T extends string> extends GenericSelectOption<T> {
    className?: string
    value: T;
    onValueChange: (value: T) => void;
}

const ReusableSelect = <T extends string>({ options, value, onValueChange, className }: SelectProps<T>) => {
    return (
        <Select defaultValue="Select value" value={value} onValueChange={(value) => {
            if (value != null) {
                onValueChange(value as T)
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