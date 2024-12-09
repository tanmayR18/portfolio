"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div
    className=" h-[calc(100vh-4rem)] lg:flex-row w-11/12 lg:w-10/12 mx-auto flex flex-col "
    initial={{y: "-200vh"}}
    animate={{y:"0%", transition:{duration:1}}}
    >
       {/* IMAGE CONTAINER */}
       <div className=" h-1/2 lg:h-full lg:w-1/2 relative">
            <Image src={"/hero.png"} alt="" fill className=" object-contain" />
       </div>
       {/* TEXT CONTAINER */}
       <div className=" lg:w-1/2 flex flex-col gap-8 items-center lg:items-start justify-center ">
            {/* TITLE */}
            <h1 className=" text-4xl md:text-6xl font-bold text-left">
            Building <br className=" hidden lg:block"/> the Future of <br className=" hidden lg:block"/> User Interfaces.
            </h1>
            <p className=" md:text-xl">
            Specializing in React & React Native Development to Create Engaging and Intuitive User Interfaces for Web and Mobile Applications.
            </p>
            {/* BUTTONS */}
            <div className=" flex gap-4 self-center">
                <Link href={"/portfolio"} className=" p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</Link>
                <Link href={"/contact"} className=" p-4 rounded-lg ring-1 ring-black">Contact Me</Link>
            </div>
       </div>

    </motion.div>
  );
}
