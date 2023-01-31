import cn from "classnames"
import styles from "./Header.module.scss"
import { Navbar, Button } from ".."

export const Header = () => {
  const navbarLinks = [
    { id: 1, link: "#header", title: "Home" },
    { id: 2, link: "#services", title: "Services" },
    { id: 3, link: "#projects", title: "Projects" },
    { id: 4, link: "#blog", title: "Blog" },
    { id: 5, link: "#contact", title: "Contact Us" }
  ]

  return (
    <header
      className={styles.header}
      id="header"
    >
      <div className={cn(styles.inner, "inner")}>
        <Navbar list={navbarLinks} />

        <div className={styles.content}>
          <div className={styles.hr}></div>
          <h1 className={styles.title}>Elegantly</h1>
          <div className={styles.hr}></div>
          <h2 className={styles.subtitle}>Refined Interior Design</h2>
          <div className={styles.hr}></div>

          <div className={styles.control}>
            <Button
              href="#contact"
              className={styles.btn}
              apperance="primary"
              color="purple"
              scale="big"
            >
              Get in Touch
            </Button>
            <Button
              href="#about"
              className={styles.btn}
              apperance="primary"
              color="white"
              scale="big"
            >
              About Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
