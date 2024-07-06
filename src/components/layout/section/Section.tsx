import React from "react";
interface SectionProps {
    id: string;
    heading?: string;
    centered?: boolean;
    removeMargin?: boolean;
    children?: React.ReactNode;
}
export function Section({ id, heading, centered, removeMargin, children }: SectionProps) {
    return <section id={id} className={centered ? "flex flex-col justify-center items-center gap-4" : "" }>
        {heading ?
            <h2 className={removeMargin ? "mt-0 text-2xl font-bold" : "text-2xl font-bold mb-4"}>{heading}</h2>
            : null}
        {children}
    </section>
}