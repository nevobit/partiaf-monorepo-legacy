import { useController } from "react-hook-form";
import { TextareaProps } from "../types";

export default function Textarea({
  name,
  control,
  placeholder,
  className,
}: TextareaProps): JSX.Element {
  const { field, fieldState } = useController({ name, control });

  const isError = fieldState.error != null && fieldState.isTouched;

  return (
    <>
      <textarea
        {...field}
        placeholder={placeholder}
        className={className}
      ></textarea>
      {isError && (
        <div className="mb-3 w-full col-span-2">
          <p className="text-error w-full">{fieldState.error?.message}</p>
        </div>
      )}
    </>
  );
}
