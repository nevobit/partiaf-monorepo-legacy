import React, { MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  color?: string;
  backgroundColor?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
}

const Button = ({
  className,
  children,
  backgroundColor,
  color,
  type,
  onClick,
  disabled,
}: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      style={{ backgroundColor: backgroundColor, color: color }}
      className={`${styles.button} ${styles[`${className}`]} `}
    >
      {children}
    </button>
  );
};

export default Button;
