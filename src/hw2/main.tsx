import {Section} from "../components/layout/section/Section.tsx";
import './main.module.css'
import {ComicManager} from "../components/hw2/ComicManager.tsx";
export function Homework2() {
    return (
        <Section id="content-comic" centered={true}>
            <ComicManager/>
        </Section>
    )
}