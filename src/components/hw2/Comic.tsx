import Image from "next/image";

interface ComicProps {
  comicLink: string;
  comicAlt: string;
  title: string;
  date: string;
}
export function Comic({ comicLink, comicAlt, title, date }: ComicProps) {
  return (
    <div className="gap-4 flex flex-col">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{date}</p>
      <Image width={674} height={184} src={comicLink} alt={comicAlt} />
    </div>
  );
}
