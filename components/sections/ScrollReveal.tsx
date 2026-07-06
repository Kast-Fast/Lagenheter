interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  id?: string
}

export default function ScrollReveal({ children, className, id }: Props) {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  )
}
