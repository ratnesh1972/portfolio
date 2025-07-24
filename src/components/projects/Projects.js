import backpackertours from '../../assets/images/backpackertours.png'
import kiranscreation from '../../assets/images/kiranscreation.png';
import tgfdashboard from '../../assets/images/tgfdashboard.png';
import goldysfitness from '../../assets/images/goldysfitness.png';
import githubfinder from '../../assets/images/githubfinder.png';

import SingleProjectCard from './SingleProjectCard';
const Projects_Data = [
    {
        "image": backpackertours,
        "alt": "Backpacker Tours Website",
        "title": "Backpacker Tours",
        "description": "React based website developed for a friends tours company. Used JetAdmin to build APIs and admin panel to manage tours.",
        "skills": "React, Reactstrap, JetAdmin",
        "link": "https://www.backpackertours.in/"
    },
    {
        "image": kiranscreation,
        "alt": "Kirans Creations Website",
        "title": "Kirans Creations",
        "description": "Fully reponsive portfolio website developed for a design studio based in Nashik. Comes with a image gallery to easily showcase past clients work to user.",
        "skills": "HTML, CSS, JS",
        "link": "https://kiranscreations.netlify.app/"
    },
    {
        "image": tgfdashboard,
        "alt": "TGF Dashboard Page",
        "title": "Gym Dashboard",
        "description": "Gym admin portal to manage trainers info, members info, and members billing and transaction details along with payment status.",
        "skills": "HTML, CSS, React, MUI, Node, Express, MongoDB",
        "link": "https://gymdashbaord.netlify.app"
    },
    {
        "image": githubfinder,
        "alt": "Github Finder",
        "title": "Github Finder",
        "description": "Weekend project using Githubs APIs. Search github profiles using github username and view details such as bio, top repos, following and followers.",
        "skills": "HTML, CSS, JS, React, Github APIs",
        "link": "https://githubfinderbyratnesh.netlify.app/"
    },
    {
        "image": goldysfitness,
        "alt": "Goldys Website Page",
        "title": "The Goldys Fitness",
        "description": "Fully responsive static website developed for a gym based in Jalgaon. Designed and developed from scratch without any frameworks.",
        "skills": "HTML, CSS, JS",
        "link": "https://www.thegoldysfitness.in/"
    }
]
//Projects is a component which contains best projects info.
const Projects = () => {
    const all_projects = Projects_Data.map(project => <SingleProjectCard project={project} key={project.alt} />)

    return (
        <section id="projects" className="pt-20 px-5 lg:px-0 lg:py-20 dark:bg-slate-900">
            {/* container */}
            <div className="container mx-auto ">
                {/* Heading and subheading of our section */}
                <div className="prose lg:prose-xl text-center m-auto mb-5 dark:prose-invert">
                    <h3 className="gradient-text2">My Projects</h3>
                    <h1>A selection of my best projects.</h1>
                </div>
                {/* Divide content and img into two columns */}
                <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-3 lg:mt-20">
                    {all_projects}
                </div >
            </div>
        </section >
    )
}

export default Projects;