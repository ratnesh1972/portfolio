//Connect is a component which contains links for social sites and github.
const Footer = () => {
    return (
        <section className="bg-slate-100 py-20 dark:bg-slate-800">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="flex flex-col gap-5 items-center lg:flex-row lg:justify-between dark:text-slate-300">
                    <h4 className="text-lg font-semibold">&#60; Ratnesh Patil /&#62;</h4>
                    <div className="flex flex-col gap-5 lg:flex-row items-center">
                        <span className="text-sm"><i className="fa-solid fa-envelope-open-text"></i> ratneshpatil117@gmail.com</span>
                        <span className="text-sm"><i className="fa-solid fa-mobile"></i> +91 775-890-5725</span>
                    </div>
                </div >
                <div className="border-t border-slate-200 mt-10 text-center pt-10 dark:border-slate-600">
                    <p className="text-sm text-slate-600 dark:text-slate-400">Designed and developed with <i className="fa-solid fa-heart text-rose-500"></i> by Ratnesh.</p>
                </div>
            </div>
        </section >
    )
}

export default Footer;