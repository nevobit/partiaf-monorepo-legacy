import { Control } from "react-hook-form";

export interface InputProps {
    name: string;
    control: Control<any>;
    placeholder: string;
    errorStyle:string;
    type: string;
    className: string;
  }

export interface TextareaProps {
    name: string;
    control: Control<any>;
    placeholder: string;
    className: string;
  }