"use client";
import { useState } from "react";
import { Comic } from "@/components/hw2/Comic";
import { fetchComicId, fetchComic } from "@/lib/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const defaultComic: Comic = {
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
  day: "",
};
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
    setDateFormatted(
      new Date(
        parseInt(comicResponse.year),
        parseInt(comicResponse.month),
        parseInt(comicResponse.day),
      ).toLocaleDateString(),
    );
    setDateFromNow(
      dayjs(
        `${comicResponse.year}-${comicResponse.month}-${comicResponse.day}`,
      ).fromNow(),
    );

    setLoading(false);
  }
  if (comic.num === -1) {
    return (
      <div className="flex flex-col justify-center items-center gap-8 bg-[#262626] w-[50rem] h-[25rem] p-16 rounded-2xl">
        <h1 id="disclaimer" className="text-2xl font-medium">
          {!isLoading ? "Press the button to load comic." : "Loading..."}
        </h1>
        {!isLoading ? (
          <button
            type="button"
            id="get-comic-btn"
            className="bg-white rounded-2xl p-4 font-semibold text-black text-base border-none hover:bg-white/90"
            onClick={handleRequest}
          >
            Load comic
          </button>
        ) : (
          <button
            type="button"
            id="get-comic-btn"
            className="bg-white rounded-2xl p-4 font-semibold text-black text-base border-none hover:bg-white/90 disabled:bg-white/50"
            onClick={handleRequest}
            disabled
          >
            Load comic
          </button>
        )}
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-col bg-[#262626] w-[50rem] h-[25rem] p-16 rounded-2xl">
        <Comic
          title={comic.safe_title}
          comicAlt={comic.alt}
          comicLink={comic.img}
          date={`Upload date: ${dateFormatted} (${dateFromNow})`}
        />
      </div>
    );
  }
}
