import React from "react";

interface ProjectContainerProps {
    children: React.ReactNode;
}
export function ProjectContainer({ children } : ProjectContainerProps) {
    return (
        <ul className="flex flex-col list-none gap-8 p-0 ">
            {children}
        </ul>
    )
}