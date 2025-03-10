import React from "react"
import Image from "next/image"
import Link from "next/link"
// import { logo } from "@/assets"
import { cn } from "@/utils/cn"
import { logo } from "../../../public/assets"

type Props = {
  className?: string
  horizontal?: true
}

const Logo = ({ className }: Props) => {
  return (
    <Link href={"/"}>
      <div className="flex flex-row-reverse gap-3 items-center sm:flex-row">
        <Image src={logo} alt="logo" className={cn("h-[48px] w-[40px]", className)} />
        <div className="text-2xl font-bold">وشل</div>
      </div>
    </Link>
  )
}

export default Logo
