import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GenericRadioGroupProps } from "./radio-group.types";
import { Label } from "@/components/ui/label";

interface RadioGroupProps<T extends string | number> extends GenericRadioGroupProps<T> {
    value: string | number
    onChange: (value: string | number) => void;
}

const ReusableRadioGroup = <T extends string | number>({ options, value, onChange }: RadioGroupProps<T>) => {

    return (
        <RadioGroup value={value} onValueChange={onChange}>
            {options.map((v, _) => {
                return (
                    <Label
                        key={v.value}
                        aria-label={v.label}
                        htmlFor={v.value.toString()}
                        className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${value === v.value ? "bg-[#141414] border-white/10" : "bg-transparent border-transparent hover:bg-white/5"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-white">{v.label}</span>
                                <span className="text-xs text-gray-500">{v.description}</span>
                            </div>
                        </div>
                        <RadioGroupItem value={v.value} id={v.value.toString()} className="border-white/20 text-blue-500 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500" />
                    </Label>
                )
            })}
        </RadioGroup>
    )

}

export default ReusableRadioGroup;