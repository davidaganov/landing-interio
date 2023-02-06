import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface ProjectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  data: {
    id: number
    number: number
    direction?: string
    title: string
    pictures: string[]
    description: string
  }
}
