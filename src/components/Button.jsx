import { Link } from 'react-router-dom'

const variantStyles = {
  primary: 'bg-teal-700 text-white shadow-sm hover:bg-teal-800',
  secondary: 'bg-zinc-900 text-white shadow-sm hover:bg-zinc-800',
  outline: 'border border-zinc-300 bg-white text-zinc-900 hover:border-teal-700 hover:text-teal-800',
  ghost: 'bg-transparent text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950',
}

const sizeStyles = {
  sm: 'min-h-9 px-3 text-sm',
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-12 px-6 text-base',
}

function Button({
  children,
  className = '',
  href,
  icon,
  iconPosition = 'left',
  size = 'md',
  to,
  type = 'button',
  variant = 'primary',
  ...props
}) {
  const classes = [
    'focus-ring inline-flex items-center justify-center gap-2 rounded-md font-semibold transition',
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && iconPosition === 'left' ? <span aria-hidden="true">{icon}</span> : null}
      <span>{children}</span>
      {icon && iconPosition === 'right' ? <span aria-hidden="true">{icon}</span> : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  )
}

export default Button
