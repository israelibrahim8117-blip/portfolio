const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-4 w-4"
  >
    <path d="M14 4h6v6" />
    <path d="m20 4-9 9" />
    <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
  </svg>
);

const ProjectCard = ({ project }) => {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-800 bg-[#07111e] transition duration-300 hover:-translate-y-1 hover:border-blue-500/60">
      <div className="aspect-video overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-base font-semibold text-white">
          {project.title}
        </h3>

        <p className="mb-4 text-xs leading-6 text-slate-400">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-[10px] text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a
            href={project.liveUrl}
            className="flex items-center gap-2 text-xs font-medium text-white transition hover:text-blue-400"
          >
            <ExternalIcon />
            Live Demo
          </a>

          <a
            href={project.githubUrl}
            className="flex items-center gap-2 text-xs font-medium text-white transition hover:text-blue-400"
          >
            <GithubIcon />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
