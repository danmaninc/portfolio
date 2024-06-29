import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const getComicBtn: HTMLElement = document.getElementById('get-comic-btn')!;
const disclaimer: HTMLElement = document.getElementById('disclaimer')!;

const comicInfo: HTMLDivElement = document.createElement('div')!;
const comicTitle: HTMLHeadingElement = document.createElement('h1')!;
const comicDate: HTMLParagraphElement = document.createElement('p')!;
const comicImage: HTMLImageElement = document.createElement('img')!;

type ComicId = number;
type ComicIdRequest = Record<'email', string>
type ComicRequest = Record<'id', string>
interface ComicResponse {
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

function fetchComicId(data: ComicIdRequest): Promise<ComicId> {
    return fetch("https://fwd.innopolis.university/api/hw2/?" + new URLSearchParams(data)).then((r: Response) => r.json());
}

function fetchComic(data: ComicRequest): Promise<ComicResponse> {
    return fetch("https://fwd.innopolis.university/api/comic/?" + new URLSearchParams(data)).then((r: Response) => r.json());
}
getComicBtn!.addEventListener('click', async (): Promise<void> => {
    getComicBtn.parentNode!.removeChild(getComicBtn!);
    disclaimer!.textContent = "Loading...";
    const id: ComicId = await fetchComicId({ email: "d.nikulin@innopolis.university"});
    const comic: ComicResponse = await fetchComic({ id: id.toString() });

    const year: number = parseInt(comic.year);
    const month: number = parseInt(comic.month);
    const day: number = parseInt(comic.day);

    comicTitle.textContent = comic.safe_title;
    comicDate.appendChild(document.createTextNode(`Upload date: ${new Date(year, month, day).toLocaleDateString()} (${dayjs(`${year}-${month}-${day}`).fromNow()})`))
    comicImage.setAttribute("src", comic.img);
    comicImage.setAttribute("alt", comic.alt);

    comicInfo.appendChild(comicTitle);
    comicInfo.appendChild(comicDate);
    comicInfo.appendChild(comicImage);

    disclaimer.parentNode!.appendChild(comicInfo);
    disclaimer.parentNode!.removeChild(disclaimer);
})