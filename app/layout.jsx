"use client"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import "../styles/globals.css"

export default function Layout({ children }){

 const pathname = usePathname()

 return(
  <AnimatePresence mode="wait">
   <motion.div
    key={pathname}
    initial={{opacity:0,x:30}}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:-30}}
    transition={{duration:0.3}}
   >
    {children}
   </motion.div>
  </AnimatePresence>
 )
}
