import React from "react";

interface ProjectContainerProps {
    children: React.ReactNode;
}
export function ProjectContainer({ children } : ProjectContainerProps) {
    return (
        <ul className="projects-container">
            {children}
        </ul>
    )
}