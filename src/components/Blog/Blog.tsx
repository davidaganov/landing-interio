import { Article, LinkMore, Carousel } from "../"
import styles from "./Blog.module.scss"

import { ReactComponent as DecorationGrid } from "./images/grid.svg"

const reviewsData = [
  {
    id: 1,
    picture: require("./images/review-1.jpg"),
    title: "interior design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia cum minima dolorem aperiam iste, incidunt omnis recusandae, vitae voluptatum a nostrum vel",
    name: "Samantha William",
    job: "Senior Designer"
  },
  {
    id: 2,
    picture: require("./images/review-1.jpg"),
    title: "Help us improve our interior design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia cum minima dolorem aperiam iste.",
    name: "Samantha William",
    job: "Senior Designer"
  },
  {
    id: 3,
    picture: require("./images/review-1.jpg"),
    title: "Help us improve",
    description:
      "Aut officia cum minima dolorem aperiam iste, incidunt omnis recusandae, vitae voluptatum a nostrum vel",
    name: "Samantha William",
    job: "Senior Designer"
  }
]

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

const renderSlides = () => {
  return reviewsData.map((item) => {
    return (
      <div
        className={styles.review}
        key={item.id}
      >
        <div className={styles.reviewPicture}>
          <img
            src={item.picture}
            alt=""
            width="667"
            height="472"
          />
        </div>
        <div className={styles.reviewBody}>
          <h4 className={styles.reviewTitle}>{item.title}</h4>
          <p className={styles.reviewDescription}>{item.description}</p>
          <p className={styles.reviewName}>{item.name}</p>
          <p className={styles.reviewJob}>{item.job}</p>
        </div>
      </div>
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
          <DecorationGrid className={styles.decoration} />
          <Carousel>{renderSlides()}</Carousel>
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
