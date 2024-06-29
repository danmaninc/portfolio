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

export function fetchComicId(data: ComicIdRequest): Promise<ComicId> {
    return fetch("https://fwd.innopolis.university/api/hw2/?" + new URLSearchParams(data)).then((r: Response) => r.json());
}

export function fetchComic(data: ComicRequest): Promise<ComicResponse> {
    return fetch("https://fwd.innopolis.university/api/comic/?" + new URLSearchParams(data)).then((r: Response) => r.json());
}