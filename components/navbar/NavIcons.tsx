import Link from "next/link";

type NavIconsProps = {
  route: string,
  children: React.ReactNode
}

export default function page ({ route, children }: NavIconsProps) {
  return (
    <Link href={route} className="text-indigo-100 cursor-pointer">
      {children}
    </Link>
  )
}