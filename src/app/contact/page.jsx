"use client"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const ContactPage = () => {
    const [ success, setSuccess ] = useState(false)
    const [ error, setError ] = useState(false)
    const text = "Say Hello"
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        setError(false)
        setSuccess(false)

        console.log(
            "Here are the kyse",
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            process.env.NEXT_PUBLIC_PUBLIC_ID
        )

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_PUBLIC_ID
        )
        .then(
            () => {
                setSuccess(true);
                form.current.reset()
            },
            () => {
                setError(true)
            }
        )
    }
  return (
    <motion.div
        className=" h-full"
        initial={{ y: "-200vh"}}
        animate={{ y: "0%"}}
        transition={{ duration: 1}}
    >
        <div className="h-[calc(100vh-4rem)] flex flex-col gap-y-10 lg:flex-row w-10/12 mx-auto items-center">
            {/* TEXT CONTAINER */}
            <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl md:text-6xl">
                <div>
                    {text.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.1,
                        }}
                    >
                        {letter}
                    </motion.span>
                    ))}
                    😊
                </div>
            </div>
            {/* FORM CONTAINER */}
            <form
            onSubmit={sendEmail}
            ref={form}
            className="h-auto lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-4 md:p-16 lg:p-24"
            >
            <span>Dear Tammay Rane,</span>
            <textarea
                rows={6}
                className="bg-transparent border-b-2 border-b-black outline-none resize-none"
                name="user_message"
            />
            <span>My mail address is:</span>
            <input
                name="user_email"
                type="text"
                className="bg-transparent border-b-2 border-b-black outline-none"
            />
            <span>Regards</span>
            <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
                Send
            </button>
            {success && (
                <span className="text-green-600 font-semibold">
                Your message has been sent successfully!
                </span>
            )}
            {error && (
                <span className="text-red-600 font-semibold">
                Something went wrong!
                </span>
            )}
            </form>
        </div>
    </motion.div>
  )
}

export default ContactPage