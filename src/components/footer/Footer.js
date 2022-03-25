//Connect is a component which contains links for social sites and github.
const Footer = () => {
    return (
        <section className="bg-slate-100 py-20">
            <div className="container mx-auto">
                <div className="flex flex-row gap-5 items-center justify-between">
                    <h4 className="text-lg font-semibold">&#60; Ratnesh Patil /&#62;</h4>
                    <div className="flex flex-row gap-5">
                        <span className="text-sm"><i class="fa-solid fa-envelope-open-text"></i> ratneshdesigns@gmail.com</span>
                        <span className="text-sm"><i class="fa-solid fa-mobile"></i> +91 775-890-5725</span>
                    </div>
                </div >
                <div className="border-t border-slate-200 mt-10 text-center pt-10">
                    <p className="text-sm text-slate-600">Designed and developed with <i class="fa-solid fa-heart text-rose-500"></i> by Ratnesh.</p>
                </div>
            </div>
        </section >
    )
}

export default Footer;