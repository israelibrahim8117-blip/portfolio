const SkillCard = ({ skill }) => {
  return (
    <div className="rounded-lg border border-slate-800 bg-[#07111e] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50">
      {/* Category */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-400">
          <span className="text-sm">✦</span>
        </div>

        <h3 className="text-sm font-semibold text-white">{skill.category}</h3>
      </div>

      {/* Technologies */}
      <div className="space-y-3">
        {skill.technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex items-center gap-3 rounded-md px-2 py-2 transition hover:bg-slate-900"
          >
            <div className="flex h-8 w-8 items-center justify-center">
              <i className={`${technology.icon} text-2xl`} aria-hidden="true" />
            </div>

            <span className="text-xs text-slate-300">{technology.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
