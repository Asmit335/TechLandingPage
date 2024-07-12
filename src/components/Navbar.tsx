import { AlignJustify, Apple } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigatorBar } from "@/components/NavigartorBar";

export default function Navbar() {
  return (
    <section className="container mx-auto p-4">
      <nav className="flex justify-between items-center py-3 text-black font-bold">
        {/* Logo */}
        <div className="text-xl">
          <Apple />
        </div>

        <div>
          <NavigatorBar />
        </div>
        {/* menu for small size screen */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Open Menu">
                <AlignJustify />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="flex flex-col space-y-4 mt-4">
                  <Link href="/">Sign In</Link>
                  <Link href="/">Get Started</Link>
                  <Link href="/">Template</Link>
                  <Link href="/">Pricing</Link>
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex space-x-4">
          <Button className="text-md" variant="ghost">
            Sign In
          </Button>
          <Button className="bg-black text-white rounded-md font-bold transition-transform transform hover:scale-105">
            Get Started
          </Button>
        </div>
      </nav>
    </section>
  );
}
