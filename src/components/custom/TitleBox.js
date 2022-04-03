import React from 'react'

const TitleBox = ({ title, subtitle, textgrad }) => {
    return (
        <div className="prose lg:prose-xl text-center m-auto mb-5 dark:prose-invert">
            <h3 className={textgrad}>{subtitle}</h3>
            <h1>{title}</h1>
        </div>
    )
}

export default TitleBox;
