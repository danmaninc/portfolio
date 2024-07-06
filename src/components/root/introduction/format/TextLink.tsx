import React from "react";

interface TextLinkProps {
    link: string;
    children: React.ReactNode;
}
export function TextLink({ link, children }: TextLinkProps) {
    return (
        <a
            href={link}>{children}</a>
    )
}