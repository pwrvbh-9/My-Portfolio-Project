"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {CiMenuFries} from 'react-icons/ci';

const links = [
    {
        name: 'Home',
        path: '/'
    }, 
    {
        name: 'Resume',
        path: '/resume'
    }, 
    {
        name: 'Projects',
        path: '/projects'
    }, 
    {
        name: 'Contact',
        path: '/contact'
    }, 
]


const MobileNav = () => {

    const pathname = usePathname();

  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-32 mb-40 text-center text-2xl">
            <Link href='/'>
                <h1 className="text-4xl font-semibold">
                <span className="text-accent">&lt;</span>Vaibhav<span className="text-accent">/&gt;</span>
                </h1>
            </Link>
            </div>

            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => (
                    <Link href={link.path} 
                    key={index}
                    className={`${link.path === pathname && "text-accent border-b-2 border-accent"}text-xl capitalize hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                ))}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav