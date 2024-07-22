"use client"
import React, { HTMLProps } from "react"
import { motion } from "framer-motion"

interface PropsI extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode
  duration?: number
  delay?: number
  initialY?: number
}

export const BaseFramerAnimation = ({
  children,
  duration,
  delay,
  initialY,
  ...props
}: PropsI) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY || 200, zIndex: -1 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration || 1, delay: delay || 0 }}
      className={props.className}
      id={props.id}
      style={props.style}
      ref={props.ref}
    >
      {children}
    </motion.div>
  )
}

export const ScrollTriggeredAnimation = ({
  children,
  duration,
  delay,
  initialY,
  ...props
}: PropsI) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY || 200, zIndex: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: duration || 1, delay: delay || 0 }}
      className={props.className}
      id={props.id}
      style={props.style}
      ref={props.ref}
    >
      {children}
    </motion.div>
  )
}
