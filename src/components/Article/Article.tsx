import { ArticleProps } from "./Article.props"
import styles from "./Article.module.scss"

export const Article = ({ data }: ArticleProps) => {
  const { id, title, description, picture } = data

  return (
    <div
      className={styles.article}
      key={id}
    >
      <div className={styles.picture}>
        <img
          src={picture}
          alt={title}
        />
      </div>
      <h3 className={styles.title}>
        <a
          href="#"
          className={styles.titleLink}
        >
          {title}
        </a>
      </h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
