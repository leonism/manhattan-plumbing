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
      className="flex flex-col items-center text-center mx-auto my-auto md:text-left md:mx-0"
      aria-labelledby={`stat-label-${label.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="flex items-center">
        {/* Icon */}
        <Icon className="h-4 w-4 mr-2 md:h-6 md:w-6 xl:h-8 xl:w-8 text-white" aria-hidden="true" />
        {/* Value */}
        <span className="text-sm md:text-2xl xl:text-4xl font-bold text-white leading-none">
          {value}
        </span>
      </div>
      {/* Label */}
      <p
        id={`stat-label-${label.replace(/\s+/g, '-').toLowerCase()}`}
        className="text-xs md:text-md xl:text-xl text-white/90 leading-relaxed"
      >
        {label}
      </p>
    </article>
  )
}

export default StatItem
