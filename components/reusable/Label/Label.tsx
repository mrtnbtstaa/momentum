import { Label } from "@/components/ui/label"
import { ComponentPropsWithoutRef } from "react";

interface LabelProps extends ComponentPropsWithoutRef<"label">{
    label: string;
    required?: boolean
}

const ReusableLabel = ({label, htmlFor, required = false}: LabelProps) => {
    return (
        <Label htmlFor={htmlFor} className="text-[13px] text-gray-300">
            {label} {required && <span className="text-red-400">*</span>}
        </Label>
    )
}

export default ReusableLabel;