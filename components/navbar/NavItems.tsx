import Link from "next/link";

type NavItemsProps = {
  route: string,
  content: string
};

const NavItems = ({ route, content }: NavItemsProps) => {
  return (
    <li className="relative">
      <Link
        href={route}
        className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-indigo-200 after:transition-all after:duration-300 hover:after:w-full"
      >
        {content}
      </Link>
    </li>
  );
};

export default NavItems;
