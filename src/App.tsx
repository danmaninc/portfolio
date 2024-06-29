import './App.css'
import {ProjectContainer} from "./components/root/projects/ProjectContainer.tsx";
import {Project} from "./components/root/projects/Project.tsx";
import {Contact} from "./components/root/contacts/Contact.tsx";
import {ContactsContainer} from "./components/root/contacts/ContactsContainer.tsx";
import {Profile} from "./components/introduction/Profile.tsx";
import {ProfileDescription} from "./components/introduction/ProfileDescription.tsx";
import {Section} from "./components/root/section/Section.tsx";

function App() {

  return (
    <>
        <Section id={"introduction"}>
            <Profile
                name="Daniil Nikulin"
                nicknames={["danmaninc"]}
                description={<ProfileDescription/>}
                avatarLink={"https://lh3.googleusercontent.com/a/ACg8ocKkp2cxsX99Aa_fy1KVXMueG9z-uhD593aNJ3F3qHFNM82Ul55v=s96-c-rg-br25"}
                avatarAlt={"Daniil's avatar"}
            />
        </Section>
        <Section id={"contacts"} heading="Contact me" centered={true} removeMargin={true}>
            <ContactsContainer>
                <Contact id="gh-link" link="https://github.com/danmaninc/" icon="github"/>
                <Contact id="tg-link" link="https://t.me/JustDanman" icon="telegram"/>
                <Contact id="email" link="mailto:dminc.work@gmail.com" icon="envelope"/>
            </ContactsContainer>
        </Section>
        <Section id={"projects"} heading="Projects">
            <ProjectContainer>
                <Project
                    title={"Stress Testers app"}
                    description={"Web application for code stress-testing"}
                    projectLink={"https://stress.dminc.ru/"}
                    logoLink={"https://sun1-19.userapi.com/s/v1/if2/8DJUQPEL7edfo8Zy6_o3dmTqFNhIq7m4cWI7n2H_1UMTtRfeEhJjszkkgep8qQk4D1SvWJKfxUcjKmzn-v3SLMo7.jpg?size=666x676&quality=96&crop=107,149,666,677&ava=1"}
                    logoAlt={"Stress Testers logo"}
                />
                <Project
                    title={"InNoHassle"}
                    description={"Web services for Innopolis students"}
                    projectLink={"https://innohassle.ru/"}
                    logoLink={"https://innohassle.ru/_next/static/media/logo.1d464cf5.svg"}
                    logoAlt={"InNoHassle logo"}
                />
            </ProjectContainer>
        </Section>
    </>
  )
}

export default App
