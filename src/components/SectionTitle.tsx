interface SectionTitleProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  dark = false,
}: SectionTitleProps) {
  return (
    <div className="mb-8 md:mb-12">
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg md:text-xl font-bold max-w-3xl leading-relaxed ${
            dark ? "text-gray-400" : "text-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
