import { ProjectProps } from "./Project.props"
import styles from "./Project.module.scss"
import cn from "classnames"
import { Button } from "../"

export const Project = ({ data }: ProjectProps) => {
  const { id, number, direction, title, pictures, description } = data
  const bigPicture = pictures[0]
  const smallPicture = pictures[1]

  return (
    <article
      className={cn(styles.project, {
        [styles.ltr]: direction === "ltr",
        [styles.rtl]: direction !== "ltr"
      })}
      key={id}
    >
      <div className={styles.left}>
        <span className={styles.number}>0{number}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Button
          href="#"
          className={styles.btn}
          apperance="ghost"
          color="black"
        >
          Learn more
        </Button>
      </div>
      <div className={styles.right}>
        <img
          className={styles.bigPicture}
          src={bigPicture}
          alt={title}
        />
        <img
          className={styles.smallPicture}
          src={smallPicture}
          alt={title}
          width="228"
          height="238"
        />
      </div>
    </article>
  )
}
