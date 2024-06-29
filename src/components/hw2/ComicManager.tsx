import {useState} from "react";
import {Comic} from "./Comic.tsx";
import { fetchComicId, fetchComic } from "../../lib/api.ts"
import './comic.css'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const defaultComic : Comic = {
    month: "",
    num: -1,
    link: "",
    year: "",
    news: "",
    safe_title: "",
    transcript: "",
    alt: "",
    img: "",
    title: "",
    day: ""
}
interface Comic {
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
}
export function ComicManager() {
    const [isLoading, setLoading] = useState(false);
    const [comic, setComic] = useState(defaultComic);
    const [dateFormatted, setDateFormatted] = useState("");
    const [dateFromNow, setDateFromNow] = useState("");

    async function handleRequest() {
        setLoading(true);

        const id = await fetchComicId({ email: "d.nikulin@innopolis.university" });
        const comicResponse = await fetchComic({ id: id.toString() });

        setComic(comicResponse);
        setDateFormatted(new Date(
            parseInt(comicResponse.year),
            parseInt(comicResponse.month),
            parseInt(comicResponse.day)).toLocaleDateString()
        )
        setDateFromNow(dayjs(`${comicResponse.year}-${comicResponse.month}-${comicResponse.day}`).fromNow())

        setLoading(false);
    }
    if (comic.num === -1) {
        return (
            <div className="comic-container">
                <h1 id="disclaimer">{!isLoading ? "Press the button to load comic." : "Loading..."}</h1>
                {!isLoading ?
                    <button type="button" id="get-comic-btn" onClick={handleRequest}>Load comic</button>
                    : null
                }
            </div>
        )
    } else {
        return (
            <div className="comic-container">
                <Comic
                    title={comic.safe_title}
                    comicAlt={comic.alt}
                    comicLink={comic.img}
                    date={`Upload date: ${dateFormatted} (${dateFromNow})`}
                />
            </div>
        )
    }
}