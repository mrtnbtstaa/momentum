import React from "react";

interface WrapperProps {
    children: React.ReactNode;
}

const Wrapper = ({children}: WrapperProps) => {
    return (
        <div className="flex flex-col gap-6 max-w-[1600px] mx-auto w-full">
            {children}
        </div>
    )
}

export default Wrapper;