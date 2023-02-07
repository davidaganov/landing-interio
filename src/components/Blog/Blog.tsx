import { Article, LinkMore } from "../"
import styles from "./Blog.module.scss"

import { ReactComponent as DecorationGrid } from "./images/grid.svg"

const articlesData = [
  {
    id: 1,
    title: "Custom furniture",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus nemo possimus hic nesciunt assumenda temporibus sed velit.",
    picture: require("./images/pic-1.jpg")
  },
  {
    id: 2,
    title: "Furniture layouts",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus nemo possimus hic nesciunt assumenda temporibus sed velit perferendis repudiandae quae, ipsa pariatur repellat distinctio labore optio saepe animi ducimus amet?",
    picture: require("./images/pic-2.jpg")
  }
]

const renderArticles = () => {
  return articlesData.map((item) => {
    return (
      <Article
        key={item.id}
        data={item}
      />
    )
  })
}

const articles = renderArticles()

export const Blog = () => {
  return (
    <section
      className={styles.blog}
      id="blog"
    >
      <div className={(styles.inner, "inner")}>
        <h2 className={styles.title}>Our Happy Clients</h2>

        <div className={styles.clients}>
          <DecorationGrid className={styles.grid} />
          <div className={styles.slide}>
            <div className={styles.picture}>
              <img
                src={require("./images/slider-1.jpg")}
                alt=""
                width="667"
                height="472"
              />
            </div>
            <div className={styles.review}>
              <h4 className={styles.reviewTitle}>Help us improve our interior design</h4>
              <p className={styles.reviewDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia cum minima
                dolorem aperiam iste, incidunt omnis recusandae, vitae voluptatum a nostrum vel
              </p>
              <p className={styles.reviewName}>Samantha William</p>
              <p className={styles.reviewJob}>Senior Designer</p>
            </div>
          </div>
        </div>

        <div className={styles.articles}>
          <div className={styles.articlesHeading}>
            <h2 className={styles.articlesTitle}>Our latest articles</h2>
            <LinkMore href="#">All post</LinkMore>
          </div>

          <div className={styles.articlesBody}>{articles}</div>
        </div>
      </div>
    </section>
  )
}
