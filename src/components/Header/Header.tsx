import styles from "./Header.module.scss"
import { Button } from ".."

export const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>Elegantly</h1>
      <hr className={styles.hr} />
      <h2 className={styles.subtitle}>Refined Interior Design</h2>
      <hr className={styles.hr} />

      <div className={styles.control}>
        <Button
          className={styles.btn}
          apperance="primary"
          color="purple"
          scale="big"
        >
          Test
        </Button>
        <Button
          className={styles.btn}
          apperance="primary"
          color="white"
          scale="big"
        >
          Test
        </Button>
      </div>
    </div>
  )
}
