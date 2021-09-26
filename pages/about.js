import { FiInstagram, FiTwitter, FiGithub, FiExternalLink } from 'react-icons/fi'
import { FaTwitch } from 'react-icons/fa'
import { SiDiscord } from "react-icons/si"

const About = () => (
    <main className="flex flex-col w-full max-w-5xl m-auto my-32">
        <section className="flex flex-col w-full max-w-3xl m-auto">
            <div className="rounded-full overflow-hidden h-48 w-48 mb-4">
                <img src="/me.jpg" alt="me" />
            </div>
            <h1 className="mb-4">Hi, I'm Ren 👋</h1>
            <h2 className="m-0 text-3xl text-gray-500 dark:text-gray-200">Game Developer at <a className="no-underline text-3xl" target="_blank" rel="noopener noreferrer" href="https://www.quicksave.fi">Quicksave Interactive</a></h2>
            <h3 className="m-0 text-2xl text-gray-400 dark:text-gray-200">Former Developer at <a className="no-underline text-2xl opacity-70" target="_blank" rel="noopener noreferrer" href="https://www.helsinki.fi">University of Helsinki</a></h3>
            <h3 className="m-0 text-2xl text-gray-400 dark:text-gray-200">Former member of <a className="no-underline text-2xl opacity-70" target="_blank" rel="noopener noreferrer" href="https://github.com/rage">RAGE</a></h3>
            <div className="flex flex-row my-4">
                <section className="flex items-center">
                    <a target="_blank" rel="noopener noreferrer" href={process.env.DISCORD}><div className="py-1 mr-4 text-gray-600 hover:opacity-70 transition-all dark:text-gray-200"><SiDiscord size={26} /></div></a>
                    <a target="_blank" rel="noopener noreferrer" href={process.env.GITHUB}><div className="py-1 mr-4 text-gray-600 hover:opacity-70 transition-all dark:text-gray-200"><FiGithub size={26} /></div></a>
                    <a target="_blank" rel="noopener noreferrer" href={process.env.TWITTER}><div className="py-1 mr-4 text-gray-600 hover:opacity-70 transition-all dark:text-gray-200"><FiTwitter size={26} /></div></a>
                    <a target="_blank" rel="noopener noreferrer" href={process.env.TWITCH}><div className="py-1 mr-4 text-gray-600 hover:opacity-70 transition-all dark:text-gray-200"><FaTwitch size={26} /></div></a>
                    <a target="_blank" rel="noopener noreferrer" href={process.env.INSTAGRAM}><div className="py-1 mr-4 text-gray-600 hover:opacity-70 transition-all dark:text-gray-200"><FiInstagram size={26} /></div></a>
                </section>
            </div>
            <br />
            <p>I'm a live coder and software developer living in Helsinki, Finland.</p>
            <br />
            <p>I enjoy creating quality software and educational content. My technology stack includes ReactJS, NextJS, React-Native, TypeScript, Firebase, and Rust.</p>
            <br />
            <p>I am currently exploring content creation and game development.</p>
            <p>While you're here, checkout my <a className="no-underline" target="_blank" rel="noopener noreferrer" href="/CV">CV</a> for more information about my professional career.</p>
        </section>

        <section className="mt-8">
            <div className="flex flex-col w-full max-w-3xl m-auto">
                <h2 className="text-3xl text-gray-700 dark:text-gray-50">Projects</h2>
                <p>Here are some of my most outstanding projects I enjoyed creating, both with a team and alone.</p>
            </div>

            <article className="flex flex-col md:flex-row relative w-full md:h-80 justify-end mt-8">
                <a href="https://buildingai.elementsofai.com" target="_blank" rel="noopener noreferrer" className="w-full md:w-7/12 bg-grayBrand relative md:absolute md:left-0 rounded shadow-xl overflow-hidden moveUp"><img src="/about-images/bai.png" /></a>
                <div className="flex flex-col text-right z-10 w-full md:w-6/12">
                    <h3 className="text-gray-700 dark:text-gray-200">Building AI</h3>
                    <p className="font-semibold text-gray-500 dark:text-gray-300">Advanced A.I. & Python course</p>
                    <div className="bg-whiteBrand py-3 px-4 rounded shadow-xl dark:text-gray-700">
                        <p>MOOC for learning advanced A.I. and Python coding with University of Helsinki and Reaktor Education.</p>
                    </div>
                    <div className="flex flex-row justify-end mt-8">
                        <span className="ml-3">NextJS</span>
                        <span className="ml-3">TypeScript</span>
                        <span className="ml-3">GraphQL</span>
                        <span className="ml-3">Python</span>
                    </div>
                    <div className="flex flex-row justify-end mt-4">
                        <a href="https://buildingai.elementsofai.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300"><FiExternalLink size={24} /></a>
                    </div>
                </div>
            </article>

            <article className="flex flex-col-reverse md:flex-row relative w-full md:h-80 mt-16">
                <div className="flex flex-col z-10 w-full md:w-6/12">
                    <h3 className="text-gray-700 dark:text-gray-200">Equals</h3>
                    <p className="font-semibold text-gray-500 dark:text-gray-300">A multi-platform numbers game</p>
                    <div className="bg-whiteBrand py-3 px-4 rounded shadow-xl dark:text-gray-700">
                        <p>A game built using web technologies which supports many platforms and languages.</p>
                    </div>
                    <div className="flex flex-row mt-8">
                        <span className="ml-3">NextJS</span>
                        <span className="ml-3">PWA</span>
                        <span className="ml-3">Redux</span>
                        <span className="ml-3">Electron</span>
                        <span className="ml-3">Capacitor</span>
                    </div>
                    <div className="flex flex-row mt-4">
                        <a href="https://equals.gg" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300"><FiExternalLink size={24} /></a>
                    </div>
                </div>
                <a href="https://equals.gg" target="_blank" rel="noopener noreferrer" className="w-full md:w-7/12 bg-grayBrand relative md:absolute md:right-0 rounded shadow-xl overflow-hidden moveUp"><img src="/about-images/equals.png" /></a>
            </article>

            <article className="flex flex-col md:flex-row relative w-full md:h-80 justify-end mt-16">
                <a href="https://mathica.app/" target="_blank" rel="noopener noreferrer" className="w-full md:w-7/12 bg-grayBrand relative md:absolute md:left-0 rounded shadow-xl overflow-hidden moveUp"><img src="/about-images/mathica.png" /></a>
                <div className="flex flex-col text-right z-10 w-full md:w-6/12">
                    <h3 className="text-gray-700 dark:text-gray-200">Mathica</h3>
                    <p className="font-semibold text-gray-500 dark:text-gray-300">The predecessor to Equals</p>
                    <div className="bg-whiteBrand py-3 px-4 rounded shadow-xl dark:text-gray-700">
                        <p>Create equations with supplied numbers from a random number generator to reach a target number.</p>
                    </div>
                    <div className="flex flex-row justify-end mt-8">
                        <span className="ml-3">ReactJS</span>
                        <span className="ml-3">Firebase</span>
                        <span className="ml-3">PWA</span>
                    </div>
                    <div className="flex flex-row justify-end mt-4">
                        <a href="https://github.com/Technopathic/Mathica" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300"><FiGithub size={24} /></a>
                        <a href="https://mathica.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300"><FiExternalLink size={24} /></a>
                    </div>
                </div>
            </article>

            <article className="flex flex-col-reverse md:flex-row relative w-full md:h-80 mt-16">
                <div className="flex flex-col z-10 w-full md:w-6/12">
                    <h3 className="text-gray-700 dark:text-gray-200">Rubi</h3>
                    <p className="font-semibold text-gray-500 dark:text-gray-300">Furigana annotations in English</p>
                    <div className="bg-whiteBrand py-3 px-4 rounded shadow-xl dark:text-gray-700">
                        <p>A ReactJS library for introducing semantically correct Furigana annogations to English writing systems.</p>
                    </div>
                    <div className="flex flex-row mt-8">
                        <span className="ml-3">TypeScript</span>
                        <span className="ml-3">ReactJS</span>
                        <span className="ml-3">JSX</span>
                    </div>
                    <div className="flex flex-row mt-4">
                        <a href="https://github.com/Technopathic/rubi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300"><FiGithub size={24} /></a>
                        <a href="https://technopathic.github.io/Rubi/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300"><FiExternalLink size={24} /></a>
                    </div>
                </div>
                <a href="https://technopathic.github.io/Rubi/" target="_blank" rel="noopener noreferrer" className="w-full md:w-7/12 bg-grayBrand relative md:absolute md:right-0 rounded shadow-xl overflow-hidden moveUp"><img src="/about-images/rubi.png" /></a>
            </article>

        </section>

        <section className="flex flex-col w-full max-w-3xl m-auto mt-16">
            <h2 className="text-3xl text-gray-700 dark:text-gray-50">Skills</h2>
            <p>I love learning new and exciting technologies. There are the tools which impact my every day life and workflow.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-whiteBrand rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/typescript.png" /></span>
                    <span>TypeScript</span>
                </div>
                <div className="bg-whiteBrand rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/react.png" /></span>
                    <span>ReactJS</span>
                </div>
                <div className="bg-whiteBrand rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/nextjs.png" /></span>
                    <span>NextJS</span>
                </div>
                <div className="bg-whiteBrand rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/notion.png" /></span>
                    <span>Notion</span>
                </div>
                <div className="bg-whiteBrand rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/firebase.png" /></span>
                    <span>Firebase</span>
                </div>
                <div className="bg-whiteBrand rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/nodejs.png" /></span>
                    <span>NodeJS</span>
                </div>
                <div className="bg-whiteBrand rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/rust.png" /></span>
                    <span>Rust</span>
                </div>
                <div className="bg-whiteBrand rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/graphql.png" /></span>
                    <span>GraphQL</span>
                </div>
                <div className="bg-whiteBrand rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/supabase.png" /></span>
                    <span>Supabase</span>
                </div>
                <div className="bg-whiteBrand rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/pixijs.png" /></span>
                    <span>PixiJS</span>
                </div>
            </div>
        </section>

        <section className="flex flex-col w-full max-w-3xl m-auto mt-16">
            <h2 className="text-3xl text-gray-700 dark:text-gray-50">Wanna reach out?</h2>
            <p>Feel free to drop me a message if you have some interesting offer or any questions.</p>
            <p>Please use <a href={process.env.LINKEDIN} target="_blank" rel="noopener noreferrer" className="no-underline">LinkedIn</a> or <a href={process.env.TWITTER} target="_blank" rel="noopener noreferrer" className="no-underline">Twitter</a> to contact me.</p>
        </section>


    </main>
)

export default About