import React, { FocusEventHandler, ReactElement } from "react";
import InvalidFeedback from "../InvalidFeedback";
import styles from "./SelectInput.module.css";

interface Props {
  value?: string | number;
  defaultValue?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  className?: string;
  onBlur?: FocusEventHandler<HTMLSelectElement>;
  isError?: boolean | undefined;
  invalidFeedback?: string;
  options?: string[];
}

function SelectInput({
  value,
  name = "",
  className,
  onChange,
  isError,
  invalidFeedback,
  options,
}: Props) {
  return (
    <>
      <select
        value={value}
        name={name}
        onChange={onChange}
        className={className}
      >
        {options?.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <InvalidFeedback isError={isError}>{invalidFeedback}</InvalidFeedback>
    </>
  );
}

export default SelectInput;
