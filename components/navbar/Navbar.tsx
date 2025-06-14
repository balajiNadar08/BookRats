"use client";
import Link from "next/link";
import { useState } from "react";
import {
  User,
  LibraryBig,
  Menu,
  Search,
  X,
  ChartNoAxesCombined,
  Award,
  BookOpenText,
  Castle,
} from "lucide-react";
import NavItems from "./NavItems";
import NavIcons from "./NavIcons";
import SidebarItem from "./SidebarItem";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="bg-[#030712] flex justify-between items-center px-4 py-2 lg:px-10">
        <div className="text-3xl font-medium text-indigo-100 cursor-pointer">
          <Link href="/">BookRats</Link>
        </div>

        <ul className="hidden sm:flex gap-8 text-lg text-indigo-100 relative z-50">
          <NavItems route="/trending" content="Trending" />
          <NavItems route="/top-rated" content="Top rated" />
          <NavItems route="/genres" content="Genres" />
          <NavItems route="/about-us" content="About us" />
        </ul>

        <nav>
          <ul className="flex gap-3 lg:gap-6">
            <NavIcons route="\search">
              <Search />
            </NavIcons>
            <NavIcons route="\profile">
              <User />
            </NavIcons>
            <NavIcons route="\personal-library">
              <LibraryBig />
            </NavIcons>
            <li
              onClick={() => setIsOpen(true)}
              className="md:hidden text-indigo-100 cursor-pointer"
            >
              <Menu />
            </li>
          </ul>
        </nav>
      </div>

      {/*  Sidebar */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex justify-end pointer-events-none">
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-50 pointer-events-auto" : "opacity-0"
            }`}
            onClick={() => setIsOpen(false)}
          ></div>

          <div
            className={`relative flex flex-col w-10/12 bg-[#030712] h-screen z-50 transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } pointer-events-auto`}
          >
            <div
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 cursor-pointer text-indigo-100"
            >
              <X className="w-9 h-9" strokeWidth={1.5} />
            </div>

            <ul className="flex flex-col gap-8 pl-[3rem] pt-[13rem] text-indigo-100">
              <SidebarItem route="/trending" title="Trending">
                <ChartNoAxesCombined strokeWidth={1.5} />
              </SidebarItem>
              <SidebarItem route="/top-rated" title="Top rated">
                <Award strokeWidth={1.5} />
              </SidebarItem>
              <SidebarItem route="/genres" title="Genres">
                <BookOpenText strokeWidth={1.5} />
              </SidebarItem>
              <SidebarItem route="/about-us" title="About us">
                <Castle strokeWidth={1.5} />
              </SidebarItem>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;