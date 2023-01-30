import { DetailedHTMLProps, ReactNode, HTMLProps } from "react"

export interface ButtonProps
  extends DetailedHTMLProps<HTMLProps<HTMLAnchorElement>, HTMLAnchorElement> {
  children: ReactNode
  apperance: "primary" | "ghost"
  color?: "purple" | "white" | "black"
  scale?: "big" | "small"
}
