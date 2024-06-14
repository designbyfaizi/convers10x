"use client";
import React, { useState } from "react";
import SiteLogo from "@/components/SiteLogo";
import MButton from "@/components/MButton";
import Link from "next/link";
import DropdownNav from "./DropdownNav";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <header className="py-4 relative z-10">
      <nav className="conversion-container flex items-center justify-between">
        <SiteLogo />
        <div className="flex p-2 bg-neutral-200/70 dark:bg-neutral-900/50 rounded-full items-center gap-2">
          <Link className="hidden sm:block" href={"/contact"}>
            <MButton>Get in touch</MButton>
          </Link>
          <button
            onClick={() => setDropdownOpen(true)}
            className="aspect-square p-2 bg-neutral-800 rounded-full text-white hover:bg-neutral-700"
          >
            <Lines />
          </button>
        </div>

        <DropdownNav
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />
      </nav>
    </header>
  );
}

const Lines = (props?: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.5 4a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zM2 7.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Header;
