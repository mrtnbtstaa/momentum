import { Textarea } from "@/components/ui/textarea";
import { cn } from "cn";
import { ComponentPropsWithRef } from "react";

interface ReusableTextAreaProps extends ComponentPropsWithRef<"textarea"> { }

const ReusableTextArea = ({ className, ref, ...props }: ReusableTextAreaProps) => {
    return (
        <Textarea
            className={
                cn(
                    "bg-[#141414] border-white/10 text-xs text-white resize-none rounded-xl p-3 focus-visible:ring-white/20 leading-relaxed",
                    className
                )
            }
            ref={ref}
            {...props}
        />
    )
}

export default ReusableTextArea;