interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeader = ({ subtitle, title, description, center = true }: SectionHeaderProps) => (
  <div className={`mb-14 ${center ? "text-center" : ""}`}>
    {subtitle && (
      <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-primary/40" />
        <span className="text-primary font-body font-semibold text-sm uppercase tracking-[0.2em]">
          {subtitle}
        </span>
        <span className="h-px w-8 bg-primary/40" />
      </div>
    )}
    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
      {title}
    </h2>
    {description && (
      <p className={`mt-5 text-muted-foreground max-w-2xl text-lg leading-relaxed ${center ? "mx-auto" : ""}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
