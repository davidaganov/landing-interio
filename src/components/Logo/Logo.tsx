import { ReactComponent as LogoSVG } from "./logo.svg"
import styles from "./Logo.module.scss"

export const Logo = () => {
  return (
    <a
      href="/"
      aria-label="Go to home page"
      className={styles.logo}
    >
      <LogoSVG />
    </a>
  )
}
