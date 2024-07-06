import {TextMark} from "./format/mark/TextMark";
import {TextLink} from "./format/TextLink";

export function ProfileDescription() {
    return (
        <p className="text-center">Hello! I am a 19 y.o. <TextMark>web
            developer</TextMark> and <TextMark>Computer Science</TextMark> student from <TextLink
            link="https://innopolis.university">Innopolis University</TextLink>.
            <br/>I love learning web development and applying my skills to projects. <br/> <br/>
            I am interested in <TextMark>collaborating on awesome projects</TextMark>. If you have one — contact
            me. <br/> I would be happy to discuss it with you, my friend!
        </p>
    )
}