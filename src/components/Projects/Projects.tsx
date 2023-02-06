import styles from "./Projects.module.scss"
import { Project } from "../"

export const Projects = () => {
  const projectsData = [
    {
      id: 1,
      number: 1,
      direction: "ltr",
      title: "Delta office",
      pictures: [require("./images/big-1.jpg"), require("./images/small-1.jpg")],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quidem vero officiis commodi, harum perferendis explicabo corporis deserunt sapiente possimus maiores nisi soluta iste, minima nemo dolore architecto distinctio! Temporibus."
    },
    {
      id: 2,
      number: 2,
      direction: "rtl",
      title: "Royal corporate space",
      pictures: [require("./images/big-2.jpg"), require("./images/small-2.jpg")],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quidem vero officiis commodi, harum perferendis explicabo corporis deserunt sapiente possimus maiores nisi soluta iste, minima nemo dolore architecto distinctio! Temporibus."
    },
    {
      id: 3,
      number: 3,
      direction: "ltr",
      title: "Mext lounge",
      pictures: [require("./images/big-3.jpg"), require("./images/small-3.jpg")],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quidem vero officiis commodi, harum perferendis explicabo corporis deserunt sapiente possimus maiores nisi soluta iste, minima nemo dolore architecto distinctio! Temporibus."
    }
  ]

  const renderProjects = () => {
    return projectsData.map((item) => {
      return (
        <Project
          key={item.id}
          data={item}
        />
      )
    })
  }

  const projects = renderProjects()

  return (
    <section
      className={styles.projects}
      id="projects"
    >
      <div className="inner">
        <h2 className={styles.title}>Selected Projects</h2>
        <div className={styles.body}>{projects}</div>
      </div>
    </section>
  )
}
