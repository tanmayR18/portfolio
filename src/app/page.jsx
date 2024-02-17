"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const Homepage = () => {
  return (
    <motion.div
    className=" h-full flex flex-col lg:flex-row px-4 sm:px-0 md:px-12 lg:px-20 xl:px-40 py-4 md:py-0"
    initial={{y: "-200vh"}}
    animate={{y:"0%", transition:{duration:1}}}
    >
       {/* IMAGE CONTAINER */}
       <div className=" h-1/2 lg:h-full lg:w-1/2 relative">
            <Image src={"/hero.png"} alt="" fill className=" object-contain" />
       </div>
       {/* TEXT CONTAINER */}
       <div className=" lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
            {/* TITLE */}
            <h1 className=" text-4xl md:text-6xl font-bold">
                Elevating User Experiences, Shaping Tomorrow's Web.
            </h1>
            <p className=" md:text-xl">
            Step into the realm of innovation where code meets creativity. As a MERN stack developer, I merge cutting-edge technology with captivating design to craft seamless digital experiences. Explore my portfolio and witness the future of web development unfold.
            </p>
            {/* BUTTONS */}
            <div className=" flex gap-4 ">
                <button className=" p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
                <button className=" p-4 rounded-lg ring-1 ring-black">Contact Me</button>
            </div>
       </div>

    </motion.div>
  )
};

export default Homepage;
