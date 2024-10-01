"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Logo */}
        <div className="flex gap-3">
          <div className="flex gap-3 items-center">
            <div className="flex items-center space-x-3 border border-gray-300 p-2.5 rounded-[14px] shadow-custom cursor-pointer">
              <img
                src="images/logo-clickup-light.svg"
                alt="ClickUp Logo"
                className="h-6 w-auto"
              />
              <div className="h-7 w-px bg-customGray mx-4"></div>
              <span className="text-customGray text-[10px] font-medium leading-3">
                The everything <br /> app for work.
              </span>
            </div>
          </div>
          {/* Center - Navigation Links (Hidden on small screens) */}
          <div className="hidden lg:block">
            <div className="border border-gray-300 p-[6px] rounded-[14px] shadow-custom">
              <NavigationMenu className="space-x-4">
                <NavigationMenuList className="flex space-x-4">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-customGrayMain text-sm">
                      Product
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink asChild>
                        <Link href="#">Overview</Link>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-customGrayMain text-sm">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink asChild>
                        <Link href="#">By Team</Link>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-customGrayMain text-sm">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink asChild>
                        <Link href="#">Blog</Link>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="text-customGrayMain text-sm">
                        Pricing
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="text-customGrayMain text-sm mr-3"
                      >
                        Enterprise
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>

        {/* Right Side - Contact and Authentication */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#"
            className="text-customGrayMain text-sm hover:bg-gray-100 border border-gray-300 p-2.5 rounded-[14px] shadow-custom cursor-pointer"
          >
            Contact Sales
          </Link>
          <div className="border border-gray-300 px-1 py-2 rounded-[14px] shadow-custom cursor-pointer">
            <Link href="#" className="text-gray-600 hover:text-gray-900 mx-3">
              Log In
            </Link>
            <Link
              href="#"
              className="bg-custom-gradient text-white py-2 px-4 rounded-[12px] hover:from-purple-600 hover:to-blue-600"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t mt-2">
          <div className="p-4">
            <ul className="space-y-4">
              <li>
                <Link href="#" className="block text-customGrayMain text-sm">
                  Product
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-customGrayMain text-sm">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-customGrayMain text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-customGrayMain text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-customGrayMain text-sm">
                  Enterprise
                </Link>
              </li>
            </ul>
            <div className="mt-4 space-y-4">
              <Link
                href="#"
                className="block text-customGrayMain text-sm hover:bg-gray-100 border border-gray-300 p-2.5 rounded-[14px] shadow-custom"
              >
                Contact Sales
              </Link>
              <div className="flex justify-between border border-gray-300 px-1 py-2 rounded-[14px] shadow-custom">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 mx-3"
                >
                  Log In
                </Link>
                <Link
                  href="#"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-[12px] hover:from-purple-600 hover:to-blue-600"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
