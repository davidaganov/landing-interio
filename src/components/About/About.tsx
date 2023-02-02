import { Button } from "../"
import styles from "./About.module.scss"

import { ReactComponent as DecorationGrid } from "./images/grid.svg"
import { ReactComponent as DecorationStar } from "./images/star.svg"
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg"

const cardsData = [
  {
    id: 1,
    number: 1,
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Custom furniture",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 2,
    number: 2,
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Furniture layouts",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
  },
  {
    id: 3,
    number: 3,
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Space planning",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  }
]

const renderCards = () => {
  return cardsData.map(({ id, number, details, title, description }) => {
    return (
      <div
        className={styles.card}
        key={id}
      >
        <p className={styles.cardDetails}>{details}</p>
        <div className={styles.cardBody}>
          <span className={styles.cardNumber}>0{number}</span>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    )
  })
}

const cards = renderCards()

export const About = () => {
  return (
    <section
      className={styles.about}
      id="about"
    >
      <div className={(styles.inner, "inner")}>
        <div className={styles.top}>
          <span className={styles.info}>Presenation</span>
          <p className={styles.infoDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minimal corrupti id, quia
            porro saepe commodi illum dolore molestiae, tenetur, animi error aperiam aut.
          </p>
          <DecorationGrid className={styles.grid} />
          <DecorationStar className={styles.star} />
        </div>

        <div className={styles.middle}>
          <div className={styles.heading}>
            <h2 className={styles.title}>We do it best</h2>
            <a
              href="#"
              className={styles.more}
            >
              <span className={styles.moreText}>Learn more</span>
              <span className={styles.moreIcon}>
                <ArrowIcon />
              </span>
            </a>
          </div>

          <div className={styles.slider}>{cards}</div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.heading}>
            <h2 className={styles.title}>Who we are</h2>
          </div>
          <div className={styles.picture}>
            <img
              src={require("./images/pic.jpg")}
              alt="Photo by our designer"
              width="500"
              height="577"
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.contentTitle}>Interior design that matters</h2>
            <p className={styles.contentDescription}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minimal corrupti id, quia
              porro saepe commodi illum dolore molestiae, tenetur, animi error aperiam aut.
            </p>
            <p className={styles.contentDescription}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minimal corrupti id, quia
              porro saepe commodi illum dolore molestiae, tenetur, animi error aperiam aut.
            </p>
            <Button
              className={styles.contentBtn}
              href="#"
              apperance="ghost"
              color="white"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
