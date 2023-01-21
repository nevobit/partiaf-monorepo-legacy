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
}: InputProps): JSX.Element {
  const { field, fieldState } = useController({ name, control });

  const isError = fieldState.error != null && fieldState.isTouched;

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
          <p className="text-error w-full">{fieldState.error?.message}</p>
        </div>
      )}
    </>
  );
}
