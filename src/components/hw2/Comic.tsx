interface ComicProps {
    comicLink: string;
    comicAlt: string;
    title: string;
    date: string;
}
import './comic.css'
export function Comic({ comicLink, comicAlt, title, date } : ComicProps) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{date}</p>
            <img src={comicLink} alt={comicAlt}/>
        </div>
    )
}