interface ProjectProps {
    title: string;
    description: string;
    projectLink: string;
    logoLink: string;
    logoAlt: string;
}
export function Project({ title, description, projectLink, logoLink, logoAlt }: ProjectProps) {
    return (
        <li className="project">
            <img className="project-logo" style={{borderRadius: "1rem"}} alt={logoAlt}
                 src={logoLink}/>
            <div className="project-info">
                <span className="project-title">{title}</span>
                <p className="project-description">{description}</p>
                <a className="project-link" href={projectLink}><i
                    className="link"></i>Check out</a>
            </div>
        </li>
    )
}