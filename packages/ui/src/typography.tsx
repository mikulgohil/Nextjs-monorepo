export const Heading = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 
      className={cn(
        "font-heading text-2xl font-bold",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

export const Text = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p 
      className={cn(
        "font-sans text-base",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
} 