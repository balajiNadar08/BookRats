import Link from "next/link";

type SidebarItemProps = {
  route: string;
  title: string;
  children: React.ReactNode;
};

const SidebarItem = ({ route, title, children }: SidebarItemProps) => {
  return (
    <li className="text-2xl">
      <Link href={route} className="flex items-center gap-4">
        {children} {title}
      </Link>
    </li>
  );
};

export default SidebarItem;