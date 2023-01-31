import { DetailedHTMLProps, HTMLAttributes } from "react"
import { navLink } from "../../interfaces"

export interface NavbarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  list: navLink[]
}
