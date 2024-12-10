"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { SearchBar } from "./search-bar";
import { MobileNav } from "./mobile-nav";
import { TeamsDropdown } from "./teams-dropdown";

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-header-border bg-header-bg/95 backdrop-blur supports-[backdrop-filter]:bg-header-bg/75">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo and Main Navigation */}
        <div className="flex items-center gap-8">
          {/* Hide logo and navigation on mobile width or when the mobile nav is open */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-lg font-bold text-primary transition-colors hover:text-primary/90"
            >
              <Image
                src="/assets/logo/Logo-minimal.png"
                alt="FeelSports Logo"
                width={120}
                height={40}
                className="object-contain md:w-[100px] md:h-[30px] lg:w-[120px] lg:h-[40px]"
                priority
              />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/local-news"
                className="relative text-foreground/90 transition-colors hover:text-foreground after:absolute after:bottom-[-1.5rem] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100"
              >
                أخبار محلية
              </Link>
              <Link
                href="/international-news"
                className="relative text-foreground/90 transition-colors hover:text-foreground after:absolute after:bottom-[-1.5rem] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100"
              >
                أخبار عالمية
              </Link>
              <Link
                href="/transfers"
                className="relative text-foreground/90 transition-colors hover:text-foreground after:absolute after:bottom-[-1.5rem] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100"
              >
                الانتقالات
              </Link>
              <TeamsDropdown />
            </nav>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block w-[300px]">
            <SearchBar />
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden h-6 w-px bg-border md:block" />
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
        </div>
      </div>
    </header>
  );
}
