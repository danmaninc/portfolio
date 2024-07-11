import { Section } from "@/components/layout/section/Section";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Daniil Nikulin — Isaac",
    description: "Check out the Isaac and dance with him",
    authors: [{ name: "Daniil Nikulin", url: "/portfolio"}],
    openGraph: {
        title: "Daniil Nikulin — Isaac",
        description: "Check out the Isaac and dance with him",
        siteName: "Daniil Nikulin — Isaac",
        type: "website",
        url: "https://danmaninc.github.io/portfolio/isaac"
    }
};

export default function Isaac() {
  return (
    <Section id={"isaac"} centered={true}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cCe7qPu5dlI?autoplay=1&loop=1&autopause=0&amp;controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="rounded-xl"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Section>
  );
}
