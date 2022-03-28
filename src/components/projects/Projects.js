import kiranscreation from '../../assets/images/kiranscreation.png';
import tgfdashboard from '../../assets/images/tgfdashboard.png';
import yelpcamp from '../../assets/images/yelpcamp.png';

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
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis id ipsa eum neque minus dolorem numquam eius maxime doloribus vitae!</p>
                            <p className="text-xs">Tech Stack - <span className="font-semibold">HTML, CSS, JS</span></p>
                            <button class="rounded-full bg-pink-500 shadow-lg shadow-pink-500/50 text-white px-5 py-1">View Project</button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 px-4 rounded-2xl">
                    <div className="prose my-4">
                        <img className="rounded-xl m-0 p-0" src={tgfdashboard} alt="TGF Dashboard Page" />
                        <div>
                            <h3>TGF Dashboard</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis id ipsa eum neque minus dolorem numquam eius maxime doloribus vitae!</p>
                            <p className="text-xs">Tech Stack - <span className="font-semibold">HTML, CSS, JS, React, Node, Express, Mongoose</span></p>
                            <button class="rounded-full bg-pink-500 shadow-lg shadow-pink-500/50 text-white px-5 py-1">View Project</button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 px-4 rounded-2xl">
                    <div className="prose my-4">
                        <img className="rounded-xl m-0 p-0" src={yelpcamp} alt="YelpCamp Page" />
                        <div>
                            <h3>YelpCamp</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis id ipsa eum neque minus dolorem numquam eius maxime doloribus vitae!</p>
                            <p className="text-xs">Tech Stack - <span className="font-semibold">HTML, CSS, JS, EJS, Node, Express, Mongoose</span></p>
                            <button class="rounded-full bg-pink-500 shadow-lg shadow-pink-500/50 text-white px-5 py-1">View Project</button>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Projects;