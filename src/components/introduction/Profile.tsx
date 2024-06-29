import './profile.css';
import React from "react";

interface ProfileProps {
    name: string;
    nicknames?: string[];
    description: React.ReactNode;
    avatarLink: string;
    avatarAlt: string;
}
export function Profile({ name, nicknames, description, avatarLink, avatarAlt}: ProfileProps) {
    let nicks;
    if (nicknames) {
        nicks = nicknames.map((nick) => `${nick}, `)
        let lastElement = nicks[nicks.length-1];
        nicks[nicks.length-1] = lastElement.slice(0, lastElement.length-2);
    } else {
        nicks = null;
    }
    return (
        <div className="introduction-name">
            <img alt={avatarAlt}
                 src={avatarLink}/>
            <h1>{name}</h1>
            {nicks ?
                <span><mark>aka</mark> {nicks}</span>
                : null
            }
            {description}
        </div>
    )
}