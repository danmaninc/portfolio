import {Section} from "@/components/layout/section/Section";

export default function Isaac() {
    return (
        <Section id={"isaac"} centered={true}>
            <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/cCe7qPu5dlI?autoplay=1&loop=1&amp;controls=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="rounded-xl"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Section>
    )
}