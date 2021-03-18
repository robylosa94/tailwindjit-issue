import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import s from "./Item.module.scss";

interface Props {
  className?: string
}

const Item: FC<Props> = ({ className }) => {
  const rootClassName = cn(s.root, className)

  return (
    <Link href="#">
      <a className={rootClassName}>
        <div className={s.image}></div>
        <div className={s.caption}>
          <h3 className={s.title}>Card title</h3>
        </div>
      </a>
    </Link>
  )
}

export default Item
