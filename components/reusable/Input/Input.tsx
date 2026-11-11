import { Input } from "@/components/ui/input";
import { cn } from "cn";
import { ComponentPropsWithRef } from "react";

interface ReusableInputProps extends ComponentPropsWithRef<"input">{}

const ReusableInput = ({className, ref, ...props}: ReusableInputProps) => {
    return (
        <Input 
        className={cn("bg-[#141414] border-white/10 text-xs text-white h-10 focus-visible:ring-white/20", className)}
        ref={ref}
        {...props}
        />
    )
}

export default ReusableInput;