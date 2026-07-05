import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  subtitle: string
  title: string
  description?: string
  align?: "center" | "left"
  className?: string
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        align === "center" ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-2xl",
        className
      )}
    >
      <span className="text-xs font-bold uppercase tracking-widest text-brand-red px-3 py-1 bg-red-50 rounded-full w-fit">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy mt-4 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-brand-gray-text text-base md:text-lg mt-4 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
