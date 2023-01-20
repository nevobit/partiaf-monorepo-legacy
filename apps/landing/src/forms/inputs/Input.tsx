import { useController } from "react-hook-form";
import { InputProps } from "../types";

export default function Input({
  name,
  control,
  placeholder,
  type = "text",
  errorStyle,
  className,
  ...rest
}: InputProps) {
  const { field, fieldState } = useController({ name, control });

  const isError = fieldState.error && fieldState.isTouched;

  return (
    <>
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        {...rest}
        className={className}
      />
      {isError && (
        <div className={errorStyle}>
          <p className="text-red-600 w-full">{fieldState.error?.message}</p>
        </div>
      )}
    </>
  );
}
