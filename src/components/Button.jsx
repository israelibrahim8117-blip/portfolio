const ArrowIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const Button = ({
  children,
  href,
  variant = "primary",
  icon = true,
  type = "button",
  onClick,
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]",
    secondary:
      "border border-slate-600 bg-transparent text-white hover:border-blue-500 hover:bg-blue-500/10",
  };

  const className = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
        {icon && <ArrowIcon />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
      {icon && <ArrowIcon />}
    </button>
  );
};

export default Button;
