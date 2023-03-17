import React, { FocusEventHandler, ReactElement } from "react";
import InvalidFeedback from "../InvalidFeedback";
import styles from "./Textarea.module.css";

interface Props {
  value?: string | number;
  defaultValue?: string;
  name?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  maxLength?: number;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  isError?: boolean | undefined;
  invalidFeedback?: string;
}

function Textarea({
  value,
  placeholder,
  defaultValue,
  name = "",
  className,
  onChange,
  onBlur,
  isError,
  invalidFeedback,
}: Props) {
  return (
    <>
      <textarea
        name={name}
        onBlur={onBlur}
        defaultValue={defaultValue}
        onChange={onChange}
        className={`${styles.text_area} ${
          className == "none" && styles.input_none
        } ${className}`}
        value={value}
        placeholder={placeholder}
      ></textarea>
      <InvalidFeedback isError={isError}>{invalidFeedback}</InvalidFeedback>
    </>
  );
}

export default Textarea;
