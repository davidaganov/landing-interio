import cn from "classnames"
import { ButtonProps } from "./Button.props"
import styles from "./Button.module.scss"

export const Button = ({
  apperance = "primary",
  color = "black",
  scale = "small",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <a
      className={cn(styles.btn, className, {
        [styles.primary]: apperance === "primary",
        [styles.ghost]: apperance === "ghost",
        [styles.big]: scale === "big",
        [styles.small]: scale === "small",
        [styles.purple]: color === "purple",
        [styles.white]: color === "white",
        [styles.black]: color === "black"
      })}
      {...props}
    >
      <span className={styles.content}>{children}</span>
    </a>
  )
}
