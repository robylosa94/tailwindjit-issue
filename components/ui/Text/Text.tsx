import React, { FC, JSXElementConstructor } from "react";

import cn from "classnames";
import s from "./Text.module.scss";

interface Props {
  variant?: Variant
  size?: "lg" | "xl"
  className?: string
  html?: React.ReactNode
}

type Variant = "body"

const Text: FC<Props> = ({ size, children, className, html, variant = "body" }) => {
  const rootClassName = cn(
    s.root,
    {
      [s.lg]: size === "lg",
      [s.xl]: size === "xl",
    },
    className
  )

  const componentsMap: {
    [P in Variant]: React.ComponentType<any> | string
  } = {
    body: "div",
  }

  const Component:
    | JSXElementConstructor<any>
    | React.ReactElement<any>
    | React.ComponentType<any>
    | string = componentsMap![variant!]

  const htmlContentProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {}

  return (
    <Component className={rootClassName} {...htmlContentProps}>
      {children}
    </Component>
  )
}

export default Text
