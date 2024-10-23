import { ModeToggle } from "./toogle";
import { IoMenuSharp } from "react-icons/io5";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Image from "next/image";
import myImage from "../../public/images/Rao Hamza Tariq.png" 
import React, { Component } from 'react';
import "@/components/componentsStyles/navbar.css"

import Link from "next/link"
 
import { cn } from "../lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Card } from "./ui/card";


const Navbar = () => {
  return (
    <Card className='navbar'>
    <div className="shadow-navbar">
    <div className='mobile-navbar'>

<div className="divi">
<h3 className="">BI Structure</h3>
<div className="sheet-div">
    <Sheet>
<SheetTrigger asChild>
  <Button variant="outline" className="p-2"><IoMenuSharp/></Button>
</SheetTrigger>
<SheetContent>
  <h1 className="logo-mobile">BI Structure</h1>
  <Command> 
<CommandList>
<CommandGroup className="mt-5">
<Link href={"/"}><CommandItem className="mt-3">Home</CommandItem></Link>
<Link href={"/Services"}><CommandItem className="mt-3">Services</CommandItem></Link>
<Link href={"/Portfolio/All"}><CommandItem className="mt-3">Portfolio</CommandItem></Link>
<Link href={"/Contact"}><CommandItem className="mt-3">Contact</CommandItem></Link>
<Link href={"/About"}><CommandItem className="mt-3">About</CommandItem></Link>
</CommandGroup>
</CommandList>
</Command>

</SheetContent>
</Sheet>
</div>


</div>
</div>

    <div className='hidden sm:block mr-28 '>

<div className='divi'>
<h1 className="logo-mobile">BI Structure</h1>

<NavigationMenu>
<NavigationMenuList>
<NavigationMenuItem>
    <Link href="/" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Home
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <Link href="/Contact" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Contact
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <Link href="/About" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        About
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
</NavigationMenuList>
</NavigationMenu>
<ModeToggle/>
</div>


</div>
    </div>
    
    </Card>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"




export default Navbar;
