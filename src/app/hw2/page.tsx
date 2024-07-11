import { Section } from "@/components/layout/section/Section";
import { ComicManager } from "@/components/hw2/ComicManager";
import {Metadata} from "next";

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

export default function Homework2() {
  return (
    <Section id="content-comic" centered={true}>
      <ComicManager />
    </Section>
  );
}
