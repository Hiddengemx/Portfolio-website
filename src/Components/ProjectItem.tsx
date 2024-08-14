interface IProjectItem {
  title: string;
  description: string;
  url: string;
  technologies: string[];
}

const ProjectItem = ({
  title,
  description,
  url,
  technologies,
}: IProjectItem) => {
  return (
    <div className="p-4 my-3 bg-inherit border-2 border-slate-900 rounded-xl shadow-md tracking-wide animate-fade-up ">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-slate-800 mb-4">{description}</p>
      <p className="mb-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          {url}
        </a>
      </p>
      <p className="text-white">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-slate-900 rounded-lg px-2 py-1 mr-2"
          >
            {tech}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ProjectItem;
