import { DetailsHTMLAttributes } from "react";

export function Grid(props: DetailsHTMLAttributes<HTMLDivElement>) {
  return <div {...props} className="flex flex-col w-full h-full" />;
}
