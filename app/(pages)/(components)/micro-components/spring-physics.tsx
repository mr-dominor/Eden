"use client"
import {motion} from "framer-motion";

export const SpringUp = ({children}:{children:React.ReactNode}) =>{
    return(
        <div>
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 50,
            }}
            >
                {children}
            </motion.div>
        </div>
    )
}
export const SpringDown = ({children}:{children:React.ReactNode}) =>{
    return(
        <div>
            <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 50,
            }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export const SpringLeft = ({children}:{children:React.ReactNode}) =>{
    return(
        <div>
            <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 50,
            }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export const SpringRight = ({children}:{children:React.ReactNode}) =>{
    return(
        <div>
            <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 50,
              delay:0.1,
            }}
            >
                {children}
            </motion.div>
        </div>
    )
}