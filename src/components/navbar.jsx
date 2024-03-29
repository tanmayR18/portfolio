"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavLink from "./navLink"
import { motion } from "framer-motion"

const links = [
    { url: "/", title: "Home"},
    { url: "/about", title: "About"},
    { url: "/portfolio", title: "Portfolio"},
    { url: "/contact", title: "Contact"},
]


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45, 
            backgroundColor: "rgb(255,255,255)",
        }
    }

    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0
        }
    }

    const bottomVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)",
        }
    }

    const listVariants = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0
        },
        opened: {
            x: 0,
            opacity: 1
        }
    }

  return (
    <nav className=" w-11/12 h-16 lg:w-10/12 mx-auto flex items-center justify-between text-xl">
        {/* LINK */}
        <div className=" hidden md:flex gap-4 ">
            {
                links.map( link => (
                    <NavLink link={link} key={link.title} />
                ))
            }
        </div>
        {/* LOGO */}
        <div className=" md:hidden lg:flex">
            <Link
            href={"/"}
            className=" text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
            >
                <span className=" text-white mr-1 ">
                    Tanmay
                </span>
                <span className=" w-12 h-8 rounded bg-white text-black flex items-center justify-center">
                    Rane
                </span>
            </Link>
        </div>
        {/* SOCIAL */}
        <div className=" hidden md:flex gap-4">
            <Link target="_blank" className=" hover:scale-150 transition-all duration-300" href="https://github.com/tanmayR18">
                <Image src="/github.png" alt="" width={24} height={24} />
            </Link>
            {/* <Link href="/">
                <Image src="/dribbble.png" alt="" width={24} height={24} />
            </Link> */}
            <Link target="_blank" className=" hover:scale-150 transition-all duration-300" href="https://www.instagram.com/__tanmay18__/">
                <Image src="/instagram.png" alt="" width={24} height={24} />
            </Link>
            <Link target="_blank" className=" hover:scale-150 transition-all duration-300" href="https://www.facebook.com/tanmay.rane.39904/">
                <Image src="/facebook.png" alt="" width={24} height={24} />
            </Link>
            {/* <Link href="/">
                <Image src="/pinterest.png" alt="" width={24} height={24} />
            </Link> */}
            <Link target="_blank" className=" hover:scale-150 transition-all duration-300" href="https://www.linkedin.com/in/tanmay-rane-852bba229/">
                <Image src="/linkedin.png" alt="" width={24} height={24} />
            </Link>
        </div>
        {/* RESPONSIVE MENU */}
        <div className=" md:hidden">
            {/* MENU BUTTON */}
            <button
            className=" w-10 h-8 flex flex-col justify-between z-[90] relative"
            onClick={ () => setOpen( prev => !prev)}
            >
                <motion.div 
                variants={topVariants}
                animate={open ? 'opened' : 'closed'}
                className=" w-10 h-1 bg-black origin-left"
                />
                <motion.div 
                variants={centerVariants}
                animate={open ? 'opened' : 'closed'}
                className=" w-10 h-1 bg-black "
                />
                <motion.div 
                variants={bottomVariants}
                animate={open ? 'opened' : 'closed'}
                className=" w-10 h-1 bg-black origin-left"
                />
            </button>
            {/* MENU LIST */}
            {
                open && (
                    <motion.div
                    variants={listVariants}
                    initial="closed"
                    animate="opened"
                    className=" absolute top-0 left-0 w-screen  h-screen bg-black text-white  flex flex-col items-center justify-center gap-8 text-4xl z-[80]"
                    >
                        {
                            links.map( link => (
                                <motion.div 
                                className=""
                                variants={listItemVariants} key={link.title}
                                onClick={ () => setOpen( prev => !prev )}
                                >
                                    <Link href={link.url}> {link.title} </Link>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar
