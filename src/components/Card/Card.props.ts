import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  data: {
    id: number
    details: string
    number: number
    title: string
    description: string
  }
}
