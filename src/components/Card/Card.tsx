import { CardProps } from "./Card.props"
import styles from "./Card.module.scss"

export const Card = ({ data }: CardProps) => {
  const { id, details, number, title, description } = data

  return (
    <div
      className={styles.card}
      key={id}
    >
      <p className={styles.details}>{details}</p>
      <div className={styles.body}>
        <span className={styles.number}>0{number}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
