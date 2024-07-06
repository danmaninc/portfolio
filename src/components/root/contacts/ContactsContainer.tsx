import React from "react";

interface ContactsContainerProps {
    children: React.ReactNode;
}
export function ContactsContainer({ children }: ContactsContainerProps) {
    return <div className="flex justify-center items-center gap-2">
        {children}
    </div>
}