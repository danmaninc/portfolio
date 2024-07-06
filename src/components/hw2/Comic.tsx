import Image from "next/image";

interface ComicProps {
    comicLink: string;
    comicAlt: string;
    title: string;
    date: string;
}
export function Comic({ comicLink, comicAlt, title, date } : ComicProps) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{date}</p>
            <Image src={comicLink} alt={comicAlt}/>
        </div>
    )
}