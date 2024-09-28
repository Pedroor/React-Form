import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Radio(props: InputProps) {
  const { register } = useFormContext();

  return (
    <input
      id={props.name}
      type="radio"
      className="mr-1"
      {...register(props.name)}
      {...props}
    />
  );
}
