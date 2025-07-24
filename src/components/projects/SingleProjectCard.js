const SingleProjectCard = ({ project }) => {
    const { image, alt, title, description, skills, link } = project
    return (
        <div className="bg-gray-100 px-4 rounded-2xl dark:bg-slate-800">
            <div className="prose my-4 dark:prose-invert">
                <img className="rounded-xl m-0 p-0" src={image} alt={alt} />
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p className="text-xs">Tech Stack - <span className="font-semibold">{skills}</span></p>
                    <a href={link} rel="noreferrer" target="_blank"><button className="rounded-full bg-pink-500 shadow-lg shadow-pink-500/50 text-white px-5 py-1">View Project</button></a>
                </div>
            </div>
        </div>
    )
}

export default SingleProjectCard;