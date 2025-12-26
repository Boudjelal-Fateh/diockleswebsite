"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
const navLinks = [
  { label: "About", href: "about" },
  { label: "Ecosystem", href: "ecosystem" },
  { label: "Portfolio", href: "portfolio" },
  { label: "Insights", href: "insights" },
  { label: "Contact", href: "contact" },
];

function NavBar() {
  return (
    <header className=" fixed top-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={134} height={134} />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-neutral-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-neutral-300 hover:text-white"
            >
              <Menu size={22} />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-neutral-950 p-5 w-full border-neutral-800"
          >
            <nav className="mt-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg text-neutral-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default NavBar;
