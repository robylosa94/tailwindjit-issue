import { FC } from "react"
import cn from "classnames"
import s from "./Grid.module.scss"

interface Props {
  className?: string
}

const Grid: FC<Props> = ({ children, className }) => {
  const rootClassName = cn(s.root, className)
  return <div className={rootClassName}>{children}</div>
}

export default Grid
