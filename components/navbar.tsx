"use client";

import { useState, useEffect, useRef, createContext, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";

const NavContext = createContext<{ setIsOpen: (open: boolean) => void }>({
  setIsOpen: () => {},
});

const useNavContext = () => useContext(NavContext);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <NavContext.Provider value={{ setIsOpen }}>
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <Logo />
              <Link href="/" className="text-2xl font-bold mb-4 block mt-3">
                <span className="text-gradient">Protech</span> AV
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/portfolio">Portfolio</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <Link href={"/contact"}>
                <Button className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-dark))] text-black">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div ref={menuRef} className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <NavLink href="/services">Services</NavLink>
                <NavLink href="/portfolio">Portfolio</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                <Link href={"/contact"} onClick={() => setIsOpen(false)}>
                  <Button className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-dark))] text-black w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </NavContext.Provider>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const { setIsOpen } = useNavContext();
  
  return (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className="text-gray-300 hover:text-[hsl(var(--gold))] transition-colors"
    >
      {children}
    </Link>
  );
}