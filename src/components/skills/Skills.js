import skills from '../../assets/images/skills2.png';

//Skills is a component which contains skills card and png.
const Skills = () => {
    return (
        <section id="skills" className="container mx-auto pt-20 px-5 lg:px-0 lg:py-20">
            {/* Heading and subheading of our section */}
            <div className="prose lg:prose-xl text-center m-auto mb-5">
                <h3 className="gradient-text">My Development Skills</h3>
                <h1>The most creative intuitive workmate.</h1>
            </div>
            {/* Divide content and img into two columns */}
            <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-2 lg:mt-20">
                {/* Content */}
                <div className="prose items-center">
                    <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
                        <div className="bg-gray-100 px-4 rounded-2xl">
                            <h4><span className="text-blue-600"><i class="fa-brands fa-react fa-lg" ></i></span> Frontend Development</h4>
                            <p>A great knowledge of HTML / CSS, Javascript, React.js and UI frameworks like Tailwind, MUI, Boostrap. I make responsive applications with interactive UI designs.</p>
                        </div>
                        <div className="bg-gray-100 px-4 rounded-2xl">
                            <h4><span className="text-green-600"><i class="fa-brands fa-node fa-lg"></i></span> Backend Development</h4>
                            <p>Rest API development using Node.js and Express. </p>
                        </div>
                        <div className="bg-gray-100 px-4 rounded-2xl">
                            <h4><span className="text-rose-600"><i class="fa-solid fa-database fa-lg"></i></span> Database</h4>
                            <p></p>
                        </div>
                        <div className="bg-gray-100 px-4 rounded-2xl">
                            <h4><span className="text-purple-600"><i class="fa-solid fa-pen-ruler fa-lg"></i></span> UI Design</h4>
                            <p>Knowledge of wireframing using Adobe XD and Figma. Keen eye for UI design aspects such as color theory, typography and visual communication. </p>
                        </div>
                    </div>
                </div>
                {/* Image */}
                <div className="pl-20 flex items-center order-first lg:pl-40 lg:order-last">
                    <img src={skills} alt="Skills" />
                </div>
            </div >
        </section >
    )
}

export default Skills;