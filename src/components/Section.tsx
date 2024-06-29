import React from "react";
import './section.css'
interface SectionProps {
    id: string;
    heading?: string;
    centered?: boolean;
    removeMargin?: boolean;
    children?: React.ReactNode;
}
export function Section({ id, heading, centered, removeMargin, children }: SectionProps) {
    return <section id={id} className={centered ? "section-centered" : "" }>
        {heading ?
            <h2 className={removeMargin ? "section-margin-rm" : ""}>{heading}</h2>
            : null}
        {children}
    </section>
}