function Input({ error, id, label, name, className = '', ...props }) {
  const fieldId = id || name

  return (
    <div className="space-y-2">
      {label ? (
        <label htmlFor={fieldId} className="block text-sm font-semibold text-zinc-800">
          {label}
        </label>
      ) : null}
      <input
        id={fieldId}
        name={name}
        className={`focus-ring min-h-11 w-full rounded-md border border-zinc-300 bg-white px-4 text-sm text-zinc-900 shadow-sm transition placeholder:text-zinc-400 focus:border-teal-700 ${className}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        {...props}
      />
      {error ? (
        <p id={`${fieldId}-error`} className="text-sm font-medium text-rose-700">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export default Input
