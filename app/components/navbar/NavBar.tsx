"use client";
import Link from "next/link";
import { useState } from "react";
import NavBarItems from "./NavBarItems";
import NavItem from "./NavItem";
export default function NavBar() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    // remove bg pink
    // add bg colour/style when selected
    <nav className="flex flex-col md:flex-row w-screen sticky top-0 p-3 shadow-xl z-50 items-center md:justify-between place-content-between bg-brand-white">
      {/* visible */}
      <div className="flex items-center justify-between w-full md:w-fit px-4">
        <Link href="/" className="flex items-center justify-between gap-2">
          {/* continue here... */}
          {/* individual link component */}
          <img
            alt="logo"
            className="flex justify-self-center h-20"
            src="/assets/logo.webp" // TODO add logo to public > assets
          ></img>
        </Link>
        {/* make own styled button and add smooth transition */}
        <button
          className={`md:hidden mt-2 text-3xl`} // ADD md:hidden
          onClick={() => setNavBarOpen(!navBarOpen)}
        >
          {navBarOpen ? "x" : "☰"}
        </button>
      </div>

      <div
        className={`flex-col md:flex md:flex-row gap-2 items-center text-lg md:text-xl 
          ${navBarOpen ? "flex" : "hidden"}  // refactor flex?
          `}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setNavBarOpen(false);
        }}
      >
        {NavBarItems.map((item) => {
          return (
            //
            <NavItem label={item.title} href={item.url} key={item.title} />
          );
        })}
      </div>
    </nav>
  );
}
