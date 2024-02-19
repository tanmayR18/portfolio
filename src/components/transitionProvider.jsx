"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";


const TansitionProvider = ({children}) => {
    const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
        <div 
        key={pathName}
        className="bg-gradient-to-b from-blue-100 to-red-100">

        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-4xl lg:text-8xl cursor-not-allowed w-fit h-fit z-40"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, y: [0,0,0,400]}}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1) === "" ? "home" :  pathName.substring(1)}
        </motion.div>
        
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

            <div>
                <Navbar />
            </div>

            <div className=" z-[60]">
                {children}
            </div>
            </div>
    </AnimatePresence>
  )
}

export default TansitionProvider