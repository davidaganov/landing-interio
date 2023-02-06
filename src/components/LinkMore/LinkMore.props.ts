import { DetailedHTMLProps, ReactNode, HTMLProps } from "react"

export interface LinkMoreProps
  extends DetailedHTMLProps<HTMLProps<HTMLAnchorElement>, HTMLAnchorElement> {
  children: ReactNode
}
