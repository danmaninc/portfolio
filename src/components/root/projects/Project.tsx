interface ProjectProps {
    title: string;
    description: string;
    projectLink: string;
    logoLink: string;
    logoAlt: string;
}
export function Project({ title, description, projectLink, logoLink, logoAlt }: ProjectProps) {
    return (
        <li className="h-24 flex items-center bg-[#262626] rounded-2xl p-8 gap-8">
            <img className="w-24 rounded-2xl" alt={logoAlt}
                 src={logoLink}/>
            <div className="flex flex-col">
                <span className="font-semibold min-[374px]:max-[960px]:text-base">{title}</span>
                <p className="project-description min-[374px]:max-[960px]:text-[14.4px]">{description}</p>
                <a className="flex justify-center gap-1 font-medium text-black no-underline p-2 bg-white w-fit rounded-lg hover:text-black bg-white/80 min-[374px]:max-[960px]:text-[14.4px]" href={projectLink}><i
                    className="link"></i>Check out</a>
            </div>
        </li>
    )
}