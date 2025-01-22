import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold mb-4 block">
              <span className="text-gradient">Protech</span> AV
            </Link>
            <p className="text-gray-400">
              Professional audio visual and IT solutions since 2005.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services/video-production" className="hover:text-[hsl(var(--gold))]">
                  Video Production
                </Link>
              </li>
              <li>
                <Link href="/services/sound-system" className="hover:text-[hsl(var(--gold))]">
                  Sound System Hire
                </Link>
              </li>
              <li>
                <Link href="/services/live-streaming" className="hover:text-[hsl(var(--gold))]">
                  Live Streaming
                </Link>
              </li>
              <li>
                <Link href="/services/it-services" className="hover:text-[hsl(var(--gold))]">
                  IT Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-[hsl(var(--gold))]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[hsl(var(--gold))]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[hsl(var(--gold))]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[hsl(var(--gold))]">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--gold))]">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--gold))]">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--gold))]">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[hsl(var(--gold))]">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Protech AV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}