import { ReactComponent as LogoSVG } from "./logo.svg"
import { LogoProps } from "./Logo.props"
import styles from "./Logo.module.scss"
import cn from "classnames"

export const Logo = ({ className }: LogoProps) => {
  return (
    <a
      href="/"
      aria-label="Go to home page"
      className={cn(styles.logo, className)}
    >
      <LogoSVG />
    </a>
  )
}
