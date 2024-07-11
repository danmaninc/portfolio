import { Comic } from "@/components/hw2/Comic";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { IComic } from "@/lib/types";
dayjs.extend(relativeTime);

export function ComicManager({ data }: { data: IComic }) {
  return (
    <div className="flex justify-center items-center flex-col bg-[#262626] w-[50rem] h-[25rem] p-16 rounded-2xl">
      <Comic
        title={data.safe_title}
        comicAlt={data.alt}
        comicLink={data.img}
        date={`Upload date: ${data.dateFormatted} (${data.dateFromNow})`}
      />
    </div>
  );
}
