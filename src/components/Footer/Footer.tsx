import styles from "./Footer.module.scss"
import { Logo } from "../"

import { ReactComponent as FacebookIcon } from "./icons/facebook.svg"
import { ReactComponent as TwitterIcon } from "./icons/twitter.svg"
import { ReactComponent as LinkedinIcon } from "./icons/linkedin.svg"
import { ReactComponent as YoutubeIcon } from "./icons/youtube.svg"

const footerList = [
  {
    id: 1,
    title: "About us",
    list: [
      { title: "Our Portfolio", link: "#" },
      { title: "Our Services", link: "#" },
      { title: "Blog", link: "#" },
      { title: "Shop", link: "#" }
    ]
  },
  {
    id: 2,
    title: "Terms",
    list: [
      { title: "Terms of services", link: "#" },
      { title: "Privacy policy", link: "#" },
      { title: "Information security", link: "#" },
      { title: "Diversity & Inclusion", link: "#" }
    ]
  },
  {
    id: 3,
    title: "Support",
    list: [
      { title: "Help/Support", link: "#" },
      { title: "Inquiry", link: "#" },
      { title: "Contact us", link: "#" }
    ]
  }
]

const footerSocial = [
  {
    id: 1,
    link: "#",
    icon: <FacebookIcon />,
    aria: "Our page on Facebook"
  },
  {
    id: 2,
    link: "#",
    icon: <TwitterIcon />,
    aria: "Our account on Twitter"
  },
  {
    id: 3,
    link: "#",
    icon: <LinkedinIcon />,
    aria: "Our page on LinkedIn"
  },
  {
    id: 4,
    link: "#",
    icon: <YoutubeIcon />,
    aria: "Our channel on YouTube"
  }
]

export const Footer = () => {
  const renderSocial = () => {
    const items = footerSocial.map(({ id, link, aria, icon }) => {
      return (
        <li
          className={styles.socialItem}
          key={id}
        >
          <a
            href={link}
            className={styles.socialLink}
            aria-label={aria}
          >
            {icon}
          </a>
        </li>
      )
    })
    return (
      <div className={styles.social}>
        <p className={styles.socialTitle}>Follow us:</p>
        <ul className={styles.socialList}>{items}</ul>
      </div>
    )
  }

  const renderListItem = (list: { title: string; link: string }[]) => {
    return list.map(({ title, link }) => {
      return (
        <li
          className={styles.listItem}
          key={title}
        >
          <a
            href={link}
            className={styles.listLink}
          >
            {title}
          </a>
        </li>
      )
    })
  }

  const renderList = () => {
    const lists = footerList.map(({ id, title, list }) => {
      return (
        <li
          key={id}
          className={styles.block}
        >
          <p className={styles.blockTitle}>{title}</p>
          <ul className={styles.list}>{renderListItem(list)}</ul>
        </li>
      )
    })

    return <ul className={styles.links}>{lists}</ul>
  }

  const social = renderSocial()
  const links = renderList()

  return (
    <footer
      className={styles.footer}
      id="footer"
    >
      <div className="inner">
        <div className={styles.top}>
          <Logo className={styles.logo} />
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, elit consectetur adipisicing. Repudiandae quidem.
          </p>
          {social}
          {links}
        </div>
        <div className={styles.bottom}></div>
      </div>
    </footer>
  )
}
