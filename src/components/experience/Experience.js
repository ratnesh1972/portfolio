import React, { useState } from 'react';
import TitleBox from '../custom/TitleBox';
import ExperienceBox from '../custom/ExperienceBox';

import experience from '../../assets/images/experience.png';
import experience_cms from '../../utils/experience.json';
import resume from '../../assets/RatneshPatilResume.pdf';

//Experience is a component which contains my past experience in terms of work and png.
const Experience = () => {

    //store experience json data into state.
    const [state] = useState(experience_cms);

    return (
        <section id="experience" className="pt-20 px-5 lg:px-0 lg:py-20 dark:bg-slate-900">
            {/* container */}
            <div className="container mx-auto">
                {/* Heading and subheading of our section */}
                <TitleBox title={state.title} subtitle={state.subtitle} textgrad="gradient-text3" />
                <div className="text-center pt-10 pb-5">
                    <a className="rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white text-center px-10 py-3 w-48" href={resume} download rel="noreferrer"><i className="fa-solid fa-download fa-lg"></i> Download My Resume</a>
                </div>
                {/* Divide content and img into two columns */}
                <div className="grid grid-cols-1 gap-5 mt-10 lg:grid-cols-2 lg:mt-20">
                    {/* Image */}
                    <div className="pr-20 flex items-center lg:pr-30">
                        <img src={experience} alt="Skills" />
                    </div>
                    {/* Content */}
                    <ExperienceBox data={state.experiences} />
                </div >
            </div>
        </section >
    )
}

export default Experience;