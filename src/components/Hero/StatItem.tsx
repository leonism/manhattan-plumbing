const StatItem = ({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType
  value: string | number
  label: string
}) => {
  return (
    <article
      className="mx-auto my-auto flex flex-col items-center text-center md:mx-0 md:text-left"
      aria-labelledby={`stat-label-${label.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="flex items-center">
        {/* Icon */}
        <Icon className="mr-2 h-4 w-4 text-white md:h-6 md:w-6 xl:h-8 xl:w-8" aria-hidden="true" />
        {/* Value */}
        <span className="text-sm leading-none font-bold text-white md:text-2xl xl:text-4xl">
          {value}
        </span>
      </div>
      {/* Label */}
      <p
        id={`stat-label-${label.replace(/\s+/g, '-').toLowerCase()}`}
        className="md:text-md text-xs leading-relaxed text-white/90 xl:text-xl"
      >
        {label}
      </p>
    </article>
  )
}

export default StatItem
