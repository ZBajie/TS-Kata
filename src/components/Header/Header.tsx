import { ReactNode } from "react"

type HeaderProps = {
  title: string
  level: number
  children: ReactNode
}

function Header({ title, level, children }: HeaderProps) {
  return (
    <header className="header-main">
      <h1>
        {title} Level: {level} {children}
      </h1>
    </header>
  )
}

export default Header
