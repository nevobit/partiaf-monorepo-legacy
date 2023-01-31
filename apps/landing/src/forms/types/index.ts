import { Control } from "react-hook-form";
import { FormValues } from "@/components/People/ContactSection";

export interface InputProps {
  name: "firstName" | "lastName" | "message" | "email";
  control: Control<FormValues>;
  placeholder: string;
  errorStyle: string;
  type: string;
  className: string;
}

export interface TextareaProps {
  name: "firstName" | "lastName" | "message" | "email";
  control: Control<FormValues>;
  placeholder: string;
  className: string;
}
