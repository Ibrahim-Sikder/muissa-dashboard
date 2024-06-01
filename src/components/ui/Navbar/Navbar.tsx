"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from "next/image";
import { Button } from "@mui/material";
import Container from "../HomePage/Container/Container";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Product", href: "#product", current: true },
  { name: "Pricing", href: "#pricing", current: false },
  { name: "Features", href: "#features", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="navbar z-50">
      <>
        <Container className="mx-auto max-w-7xl px-6 md:py-2 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              {/* LOGO */}

              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <Image
                    className="block h-16 w-16 lg:hidden rounded-full"
                    src="/assets/logo/logo.jpg"
                    alt="paidin-logo"
                    width={100}
                    height={100}
                  />
                  <Image
                    className="hidden h-full w-full lg:block rounded-full"
                    src="/assets/logo/logo.jpg"
                    alt="paidin-logo"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>

              {/* LINKS */}
            </div>
            <div className="hidden lg:block ml-20">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? " text-black hover:opacity-75"
                        : "hover:text-black hover:opacity-75",
                      "px-3 py-4 text-lg font-normal text-black space-links"
                    )}
                    aria-current={item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            {/* BUTTONS */}
            <div className="hidden lg:block">
              <Button variant="outlined" className="mr-5">
                <Link href="/login">Get Started</Link>
              </Button>
            </div>
            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </Container>
      </>
    </div>
  );
};

export default Navbar;
