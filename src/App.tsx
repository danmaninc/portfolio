import './App.css'

function App() {

  return (
    <>
        <section className="introduction">
            <div className="introduction-name">
                <img alt="Daniil's avatar"
                     src="https://lh3.googleusercontent.com/a/ACg8ocKkp2cxsX99Aa_fy1KVXMueG9z-uhD593aNJ3F3qHFNM82Ul55v=s96-c-rg-br25"/>
                    <h1>Daniil Nikulin</h1>
                    <span><mark>aka</mark> danmaninc</span>
                    <p className="introduction-description">Hello! I am a 19 y.o. <mark>web
                        developer</mark> and <mark>Computer Science</mark> student from <a
                        href="https://innopolis.university">Innopolis University</a>.
                        <br/>I love learning web development and applying my skills to projects. <br/> <br/>
                            I am interested in <mark>collaborating on awesome projects</mark>. If you have one — contact
                            me. <br/> I would be happy to discuss it with you, my friend!
                    </p>
            </div>
        </section>
        <section className="contacts">
            <h2>Contact me</h2>
            <div className="contacts-container">
                <a className="contact" id="gh-link" href="https://github.com/danmaninc/"><i
                    className="fa6-brands--github"></i></a>
                <a className="contact" id="tg-link" href="https://t.me/JustDanman"><i
                    className="fa6-brands--telegram"></i></a>
                <a className="contact" id="email" href="mailto:dminc.work@gmail.com"><i
                    className="fa--envelope"></i></a>
            </div>
        </section>
        <section className="projects">
            <h2>Projects</h2>
            <ul className="projects-container">
                <li className="project">
                    <img className="project-logo" style={{borderRadius: "1rem"}} alt="Stress Testers logo"
                         src="https://sun1-19.userapi.com/s/v1/if2/8DJUQPEL7edfo8Zy6_o3dmTqFNhIq7m4cWI7n2H_1UMTtRfeEhJjszkkgep8qQk4D1SvWJKfxUcjKmzn-v3SLMo7.jpg?size=666x676&quality=96&crop=107,149,666,677&ava=1"/>
                        <div className="project-info">
                            <span className="project-title">Stress Testers app</span>
                            <p className="project-description">Web application for code stress-testing</p>
                            <a className="project-link" href="https://stress.dminc.ru/"><i
                                className="fa6-solid--link"></i>Check out</a>
                        </div>
                </li>
                <li className="project">
                    <img className="project-logo" alt="InNoHassle logo"
                         src="https://innohassle.ru/_next/static/media/logo.1d464cf5.svg"/>
                        <div className="project-info">
                            <span className="project-title">InNoHassle</span>
                            <p className="project-description">Web services for Innopolis students</p>
                            <a className="project-link" href="https://innohassle.ru/"><i
                                className="fa6-solid--link"></i>Check out</a>
                        </div>
                </li>
            </ul>
        </section>
    </>
  )
}

export default App
