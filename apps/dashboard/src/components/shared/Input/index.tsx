import React, { ReactElement } from 'react'
import styles from './Input.module.css'

interface Props {
  value?: string
  defaultValue?: string
  icon?: string
  name?: string
  placeholder?: string
  type?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  className?: string
  width?: string
  fontSize?: string
  fontWeight?: string
}

const Input = ({icon, value, placeholder, defaultValue, type="text", name="", className, onChange, width, fontSize, fontWeight}: Props) => {
  return (
    <div className={styles.input}>
      {icon &&<i className={icon} ></i>}
      <input name={name} type={type} defaultValue={defaultValue} onChange={onChange} style={{fontSize: fontSize, fontWeight: fontWeight, width: width }} className={`${styles.input_element} ${className == 'none' && styles.input_none}`} value={value} placeholder={placeholder} />
    </div>
  )
}

export default Input