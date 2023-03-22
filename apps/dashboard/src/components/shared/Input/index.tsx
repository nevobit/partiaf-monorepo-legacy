import React, { FocusEventHandler, ReactElement } from "react";
import styles from "./Input.module.css";
import InvalidFeedback from "../InvalidFeedback";

interface Props {
  value?: string | number;
  defaultValue?: string;
  icon?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  maxLength?: number;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  isError?: boolean | undefined;
  invalidFeedback?: string;
  pattern?: string;
  required?: boolean;
}

const Input = ({
  icon,
  value,
  placeholder,
  defaultValue,
  type = "text",
  name = "",
  maxLength,
  className,
  onChange,
  width,
  fontSize,
  fontWeight,
  onBlur,
  isError,
  invalidFeedback,
  pattern,
  required = true,
}: Props) => {
  return (
    <>
      <div className={styles.input}>
        {icon && <i className={icon}></i>}
        <input
          name={name}
          type={type}
          pattern={pattern}
          onBlur={onBlur}
          maxLength={maxLength}
          defaultValue={defaultValue}
          onChange={onChange}
          style={{ fontSize: fontSize, fontWeight: fontWeight, width: width }}
          className={`${styles.input_element} ${
            className == "none" && styles.input_none
          }`}
          value={value}
          placeholder={placeholder}
          required={required}
        />
      </div>
      <InvalidFeedback isError={isError}>{invalidFeedback}</InvalidFeedback>
    </>
  );
};

export default Input;
