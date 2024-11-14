"use client";

import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { menuItems } from "../_routes/NavBarRoutes";

interface SubItem {
  name: string;
  description: string;
  link: string;
}

interface MenuItem {
  name: string;
  link: string;
  subItems?: SubItem[];
}

interface NavBarProps {
  onHoverStateChange?: (isHovered: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onHoverStateChange = () => {} }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const submenuTimeoutRef = useRef<NodeJS.Timeout>();

  const clearTimeouts = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
    }
  };

  const handleMouseEnter = useCallback(
    (itemName: string) => {
      clearTimeouts();

      const menuItem = menuItems.find((item) => item.name === itemName);
      if (menuItem?.subItems) {
        if (hoveredItem && hoveredItem !== itemName) {
          setIsTransitioning(true);
          timeoutRef.current = setTimeout(() => {
            setHoveredItem(itemName);
            setIsTransitioning(false);
          }, 150);
        } else {
          setHoveredItem(itemName);
        }
        onHoverStateChange(true);
      }
    },
    [hoveredItem, onHoverStateChange]
  );

  const handleMouseLeave = useCallback(() => {
    clearTimeouts();
    submenuTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(true);
      timeoutRef.current = setTimeout(() => {
        setHoveredItem(null);
        setIsTransitioning(false);
        onHoverStateChange(false);
      }, 150);
    }, 100);
  }, [onHoverStateChange]);

  const cancelHideSubmenu = useCallback(() => {
    clearTimeouts();
  }, []);

  const renderSubmenu = (item: MenuItem) => {
    if (item.name === "Products") {
      return (
        <div className="flex gap-4">
          {/* Products submenu layout */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {item.subItems?.slice(0, 2).map((subItem: SubItem) => (
              <Link
                href={subItem.link}
                key={subItem.name}
                className="block group"
              >
                <Card className="bg-zinc-900 border border-white/10 hover:border-[#00beef]/50 transition-all duration-200 h-[260px]">
                  <CardHeader className="h-full">
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <CardTitle className="text-xl text-white/90 group-hover:text-[#00beef] transition-colors duration-200 mb-2">
                          {subItem.name}
                        </CardTitle>
                        <CardDescription className="text-white/50 group-hover:text-white/70 transition-colors duration-200 text-sm">
                          {subItem.description}
                        </CardDescription>
                      </div>
                      <div className="pt-4">
                        <Button
                          variant="ghost"
                          className="px-0 text-white/70 hover:text-[#00beef] hover:bg-transparent p-0 h-auto font-normal"
                        >
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="w-[400px] flex flex-col gap-4">
            {item.subItems?.slice(2).map((subItem: SubItem) => (
              <Link
                href={subItem.link}
                key={subItem.name}
                className="block group"
              >
                <Card className="bg-zinc-900 border border-white/10 hover:border-[#00beef]/50 transition-all duration-200 h-[124px]">
                  <CardHeader>
                    <CardTitle className="text-white/90 group-hover:text-[#00beef] transition-colors duration-200">
                      {subItem.name}
                    </CardTitle>
                    <CardDescription className="text-white/50 group-hover:text-white/70 transition-colors duration-200">
                      {subItem.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      );
    } else if (item.name === "Solutions") {
      return (
        <div className="grid grid-cols-3 gap-4">
          {item.subItems?.map((subItem: SubItem) => (
            <Link
              href={subItem.link}
              key={subItem.name}
              className="block group"
            >
              <Card className="bg-zinc-900 border border-white/10 hover:border-[#00beef]/50 transition-all duration-200 h-[260px]">
                <CardHeader className="h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <CardTitle className="text-xl text-white/90 group-hover:text-[#00beef] transition-colors duration-200 mb-2">
                        {subItem.name}
                      </CardTitle>
                      <CardDescription className="text-white/50 group-hover:text-white/70 transition-colors duration-200 text-sm">
                        {subItem.description}
                      </CardDescription>
                    </div>
                    <div className="pt-4">
                      <Button
                        variant="ghost"
                        className="px-0 text-white/70 hover:text-[#00beef] hover:bg-transparent p-0 h-auto font-normal"
                      >
                        Learn more
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      );
    } else if (item.name === "Company") {
      const verticalItems = item.subItems?.slice(0, 3) || []; // Blog, README, Brand
      const cardItems = item.subItems?.slice(3) || []; // About, Careers

      return (
        <div className="flex gap-6">
          {/* Left side - vertical stack */}
          <div className="w-[280px] flex flex-col gap-4">
            {verticalItems.map((subItem: SubItem) => (
              <Link
                key={subItem.name}
                href={subItem.link}
                className="block group"
              >
                <Card className="bg-zinc-900 border border-white/10 hover:border-[#00beef]/50 transition-all duration-200">
                  <CardHeader className="flex flex-row items-center p-3 space-y-0">
                    <div className="flex-1">
                      <span className="text-white/90 text-[17px] font-medium group-hover:text-[#00beef] transition-colors duration-200 mr-3">
                        {subItem.name}
                      </span>
                      <span className="text-white/50 text-[15px] group-hover:text-white/70 transition-colors duration-200">
                        {subItem.description}
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          {/* Right side - cards that fill remaining height */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {cardItems.map((subItem: SubItem) => (
              <Link
                href={subItem.link}
                key={subItem.name}
                className="block group"
              >
                <Card
                  className={`bg-zinc-900 border border-white/10 hover:border-[#00beef]/50 transition-all duration-200 h-[184px]`}
                >
                  <CardHeader className="h-full">
                    <div className="flex flex-col h-full">
                      <CardTitle className="text-xl text-white/90 group-hover:text-[#00beef] transition-colors duration-200 mb-2">
                        {subItem.name}
                      </CardTitle>
                      <CardDescription className="text-white/50 group-hover:text-white/70 transition-colors duration-200">
                        {subItem.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-1 gap-2">
          {item.subItems?.map((subItem: SubItem) => (
            <Link
              key={subItem.name}
              href={subItem.link}
              className="block group"
            >
              <div className="flex flex-col gap-1 px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-200">
                <span className="text-white/90 text-[17px] font-medium group-hover:text-[#00beef] transition-colors duration-200">
                  {subItem.name}
                </span>
                <span className="text-white/50 text-[15px] group-hover:text-white/70 transition-colors duration-200">
                  {subItem.description}
                </span>
              </div>
            </Link>
          ))}
        </div>
      );
    }
  };

  return (
    <nav className="fixed top-[20px] left-1/2 transform -translate-x-1/2 z-40 flex justify-center w-[98%] max-w-[1100px]">
      <header className="relative z-40 flex flex-col w-full bg-black/[0.3] backdrop-blur-md border border-white/10 rounded-[20px] overflow-visible ">
        <div className="flex w-full items-center h-[67px] rounded-[20px] px-8">
          <div className="flex items-center justify-between w-full gap-8">
            {/* Logo */}
            <div className="cursor-pointer transition-opacity hover:opacity-80">
              <Link
                className="flex items-center justify-center w-[38px] h-[38px]"
                href="/"
              >
                <Image
                  src="/logo-white.png"
                  alt="logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-row items-center justify-center flex-1 gap-12">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="relative flex text-medium whitespace-nowrap items-center"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="text-white/70 text-[17px] inline-flex items-center no-underline hover:text-white transition-colors duration-200 font-medium"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && hoveredItem === item.name && (
                    <div
                      className="absolute left-0 w-full h-4 bottom-0 translate-y-full"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                    />
                  )}
                </li>
              ))}
            </ul>

            {/* Login and Sign-up buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                className="h-9 px-3 text-base font-medium text-white border border-white/20 hover:border-[#00beef] hover:text-[#00beef] hover:bg-transparent transition-all duration-200 rounded-lg group"
              >
                <Link href="/login">
                  <div className="flex items-center">
                    <span>Log in</span>
                    <div className="ml-2 px-2 py-0.5 text-sm rounded-md bg-white/10 group-hover:bg-[#00beef]/10 transition-colors duration-200">
                      L
                    </div>
                  </div>
                </Link>
              </Button>
              <Link href="/signup">
                <Button className="h-9 px-3 text-base font-medium bg-white text-black border border-transparent hover:bg-transparent hover:text-[#00beef] hover:border-[#00beef] transition-all duration-200 rounded-lg">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Submenu */}
        {menuItems.map((item) =>
          item.subItems && hoveredItem === item.name ? (
            <div
              key={item.name}
              className={`absolute left-0 w-full top-[calc(100%-1px)] pt-4 transition-all duration-300 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
              onMouseEnter={cancelHideSubmenu}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-full bg-black/80 backdrop-blur-md border border-white/10 rounded-[20px]">
                <div className="p-4">{renderSubmenu(item)}</div>
              </div>
            </div>
          ) : null
        )}
      </header>
    </nav>
  );
};

export default NavBar;
