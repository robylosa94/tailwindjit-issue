import { FC, JSXElementConstructor } from "react";

import cn from "classnames";
import s from "./Title.module.scss";

interface Props {
  size?: "sm" | "lg" | "xl"
  Component?: string | JSXElementConstructor<any>
  className?: string
}

const Title: FC<Props> = ({ size, Component = "h2", children, className }) => {
  const rootClassName = cn(
    s.root,
    {
      [s.sm]: size === "sm",
      [s.lg]: size === "lg",
      [s.xl]: size === "xl",
    },
    className
  )
  return <Component className={rootClassName}>{children}</Component>
}

export default Title
