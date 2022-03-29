//Connect is a component which contains links for social sites and github.
const Connect = () => {
    return (
        <section id="connect" className="container mx-auto py-20 px-5 lg:px-0">
            {/* Heading and subheading of our section */}
            <div className="prose lg:prose-xl text-center m-auto mb-5">
                <h3 className="gradient-text">Wanna Know More?</h3>
                <h1>Connect with me.</h1>
            </div>
            {/* Divide content and img into 4 columns */}
            <div className="flex flex-col gap-10 mt-10 items-center justify-center lg:flex-row lg:mt-20">
                <a class="rounded-lg bg-slate-900 shadow-lg shadow-slate-900/50 text-white text-center px-10 py-3 w-48" href="https://github.com/ratnesh1972" target="_blank"><i class="fa-brands fa-github fa-lg"></i> Github</a>

                <a class="rounded-lg bg-blue-500 shadow-lg shadow-blue-500/50 text-white text-center px-10 py-3 w-48" href="https://www.linkedin.com/in/ratneshpatil/" target="_blank"><i class="fa-brands fa-linkedin fa-lg"></i> LinkedIn</a>

                <a class="rounded-lg bg-pink-500 shadow-lg shadow-pink-500/50 text-white text-center px-10 py-3 w-48" href="https://www.instagram.com/devmaniac173/" target="_blank"><i class="fa-brands fa-instagram fa-lg"></i> Instagram</a>
            </div >
        </section >
    )
}

export default Connect;