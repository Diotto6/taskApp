import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "success" | "error";
}

export function Button(props: ButtonProps) {
  return (
    <>
      {props.color === "error" ? (
        <button
          {...props}
          className={`rounded-lg flex space-x-2 p-2  h-10 font-mono text-sm leading-3 text-gray-900 bg-white border border-gray-900 focus:outline-none focus:bg-gray-500 hover:bg-gray-200 duration-150 justify-center items-center`}
        />
      ) : props.color === "success" ? (
        <button
          {...props}
          className={`rounded-lg flex space-x-2 p-2   h-10 font-mono text-sm leading-3 text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:bg-gray-700 hover:bg-gray-700 duration-150 justify-center items-center`}
        />
      ) : null}
    </>
  );
}

export default Button;
