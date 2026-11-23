import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
import ScrollExperience from "./ScrollExperience"

export default function Shell({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`shell-root ${className}`}>
      <ScrollExperience />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

