import kiranscreation from '../../assets/images/kiranscreation.png';
import tgfdashboard from '../../assets/images/tgfdashboard.png';
import yelpcamp from '../../assets/images/yelpcamp.png';
import goldys from '../../assets/images/goldysfitness.png';
import githubfinder from '../../assets/images/githubfinder.png';

//Projects is a component which contains best projects info.
const Projects = () => {
    return (
        <section id="projects" className="container mx-auto pt-20 px-5 lg:px-0 lg:py-20">
            {/* Heading and subheading of our section */}
            <div className="prose lg:prose-xl text-center m-auto mb-5">
                <h3 className="gradient-text2">My Projects</h3>
                <h1>A selection of my best projects.</h1>
            </div>
            {/* Divide content and img into two columns */}
            <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-3 lg:mt-20">
                {/* Content */}
                <div className="bg-gray-100 px-4 rounded-2xl">
                    <div className="prose my-4">
                        <img className="rounded-xl m-0 p-0" src={kiranscreation} alt="Kirans Creations Page" />
                        <div>
                            <h3>Kirans Creations</h3>
                            <p>Fully reponsive portfolio website developed for a design studio based in Nashik. Comes with a image gallery to easily showcase past clients work to user.</p>
                            <p className="text-xs">Tech Stack - <span className="font-semibold">HTML, CSS, JS</span></p>
                            <a href="https://kiranscreations.netlify.app/" rel="noreferrer" target="_blank"><button class="rounded-full bg-pink-500 shadow-lg shadow-pink-500/50 text-white px-5 py-1">View Project</button></a>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 px-4 rounded-2xl">
                    <div className="prose my-4">
                        <img className="rounded-xl m-0 p-0" src={tgfdashboard} alt="TGF Dashboard Page" />
                        <div>
                            <h3>Gym Dashboard</h3>
                            <p>Gym admin portal to manage trainers info, members info, and members billing and transaction details along with payment status.</p>
                            <p className="text-xs">Tech Stack - <span className="font-semibold">HTML, CSS, React, MUI, Node, Express, MongoDB</span></p>
                            <a href="https://gymdashbaord.netlify.app" rel="noreferrer" target="_blank"><button class="rounded-full bg-pink-500 shadow-lg shadow-pink-500/50 text-white px-5 py-1">View Project</button></a>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 px-4 rounded-2xl">
                    <div className="prose my-4">
                        <img className="rounded-xl m-0 p-0" src={yelpcamp} alt="YelpCamp Page" />
                        <div>
                            <h3>YelpCamp</h3>
                            <p>Web application to list camping sites info such as name, location, images. Also you can review and comment on camping sites added by others.  </p>
                            <p className="text-xs">Tech Stack - <span className="font-semibold">HTML, Bootstrap, EJS, Node, Express, MongoDB</span></p>
                            <a href="https://protected-tor-57361.herokuapp.com/" rel="noreferrer" target="_blank"><button class="rounded-full bg-pink-500 shadow-lg shadow-pink-500/50 text-white px-5 py-1">View Project</button></a>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 px-4 rounded-2xl">
                    <div className="prose my-4">
                        <img className="rounded-xl m-0 p-0" src={githubfinder} alt="Github Finder Page" />
                        <div>
                            <h3>Github Finder</h3>
                            <p>Weekend project using Githubs APIs. Search github profiles using github username and view details such as bio, top repos, following and followers.</p>
                            <p className="text-xs">Tech Stack - <span className="font-semibold">HTML, CSS, JS, React, Github APIs</span></p>
                            <a href="https://githubfinderbyratnesh.netlify.app/" rel="noreferrer" target="_blank"><button class="rounded-full bg-pink-500 shadow-lg shadow-pink-500/50 text-white px-5 py-1">View Project</button></a>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 px-4 rounded-2xl">
                    <div className="prose my-4">
                        <img className="rounded-xl m-0 p-0" src={goldys} alt="Goldys Website Page" />
                        <div>
                            <h3>The Goldys Fitness</h3>
                            <p>Fully responsive static website developed for a gym based in Jalgaon. Designed and developed from scratch without any frameworks.</p>
                            <p className="text-xs">Tech Stack - <span className="font-semibold">HTML, CSS, JS</span></p>
                            <a href="https://www.thegoldysfitness.in/" rel="noreferrer" target="_blank"><button class="rounded-full bg-pink-500 shadow-lg shadow-pink-500/50 text-white px-5 py-1">View Project</button></a>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Projects;