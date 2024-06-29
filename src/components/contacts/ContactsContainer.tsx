import React from "react";

interface ContactsContainerProps {
    children: React.ReactNode;
}
export function ContactsContainer({ children }: ContactsContainerProps) {
    return <div className="contacts-container">
        {children}
    </div>
}