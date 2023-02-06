import { useEffect, useState, useRef } from "react"
import { NavbarProps } from "./Navbar.props"
import styles from "./Navbar.module.scss"
import cn from "classnames"
import { Logo } from "../"

import { navLink } from "../../interfaces"

import { ReactComponent as BurgerIcon } from "./icons/burger.svg"
import { ReactComponent as CartIcon } from "./icons/cart.svg"
import { ReactComponent as CloseIcon } from "./icons/close.svg"

export const Navbar = ({ list, ...props }: NavbarProps) => {
  const [opened, setOpened] = useState<boolean>(false)
  const closeRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    opened ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll")
  }, [opened])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1021) {
        setOpened(true)
      } else {
        setOpened(false)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const openMenu = () => {
    if (closeRef.current) closeRef.current.focus()
    setOpened(!opened)
  }

  const closeMenu = () => {
    if (window.innerWidth < 1021) setOpened(false)
  }

  const buildLink = ({ title, link, last }: navLink) => {
    return (
      <a
        href={link}
        className={styles.link}
        tabIndex={opened ? 0 : -1}
        onBlur={() => (last ? closeMenu() : null)}
      >
        <span className={styles.content}>{title}</span>
      </a>
    )
  }

  const buildMenu = () => {
    const items = list.map((item, i) => {
      if (i === list.length - 1) item.last = true

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
      <ul
        className={styles.list}
        onClick={() => setOpened(false)}
      >
        {items}
      </ul>
    )
  }

  const menu = buildMenu()

  return (
    <div className={styles.navbar}>
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
          tabIndex={opened ? 0 : -1}
          ref={closeRef}
        >
          <CloseIcon />
        </button>
        {menu}
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
          onClick={() => openMenu()}
          tabIndex={opened ? -1 : 0}
          aria-label="Open navbar"
          aria-expanded={opened}
        >
          <BurgerIcon />
        </button>
      </div>
    </div>
  )
}
