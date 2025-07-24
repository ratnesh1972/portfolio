import skills from '../../assets/images/skills2.png';

//Skills is a component which contains skills card and png.
const Skills = () => {
    return (
        <section id="skills" className="pt-20 px-5 lg:px-0 lg:py-20 dark:bg-slate-900">
            {/* container */}
            <div className="container mx-auto">
                {/* Heading and subheading of our section */}
                <div className="prose lg:prose-xl text-center m-auto mb-5 dark:prose-invert">
                    <h3 className="gradient-text">My Development Skills</h3>
                    <h1>The most creative intuitive workmate.</h1>
                </div>
                {/* Divide content and img into two columns */}
                <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-2 lg:mt-20">
                    {/* Content */}
                    <div className="prose items-center dark:prose-invert">
                        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
                            <div className="bg-gray-100 px-4 rounded-2xl dark:bg-slate-800">
                                <h4><span className="text-blue-600"><i className="fa-brands fa-react fa-lg" ></i></span> Frontend Development</h4>
                                <p>A great knowledge of HTML / CSS, Javascript, React.js and UI frameworks like Tailwind, MUI, Boostrap. I make responsive applications with interactive UI designs.</p>
                            </div>
                            <div className="bg-gray-100 px-4 rounded-2xl dark:bg-slate-800">
                                <h4><span className="text-green-600"><i className="fa-brands fa-node fa-lg"></i></span> Backend Development</h4>
                                <p>Experienced in server-side development using Python and Node.js, with hands-on work in frameworks like Django and Express.js.</p>
                            </div>
                            <div className="bg-gray-100 px-4 rounded-2xl dark:bg-slate-800">
                                <h4><span className="text-rose-600"><i className="fa-solid fa-database fa-lg"></i></span> Database</h4>
                                <p>Solid understanding of both relational and non-relational databases, with hands-on experience using MySQL. Proficient in writing SQL queries, and working with ORMs like Django ORM to streamline database operations.</p>
                            </div>
                            <div className="bg-gray-100 px-4 rounded-2xl dark:bg-slate-800">
                                <h4><span className="text-purple-600"><i className="fa-solid fa-pen-ruler fa-lg"></i></span> UI Design</h4>
                                <p>Knowledge of wireframing using Adobe XD and Figma. Keen eye for UI design aspects such as color theory, typography and visual communication. </p>
                            </div>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="pl-20 flex items-center order-first lg:pl-40 lg:order-last">
                        <img src={skills} alt="Skills" />
                    </div>
                </div >
            </div>
        </section >
    )
}

export default Skills;