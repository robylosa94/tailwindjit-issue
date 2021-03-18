import { FC } from "react";
import cn from "classnames";
import s from "./Container.module.scss";

interface Props {
  size?: "lg" | "full"
  className?: string
}

const Container: FC<Props> = ({ children, size, className }) => {
  const rootClassName = cn(
    s.root,
    {
      [s.lg]: size === "lg",
      [s.full]: size === "full",
    },
    className
  )
  return <div className={rootClassName}>{children}</div>
}

export default Container
