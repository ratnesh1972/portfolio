//Connect is a component which contains links for social sites and github.
const Navbar = () => {
    return (
        <section className="fixed backdrop-saturate-50 backdrop-blur bg-slate-100/40 w-full">
            <div className="container rounded-lg p-4 mx-auto">
                <div className="flex flex-row gap-5 items-center justify-between">
                    <h4 className="text-lg font-semibold">&#60; Ratnesh Patil /&#62;</h4>
                    <div className="flex flex-row gap-8 text-md">
                        <a href="#section1">Skills</a>
                        <a href="#section2">Projects</a>
                        <a href="#section3">Experience</a>
                        <a href="#section4">Connect</a>
                    </div>
                    <div>
                        <button><i class="fa-solid fa-moon fa-lg"></i></button>
                    </div>
                </div >
            </div>
        </section >
    )
}

export default Navbar;