import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface ArticleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  data: {
    id: number
    title: string
    description: string
    picture: string
  }
}
