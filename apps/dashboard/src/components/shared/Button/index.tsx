import React, { MouseEventHandler } from 'react'
import styles from './Button.module.css'

interface Props {
    children: React.ReactNode
    className?: string
    color?: string
    backgroundColor?: string
    onClick?: MouseEventHandler
}

const Button = ({className, children,backgroundColor, color, onClick}: Props) => {
  return (
    <button onClick={onClick} style={{backgroundColor: backgroundColor, color: color}} className={`${styles.button} ${styles[`${className}`]} `} >{children}</button>
  )
}

export default Button