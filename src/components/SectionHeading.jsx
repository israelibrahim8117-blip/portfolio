const SectionHeading = ({ eyebrow, title, align = "left" }) => {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
      <div
        className={`mb-3 flex items-center gap-2 text-sm font-medium text-blue-400 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-3 bg-blue-500" />
        <span>{eyebrow}</span>
      </div>

      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
