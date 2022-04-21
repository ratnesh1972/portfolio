//Connect is a component which contains links for social sites and github.
const Connect = () => {
    return (
        <section id="connect" className="py-20 px-5 lg:px-0 dark:bg-slate-900">
            {/* container */}
            <div className="container mx-auto">
                {/* Heading and subheading of our section */}
                <div className="prose lg:prose-xl text-center m-auto mb-5 dark:prose-invert">
                    <h3 className="gradient-text">Wanna Know More?</h3>
                    <h1>Connect with me.</h1>
                </div>
                {/* Divide content and img into 4 columns */}
                <div className="flex flex-col gap-10 mt-10 items-center justify-center lg:flex-row lg:mt-20">
                    <a className="rounded-lg bg-slate-900 shadow-lg shadow-slate-900/50 text-white text-center px-10 py-3 w-48 dark:bg-slate-700" href="https://github.com/ratnesh1972" target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-lg"></i> Github</a>

                    <a className="rounded-lg bg-blue-500 shadow-lg shadow-blue-500/50 text-white text-center px-10 py-3 w-48" href="https://www.linkedin.com/in/ratneshpatil/" target="_blank" rel="noreferrer"><i className=" fa-brands fa-linkedin fa-lg"></i> LinkedIn</a>

                    <a className="rounded-lg bg-pink-500 shadow-lg shadow-pink-500/50 text-white text-center px-10 py-3 w-48" href="https://www.instagram.com/devmaniac173/" target="_blank" rel="noreferrer"><i className=" fa-brands fa-instagram fa-lg"></i> Instagram</a>
                </div >
            </div>
        </section >
    )
}

export default Connect;