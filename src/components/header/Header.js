import Ratnesh from '../../assets/images/ratnesh.jpg';

//Skills is a component which contains skills card and png.
const Header = () => {
    return (
        <section className="pt-40 pb-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="container mx-auto">
                {/* My image */}
                <div className="w-60 mx-auto p-1.5 rounded-full bg-slate-200 shadow-xl shadow-pink-400/60 lg:w-72">
                    <img src={Ratnesh} alt="My Brand" className="rounded-full" />
                </div>
                {/* Heading and subheading of our section */}
                <div className="prose lg:prose-2xl text-center mx-auto mt-10">
                    <h1 className="text-slate-100">React / Front-End Developer</h1>
                    <h4 className="text-slate-200">Based in Pune, India</h4>
                </div>
                <div className="text-center mt-8">
                    <a href="#skills"><p className="text-slate-200 font-semibold text-sm lg:text-lg">Know More</p>
                        <i className="fa-solid fa-arrow-down-long text-slate-200 fa-lg animate-bounce p-5 rounded-full bg-transperent"></i>
                    </a>
                </div>
            </div>
        </section >
    )
}

export default Header;