"use client"

import Brain from "../../components/brain";
import { motion, useInView, useScroll } from "framer-motion"
import Image from "next/image"
import { useRef } from "react";


const AboutPage = () => {

    const containerRef = useRef()

    const { scrollYProgress } = useScroll({ container: containerRef})
    const skillRef = useRef()
    const isSkillRefInview = useInView(skillRef, { margin: "-100px"})
    const experienceRef = useRef()
    const isExperienceRefInView = useInView( experienceRef, { margin: "-100px"})

    const skills = [ "HTML", "CSS",  "JavaScript", "ReactJS", "Redux", "TailwindCSS", "Next.js", "Framer Moition",
                    "Node.js", "Express", "MongoDB", "Prisma", "Zustand", "TypeScript"]

  return (
    <motion.div
        className=" h-[calc(100vh-4rem)]"
        initial={{ y: "-200vh"}}
        animate={{y: "0%" }}
        transition={{duration: 1}}
    >
        {/* CONTAINER */}
        <div className=" h-full overflow-y-scroll lg:flex justify-between p-2 lg:p-0 lg:pl-[10vw] gap-x-5" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', '&::-webkit-scrollbar': { display: 'none' } }} ref={containerRef}>
            {/* TEXT CONTAINER */}
            {/* p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 */}
            <div className="  flex flex-col gap-32 w-full lg:w-1/2 pt-24">
                {/* BIOGRAPHY CONTAINER */} 
                <div className=" flex flex-col gap-12 justify-center">
                    {/* BIOGRAPHY IMAGE */}
                    <Image 
                        src= "/bio.jpg"
                        alt=""
                        width={112}
                        height={112}
                        className=" w-28 h-28 rounded-full object-cover"
                    />
                    {/* BIOGRAPHY TITLE */}
                    <h1 className=" font-bold text-2xl">BIOGRAPHY</h1>
                    {/* BIOGRAPHY DESC */}
                    <p className="text-lg">
                        A TYBSC CS student  who loves to learn new technologies and build innovative projects. 
                        I have created many projects including two full stack(MERN) major project and 
                        Currently studying Next.js along with TypeScript and Framer motion to elevate  my skills in web development.
                    </p>
                    {/* BIOGRAPHY QUOTE */}
                    <span className="italic">
                        Learn -&gt; Build -&gt; Create -&gt; Repeat
                    </span>
                    {/* BIOGRAPHY SCROLL SVG */}
                    <motion.svg
                        initial={{ opacity: 0.2, y:0}}
                        animate={{ opacity: 1, y: "10px"}}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut"}}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                    >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                    </motion.svg>
                </div>
                {/* SKILLS CONTAINER */}
                <div className=" flex flex-col gap-12 justify-center" ref={skillRef}>
                    {/* SKILL TITLE */}
                    <motion.h1
                        initial={{x: "-300px"}}
                        animate={isSkillRefInview ? { x:0} : {}}
                        transition={{delay: 0.2}}
                        className=" font-bold text-2xl"
                    >
                        SKILLS
                    </motion.h1>
                    {/* SKILL LIST */}
                    <motion.div
                        initial={{x: "-300px"}}
                        animate={isSkillRefInview ? { x:0} : {}}
                        className=" flex gap-4 flex-wrap"
                    >
                        {
                            skills.map( (skill, index) => (
                                <motion.div
                                    initial={{x: 0}}
                                    whileHover={{
                                        scale: 1.2,
                                        x: [0, -5, 5, 0],
                                        y: [0, -8, -8, -10],
                                        transition: { duration: 0.8 },
                                    }}  
                                key={index} className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:font-semibold hover:text-black">
                                    {skill}
                                </motion.div>
                            ))
                        }
                    </motion.div>
                    {/* SKILL SCROLL SVG */}
                    <motion.svg
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: "10px" }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                    </motion.svg>
                    
                </div>
                {/* EXPERIENCE CONTAINER */}
                <div 
                        className=" flex flex-col gap-12 justify-center pb-48"
                        ref={experienceRef}
                    >
                        {/* EXPERIENCE TITLE */}
                        <motion.h1
                            initial={{ x: "-300px"}}
                            animate={isExperienceRefInView ? {x: "0"} : {}}
                            transition={{delay: 0.2}}
                            className=" font-bold text-2xl"
                        >
                            TIMELINE
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                        initial={{ x: "-300px" }}
                        animate={isExperienceRefInView ? { x: "0" } : {}}
                        className=""
                        >
                        {/* EXPERIENCE LIST ITEM */}
                        <div className="flex justify-between h-48">
                            {/* LEFT */}
                            <div className="w-1/3 flex flex-col">
                            {/* JOB TITLE */}
                            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                Next.Js
                            </div>
                            {/* JOB DESC */}
                            <div className="p-3 text-sm italic">
                                Learning Next.js and TypeScript{" "}
                            </div>
                            {/* JOB DATE */}
                            <div className="p-3 text-red-400 text-sm font-semibold">
                                Dec 2023 - Present
                            </div>
                            {/* JOB COMPANY */}
                            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                Next-13 &gt;
                            </div>
                            </div>
                            {/* CENTER */}
                            <div className="w-1/6 flex justify-center">
                            {/* LINE */}
                            <div className="w-1 h-full bg-gray-600 relative">
                                {/* LINE CIRCLE */}
                                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                            </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/3 "></div>
                        </div>
                        {/* EXPERIENCE LIST ITEM */}
                        <div className="flex justify-between h-48">
                            {/* LEFT */}
                            <div className="w-1/3 "></div>
                            {/* CENTER */}
                            <div className="w-1/6 flex justify-center">
                            {/* LINE */}
                            <div className="w-1 h-full bg-gray-600  relative">
                                {/* LINE CIRCLE */}
                                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-1/2"></div>
                            </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/3 ">
                            {/* JOB TITLE */}
                            <div href={"https://drive.google.com/file/d/1FM_h2ya6Q656zOp_piKTVWYue5l3xjrF/view?usp=sharings"} className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                LiveVista
                            </div>
                            {/* JOB DESC */}
                            <div className="p-3 text-sm italic">
                                A Live Streaming Website providing various facilities.{" "}
                            </div>
                            {/* JOB DATE */}
                            <div className="p-3 text-red-400 text-sm font-semibold">
                                Dec 2023 - Jan 2024{" "}
                            </div>
                            {/* JOB COMPANY */}
                            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                NextJs & TypeScript
                            </div>
                            </div>
                        </div>
                        {/* EXPERIENCE LIST ITEM */}
                        <div className="flex justify-between h-48">
                            {/* LEFT */}
                            <div className="w-1/3 ">
                            {/* JOB TITLE */}
                            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                StudyNotion{" "}
                            </div>
                            {/* JOB DESC */}
                            <div className="p-3 text-sm italic">
                                An EdTech platform for purchase various courses.{" "}
                            </div>
                            {/* JOB DATE */}
                            <div className="p-3 text-red-400 text-sm font-semibold">
                                Sep 2023 - Dec 2023 {" "}
                            </div>
                            {/* JOB COMPANY */}
                            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                MERN stack
                            </div>
                            </div>
                            {/* CENTER */}
                            <div className="w-1/6 flex justify-center">
                            {/* LINE */}
                            <div className="w-1 h-full bg-gray-600  relative">
                                {/* LINE CIRCLE */}
                                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-1/2"></div>
                            </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/3 "></div>
                        </div>
                        {/* EXPERIENCE LIST ITEM */}
                        <div className="flex justify-between h-48">
                            {/* LEFT */}
                            <div className="w-1/3 "></div>
                            {/* CENTER */}
                            <div className="w-1/6 flex justify-center">
                            {/* LINE */}
                            <div className="w-1 h-full bg-gray-600  relative">
                                {/* LINE CIRCLE */}
                                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-1/2"></div>
                            </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/3 ">
                            {/* JOB TITLE */}
                            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                AniVerse
                            </div>
                            {/* JOB DESC */}
                            <div className="p-3 text-sm italic">
                                A Anime Website for adding rating and reviews.{" "}
                            </div>
                            {/* JOB DATE */}
                            <div className="p-3 text-red-400 text-sm font-semibold">
                                Jul 2023 - Sep 2023{" "}
                            </div>
                            {/* JOB COMPANY */}
                            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                MERN Stack
                            </div>
                            </div>
                        </div>
                        {/* EXPERIENCE LIST ITEM */}
                        <div className="flex justify-between h-48">
                            {/* LEFT */}
                            <div className="w-1/3 ">
                            {/* JOB TITLE */}
                            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                Learning Web Development{" "}
                            </div>
                            {/* JOB DESC */}
                            <div className="p-3 text-sm italic">
                                Learning Web Development from Udemy and Love Babar&apos;s Dot batch.{" "}
                            </div>
                            {/* JOB DATE */}
                            <div className="p-3 text-red-400 text-sm font-semibold">
                                Oct 2022 - Jun 2023 {" "}
                            </div>
                            {/* JOB COMPANY */}
                            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                MERN stack
                            </div>
                            </div>
                            {/* CENTER */}
                            <div className="w-1/6 flex justify-center">
                            {/* LINE */}
                            <div className="w-1 h-1/2 bg-gray-600  relative">
                                {/* LINE CIRCLE */}
                                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 bottom-0"></div>
                            </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/3 "></div>
                        </div>
                        </motion.div>
                </div>
            </div>
            {/* SVG CONTAINER */}
            <div className=" hidden lg:block w-full sticky top-0 right-0 z-30 xl:w-1/2 ">
                <Brain scrollYProgress={scrollYProgress} />
            </div>
        </div>
    </motion.div>
  )
}

export default AboutPage