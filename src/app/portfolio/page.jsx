"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const items = [
        {
        id: 1,
        color: "from-red-300 to-blue-300",
        title: "Study Notion",
        desc: "An Ed-tech platform for built using MERN stack where instuctor can upload there course and student can purchase and view the lecture videos. The website is built with the best practice along with authentication and authorization.",
        img: "/studyNotion.png",
        link: "https://study-notion-18.vercel.app/",
        },
        {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "AniVerse",
        desc: "A collection of all the known anime series along with there information and the trailer videos facilating the user/viewers to give rating and review to the anime. The Website let's the user to search there animes and filter out them.",
        img: "/aniVerse.png",
        link: "https://ani-verse-18.vercel.app/",
        },
        {
        id: 3,
        color: "from-violet-300 to-purple-300",
        title: "LiveVista",
        desc: "A Live Streaming website build using Next.js & TypeScript and LiveKit package for failating a seamless streaming of game, blog, podcasts, etc. This website enable the streamer/viewer various functionality such as blocking the viewer, enable chat to followers only, delay chat, etc. ",
        img: "/liveVista.png",
        link: "https://drive.google.com/file/d/1FM_h2ya6Q656zOp_piKTVWYue5l3xjrF/view?usp=sharings",
        },
        {
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "Todo List",
        desc: "A simple full stack Todo application where user can add, remove and edit there todo's. The application comes with a strong validation, error handling and pagination capability.",
        img: "/todoList.png",
        link: "todo-assignment-18.vercel.app",
        },
    ];

const PorfolioPage = () => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref})
    const x = useTransform(scrollYProgress, [0,1], ["0%", "-80%"])
  return (
    // <motion.div
    //     className=" h-full"
    //     initial={{y: "-200vh"}}
    //     animate={{ y: "0%"}}
    //     transition={{ duration: 1}}
    // >
    //     <div className=" h-[600vh] relative" ref={ref}>
    //         <div className=" w-full h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
    //             My Works
    //         </div>
    //         <div className=" sticky top-0 flex h-screen gap-4 items-center overflow-hidden bg-pink-200">
    //             <motion.div  style={{x}} className=" flex" >
    //                 <div className=" h-screen w-screen bg-gradient-to-r from bg-purple-300 to-red-300"></div>
    //                 <div className=" h-screen w-screen flex items-center justify-center bg-gradient-to-r from bg-purple-300 to-red-300">
    //                     {
    //                         items.map(( item) => (
    //                             <div
    //                                 className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
    //                                 key={item.id}
    //                             >   
    //                                 <div className=" flex flex-col gap-8 text-white">
    //                                     <h1 className=" text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
    //                                         {item.title}
    //                                     </h1>
    //                                     <div className=" relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
    //                                         <Image src={item.img} alt="" fill />
    //                                     </div>
    //                                     <p className=" w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
    //                                         {item.desc}
    //                                     </p>
    //                                     <Link href={item.link} className="flex justify-end">
    //                                         <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
    //                                     </Link>
    //                                 </div>
    //                             </div>
    //                         ))
    //                     }
    //                 </div>  
    //             </motion.div>
    //         </div>

    //     </div>

    //     {/* HIRE ME */}
    //     <div className=" w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
    //         <h1 className=" text-8xl">Do you have a project?</h1>
    //         <div className=" relative">
    //             <motion.svg
    //                 animate={{ rotate: 360 }}
    //                 transition={{ duration: 8, ease: "linear", repeat: Infinity }}
    //                 viewBox="0 0 300 300"
    //                 className="w-64 h-64 md:w-[500px] md:h-[500px] "
    //             >
    //                 <defs>
    //                 <path
    //                     id="circlePath"
    //                     d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
    //                 />
    //                 </defs>
    //                 <text fill="#000">
    //                 <textPath xlinkHref="#circlePath" className="text-xl">
    //                     Front-end Developer and UI Designer
    //                 </textPath>
    //                 </text>
    //             </motion.svg>
    //             <Link
    //                 href={"/contact"}
    //                 className=" w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
    //             >
    //                 Hire Me
    //             </Link>    
    //         </div>
    //     </div>
    // </motion.div>

    <motion.div
        className=" h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%"}}
        transition={{ duration: 1}}
    >
        <div className="h-[600vh] relative" ref={ref}>
            <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
                My Work
            </div>
            <div className=" sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                <motion.div style={{ x }} className=" flex">
                    <div className=" h-screen w-screen flex items-center justify-center bg-gradient-to-r  from-purple-300 to-red-300"></div>
                    {items.map( item => (
                        <div className={ ` h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                            <div className="  flex flex-col gap-8 text-white">
                                <h1 className=" text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>
                                <div className=" relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                    <Image src={item.img} alt="" fill /> 
                                </div>
                                <p className=" w-80 md:w-96 lg:w-[500px] lg:text-lg  xl:w-[600px]">
                                    {item.desc}
                                </p>
                                <Link className=" flex justify-end" href={item.link}>
                                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                                        See Demo
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
        {/* HIRE ME */}
        <div className=" w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                    <h1 className=" text-8xl">Do you have a project?</h1>
                    <div className=" relative">
                        <motion.svg
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                            viewBox="0 0 300 300"
                            className="w-64 h-64 md:w-[500px] md:h-[500px] "
                        >
                            <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                            </defs>
                            <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                Front-end Developer and UI Designer
                            </textPath>
                            </text>
                        </motion.svg>
                        <Link
                            href={"/contact"}
                            className=" w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                        >
                            Hire Me
                        </Link>    
                    </div>
            </div>
    </motion.div>
  )
}

export default PorfolioPage