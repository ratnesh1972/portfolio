import React, { useState } from 'react';

const Navbar = ({ darkmode, toggleMode }) => {
    //state to decide if we should show navbar or hide on smaller screens depending on menu button click.
    const [show, setshow] = useState(false);

    //to toggle the show state.
    const toggleShow = () => setshow(!show);

    //to set show state to false
    const setShowFalse = () => setshow(false);

    return (
        <section className="fixed backdrop-saturate-50 backdrop-blur bg-slate-100/40 w-full dark:bg-slate-900/0">
            <div className="container rounded-lg p-4 mx-auto">
                <div className="grid grid-cols-2 gap-5 items-center justify-between md:grid-cols-3 dark:text-slate-100">
                    <div className="order-1">
                        <h4 className="text-lg font-semibold">&#60; Ratnesh Patil /&#62;</h4>
                    </div>
                    <div className={`order-3 ${show ? 'flex' : 'hidden'} ease-in-out flex-col gap-5 text-md md:justify-between md:flex-row md:gap-0 md:order-2 md:flex`}>
                        <a href="#skills" onClick={setShowFalse}>Skills</a>
                        <a href="#projects" onClick={setShowFalse}>Projects</a>
                        <a href="#experience" onClick={setShowFalse}>Experience</a>
                        <a href="#connect" onClick={setShowFalse}>Connect</a>
                    </div>
                    <div className="justify-self-end flex flex-row gap-5 order-2 md:order-3 md:flex-none">
                        <button onClick={toggleMode}><i className={`fa-solid ${darkmode ? 'fa-sun' : 'fa-moon'} fa-lg`}></i></button>
                        <button className="block md:hidden" onClick={toggleShow}><i className="fa-solid fa-bars"></i></button>
                    </div>
                </div >
            </div>
        </section >
    )
}

export default Navbar;