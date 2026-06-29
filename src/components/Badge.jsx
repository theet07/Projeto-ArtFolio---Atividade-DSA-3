function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
