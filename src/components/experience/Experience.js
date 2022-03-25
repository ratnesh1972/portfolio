import experience from '../../assets/images/experience.png';

//Experience is a component which contains my past experience in terms of work and png.
const Experience = () => {
    return (
        <section className="container mx-auto py-20">
            {/* Heading and subheading of our section */}
            <div className="prose lg:prose-xl text-center m-auto mb-5">
                <h3 className="gradient-text3">My Experience</h3>
                <h1>The most creative intuitive workmate.</h1>
            </div>
            {/* Divide content and img into two columns */}
            <div className="grid grid-cols-2 gap-5 mt-20">
                {/* Image */}
                <div className="pr-40 flex items-center">
                    <img src={experience} alt="Skills" />
                </div>
                {/* Content */}
                <div className="prose items-center ">
                    <div className="grid grid-cols-1 mt-5">
                        <div className="px-4 rounded-2xl">
                            <div className="flex gap-5">
                                {/* Icon */}
                                <div className="flex flex-col items-center">
                                    <span className="text-blue-600 bg-slate-100 rounded-full px-3 py-2"><i class="fa-brands fa-react fa-lg"></i></span>
                                    <span className="border-l border-dashed h-full"></span>
                                </div>
                                {/* Content */}
                                <div>
                                    <h4 className="mt-0">Application Development Analyst, Accenture</h4>
                                    <p className="text-sm">Dec 2021 - Jun 2022</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis id ipsa eum neque minus dolorem numquam eius maxime doloribus vitae!</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 rounded-2xl">
                            <div className="flex gap-5">
                                {/* Icon */}
                                <div className="flex flex-col items-center">
                                    <span className="text-pink-500 bg-slate-100 rounded-full px-3 py-2"><i class="fa-solid fa-laptop-code fa-lg"></i></span>
                                    <span className="border-l border-dashed h-full"></span>
                                </div>
                                {/* Content */}
                                <div>
                                    <h4 className="mt-0">Application Development Associate, Accenture</h4>
                                    <p className="text-sm">Dec 2021 - Jun 2022</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis id ipsa eum neque minus dolorem numquam eius maxime doloribus vitae!</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 rounded-2xl">
                            <div className="flex gap-5">
                                {/* Icon */}
                                <div className="flex flex-col items-center">
                                    <span className="text-cyan-500 bg-slate-100 rounded-full px-3 py-2"><i className="fa-brands fa-js fa-xl"></i></span>
                                </div>
                                {/* Content */}
                                <div>
                                    <h4 className="mt-0">Web Developer, vInnovate Technologies</h4>
                                    <p className="text-sm">Jan 2019 - Oct 2019</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis id ipsa eum neque minus dolorem numquam eius maxime doloribus vitae!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Experience;