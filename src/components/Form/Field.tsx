import { HTMLAttributes } from "react";

export function Field(props: HTMLAttributes<HTMLDivElement>) {
  return <div className="flex flex-col gap-1" {...props} />;
}
