import React, { useState } from 'react';

//Connect is a component which contains links for social sites and github.
const Navbar = () => {
    const [show, setshow] = useState(false);

    const toggleShow = () => setshow(!show);

    return (
        <section className="fixed backdrop-saturate-50 backdrop-blur bg-slate-100/40 w-full">
            <div className="container rounded-lg p-4 mx-auto">
                <div className="grid grid-cols-2 gap-5 items-center justify-between md:grid-cols-3">
                    <div className="order-1">
                        <h4 className="text-lg font-semibold">&#60; Ratnesh Patil /&#62;</h4>
                    </div>
                    <div className={`order-3 ${show ? 'flex' : 'hidden'} ease-in-out flex-col gap-5 text-md md:justify-between md:flex-row md:gap-0 md:order-2 md:flex`}>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#experience">Experience</a>
                        <a href="#connect">Connect</a>
                    </div>
                    <div className="justify-self-end order-2 md:order-3">
                        {/* <button><i className="fa-solid fa-moon fa-lg"></i></button> */}
                        <button className="block md:hidden" onClick={toggleShow}><i class="fa-solid fa-bars"></i></button>
                    </div>
                </div >
            </div>
        </section >
    )
}

export default Navbar;