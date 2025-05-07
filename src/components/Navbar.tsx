import React, {useEffect, useState} from 'react'
import {Bars3Icon} from "@heroicons/react/24/solid";
import Image from "next/image";
import {ShoppingCartIcon, UserCircleIcon} from "@heroicons/react/24/outline";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    return (
        <header className="relative w-full flex flex-row justify-center bg-primary shadow-md">
            <div className="w-full sm:max-w-[1024px] p-[24px]  flex flex-row justify-between items-center ">
                <Bars3Icon onClick={() => toggleMenu()} className="h-6 w-6 sm:hidden  text-accent2"/>
                <Image
                    src="/images/gbLogo.png"
                    alt="gbLogo"
                    width={160}
                    height={44}
                    className="translate-y-[25%]"
                >
                </Image>
                <ul className="hidden sm:flex flex-row space-x-5 ">
                    <li className=" font-bold text-accent">
                        <a href="/">HOME</a>
                    </li>
                    <li className="font-bold text-accent">
                        <a href="/">ABOUT</a>
                    </li>
                    <li className=" font-bold text-accent">
                        <a href="/products">PRODUCTS</a>
                    </li>
                    <li className=" text-accent2">
                        <ShoppingCartIcon className="h-6 w-6  text-accent2"/>
                    </li>
                    <li className=" text-accent2">
                        <UserCircleIcon className="h-6 w-6  text-accent2"/>
                    </li>
                </ul>
                <ShoppingCartIcon className="h-6 w-6 sm:hidden  text-accent2"/>
            </div>

            <div className="absolute sm:hidden h-screen w-full opacity-50 top-23 left-0 bg-darkSecondary !z-[1000]"
                 style={{
                     transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                 }}>
                s
            </div>

            <div className="absolute  sm:hidden h-screen w-2/3 top-23 left-0 bg-primary !z-[1000]"
                 style={{
                     transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                     transition: 'transform 0.1s ease-in-out'
                 }}>
                <ul className="px-[24px] flex flex-col space-y-5 ">
                    <li className=" text-accent2">
                        <UserCircleIcon className="h-6 w-6  text-accent2"/>
                    </li>
                    <li className="font-bold text-accent">
                        <a href="/">HOME</a>
                    </li>
                    <li className="font-bold text-accent">
                        <a href="/">ABOUT</a>
                    </li>
                    <li className=" font-bold text-accent">
                        <a href="/products">PRODUCTS</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
