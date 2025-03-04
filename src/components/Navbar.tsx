"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function useIsLargeScreen() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLargeScreen;
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const isLargeScreen = useIsLargeScreen();

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl px-2 mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <Link href="#skills" scroll={false}>
          <MenuItem setActive={setActive} active={active} item="Skills" />
        </Link>

        {isLargeScreen && (
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="hidden text-sm md:grid md:grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Connectify"
                href="https://algochurn.com"
                src="/connectify.jpg"
                description="A community platform for connecting to health-experts"
              />
              <ProductItem
                title="DevLance"
                href="https://tailwindmasterkit.com"
                src="/devlance.jpg"
                description="A freelance websites for Developers"
              />
              <ProductItem
                title="Bookify"
                href="https://gomoonbeam.com"
                src="/bookify.jpg"
                description="A book reselling platform"
              />
              <ProductItem
                title="YC Directory"
                href="https://userogue.com"
                src="/ycdirectory.png"
                description="Platform to share your Start-Up ideas."
              />
            </div>
          </MenuItem>
        )}

        <Link href={"https://wa.me/8709059331"}>
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </Link>
        <Link href={"/about"}>
          <MenuItem setActive={setActive} active={active} item="About" />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
