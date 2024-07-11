import {Section} from "@/components/layout/section/Section";
import {ComicManager} from "@/components/hw2/ComicManager";
import {Metadata} from "next";
import {fetchComic, fetchComicId} from "@/lib/api";
import dayjs from "dayjs";

export const metadata: Metadata = {
    title: "Daniil Nikulin — Comic",
    description: "Check out my XKCD comic",
    authors: [{ name: "Daniil Nikulin", url: "/portfolio"}],
    openGraph: {
        title: "Daniil Nikulin — Comic",
        description: "Check out my XKCD comic",
        siteName: "Daniil Nikulin — Comic",
        type: "website",
        url: "https://danmaninc.github.io/portfolio/hw2"
    }
};

export async function getComic() {
    const id = await fetchComicId({ email: "d.nikulin@innopolis.university" });
    const comicResponse = await fetchComic({ id: id.toString() });

    const dateFormatted = new Date(
        parseInt(comicResponse.year),
        parseInt(comicResponse.month),
        parseInt(comicResponse.day),
    ).toLocaleDateString();
    const dateFromNow = dayjs(
        `${comicResponse.year}-${comicResponse.month}-${comicResponse.day}`,
    ).fromNow()

    return {
        ...comicResponse,
        dateFormatted,
        dateFromNow
    }
}

export default async function Homework2() {
    const data = await getComic();
    return (
        <Section id="content-comic" centered={true}>
            <ComicManager data={data}/>
        </Section>
    );
}