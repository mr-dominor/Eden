'use client'
import { motion } from 'framer-motion'

export  function MotionDiv({children}:{children:React.ReactNode}) {
  return (
    <motion.div
      className="w-full bg-maroon text-black"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  )
};

export  function MotionDivDown({children}:{children:React.ReactNode}) {
  return (
    <motion.div
      className="w-full bg-maroon text-black"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  )
};

export  function MotionDivLeft({children}:{children:React.ReactNode}) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  )
};

export  function MotionDivRight({children}:{children:React.ReactNode}) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  )
};
