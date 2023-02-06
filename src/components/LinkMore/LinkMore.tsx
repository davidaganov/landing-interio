import cn from "classnames"
import { LinkMoreProps } from "./LinkMore.props"
import styles from "./LinkMore.module.scss"

import { ReactComponent as ArrowIcon } from "./icons/arrow.svg"

export const LinkMore = ({ children, className, ...props }: LinkMoreProps) => {
  return (
    <a
      className={cn(styles.link, className)}
      {...props}
    >
      <span className={styles.text}>{children}</span>
      <span className={styles.icon}>
        <ArrowIcon />
      </span>
    </a>
  )
}
