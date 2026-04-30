import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-extrabold tracking-tight rounded-xl transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-navy border-3 border-navy hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#0f172a] active:translate-y-0 active:shadow-none",
    outline:
      "bg-transparent text-foreground border-3 border-foreground hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#34d399] hover:border-accent active:translate-y-0 active:shadow-none",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
