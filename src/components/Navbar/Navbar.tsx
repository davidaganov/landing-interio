import { useEffect, useState } from "react"
import { NavbarProps } from "./Navbar.props"
import styles from "./Navbar.module.scss"
import cn from "classnames"
import { Logo } from "../"

import { navLink } from "../../interfaces"

import { ReactComponent as BurgerIcon } from "./icons/burger.svg"
import { ReactComponent as CartIcon } from "./icons/cart.svg"
import { ReactComponent as CloseIcon } from "./icons/close.svg"

export const Navbar = ({ list, ...props }: NavbarProps): JSX.Element => {
  const [opened, setOpened] = useState<boolean>(false)

  useEffect(() => {
    opened ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll")
  }, [opened])

  const buildLink = ({ title, link }: navLink) => {
    return (
      <a
        href={link}
        className={styles.link}
      >
        <span className={styles.content}>{title}</span>
      </a>
    )
  }

  const buildMenu = () => {
    const items = list.map((item, i) => {
      return (
        <li
          className={styles.item}
          key={i}
        >
          {buildLink(item)}
        </li>
      )
    })

    return (
      <>
        <Logo />
        <nav
          className={cn(styles.menu, {
            [styles.opened]: opened
          })}
          role="navigation"
          {...props}
        >
          <button
            className={styles.close}
            type="button"
            aria-label="Close navbar"
            onClick={() => setOpened(false)}
            tabIndex={opened ? 1 : -1}
          >
            <CloseIcon />
          </button>
          <ul
            className={styles.list}
            onClick={() => setOpened(false)}
          >
            {items}
          </ul>
        </nav>
        <div className={styles.controls}>
          <button
            className={cn(styles.icon, styles.cart)}
            type="button"
            aria-label="Open cart"
          >
            <CartIcon />
          </button>
          <button
            className={cn(styles.icon, styles.burger)}
            type="button"
            onClick={() => setOpened(!opened)}
            tabIndex={opened ? -1 : 0}
            aria-label="Open navbar"
            aria-expanded={opened}
          >
            <BurgerIcon />
          </button>
        </div>
      </>
    )
  }

  const menu = buildMenu()

  return <div className={styles.navbar}>{menu}</div>
}
