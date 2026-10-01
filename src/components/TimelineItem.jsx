const TimelineItem = ({ item, isLast }) => {
  return (
    <div className="relative flex-1">
      {!isLast && (
        <div className="absolute left-3 top-1.5 hidden h-px w-full bg-blue-500/40 sm:block" />
      )}

      <div className="relative">
        <span className="mb-3 flex h-3 w-3 rounded-full border-2 border-blue-400 bg-[#050b14] shadow-[0_0_12px_rgba(59,130,246,0.6)]" />

        <p className="mb-1 text-xs font-semibold text-blue-400">{item.year}</p>

        <h3 className="text-xs font-semibold text-white">{item.title}</h3>

        <p className="mt-1 text-[10px] leading-4 text-slate-500">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
