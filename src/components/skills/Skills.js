import skills from '../../assets/images/skills2.png';

//Skills is a component which contains skills card and png.
const Skills = () => {
    return (
        <section className="container mx-auto py-20 px-5 lg:px-0">
            {/* Heading and subheading of our section */}
            <div className="prose lg:prose-xl text-center m-auto mb-5">
                <h3 className="gradient-text">My Development Skills</h3>
                <h1>The most creative intuitive workmate.</h1>
            </div>
            {/* Divide content and img into two columns */}
            <div className="grid grid-cols-1 gap-5 mt-20 lg:grid-cols-2">
                {/* Content */}
                <div className="prose items-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumque animi itaque perferendis commodi. Doloribus!</p>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <div className="bg-gray-100 px-4 rounded-2xl">
                            <h4><span className="text-blue-600"><i class="fa-brands fa-react fa-lg" ></i></span> Frontend Development</h4>
                            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis id ipsa eum neque minus dolorem numquam eius maxime doloribus vitae!</p>
                        </div>
                        <div className="bg-gray-100 px-4 rounded-2xl">
                            <h4><span className="text-green-600"><i class="fa-brands fa-node fa-lg"></i></span> Backend Development</h4>
                            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis id ipsa eum neque minus dolorem numquam eius maxime doloribus vitae!</p>
                        </div>
                        <div className="bg-gray-100 px-4 rounded-2xl">
                            <h4><span className="text-rose-600"><i class="fa-solid fa-database fa-lg"></i></span> Database</h4>
                            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis id ipsa eum neque minus dolorem numquam eius maxime doloribus vitae!</p>
                        </div>
                        <div className="bg-gray-100 px-4 rounded-2xl">
                            <h4><span className="text-purple-600"><i class="fa-solid fa-pen-ruler fa-lg"></i></span> UI Design</h4>
                            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis id ipsa eum neque minus dolorem numquam eius maxime doloribus vitae!</p>
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