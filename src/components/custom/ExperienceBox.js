import React from 'react';

const ExperienceBox = ({ data }) => {

    return (
        <div className="prose items-center dark:prose-invert">
            <div className="grid grid-cols-1 mt-5">
                {
                    data.map((exp, index) => (
                        < div className="px-4 rounded-2xl" >
                            <div className="flex gap-5">
                                {/* Icon */}
                                <div className="flex flex-col items-center">
                                    <span className={`${exp.icon_color} bg-slate-100 rounded-full px-3 py-2 dark:bg-slate-800`}><i class={exp.icon}></i></span>
                                    {index !== (data.length - 1) && <span className="border-l border-dashed h-full dark:border-slate-700"></span>}
                                </div>
                                {/* Content */}
                                <div>
                                    <h4 className="mt-0">{exp.title}, {exp.company}</h4>
                                    <p className="text-sm">{exp.start} - {exp.end}</p>
                                    <p>{exp.description}</p>
                                </div>
                            </div>
                        </div >
                    )
                    )
                }
            </div>
        </div>
    )
}

export default ExperienceBox;
