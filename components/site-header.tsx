import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { Input } from "./ui/input"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <div className="mr-4">
              
              <Input
                type="search"
                placeholder={"Search for cars (ex. BMW,Audi,Ford)"}
                className="h-9 md:w-[100px] lg:w-[300px]"
              ></Input>
            </div>
            <Link href={"/"}>
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "secondary",
                })}
              >
                Sign Up
              </div>
            </Link>

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
