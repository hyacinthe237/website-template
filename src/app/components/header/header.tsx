"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function HeaderComponent () {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className="w-full bg-black fixed top-0 left-0 right-0 z-10">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        {/** LOGO */}
                        <Link href="/">
                            <h2 className="text-2xl text-cyan-600 font-bold">LOGO</h2>
                        </Link>

                        {/** HAMBURGER BUTTON FOR MOBILE */}
                        <div className="md:hidden">
                            <button 
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <Image src="/close.png" width={30} height={30} alt="logo" />
                                ) : (
                                    <Image src="/hamburger-menu.png" width={30} height={30} alt="logo" className="focus:border-none active:border-none" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`flex-1 justify-self-end pb-3 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
                    <ul className="h-screen md:h-auto items-center justify-center md:flex">
                        <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 mb:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                            <a href="#about" onClick={() => setNavbar(!navbar)}>About</a>
                        </li>
                        <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 mb:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                            <a href="#blog" onClick={() => setNavbar(!navbar)}>Blogs</a>
                        </li>
                        <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 mb:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                            <a href="#contact" onClick={() => setNavbar(!navbar)}>Contact</a>
                        </li>
                        <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 mb:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                            <a href="#projects" onClick={() => setNavbar(!navbar)}>Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;