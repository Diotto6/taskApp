import { useRouter } from "next/router";
import { DetailsHTMLAttributes } from "react";
import Button from "./Button";

interface GridMainProps extends DetailsHTMLAttributes<HTMLDivElement> {
  textFirst: string;
  textMain: string;
  title: string;
  paragraph: string;
}

export function GridMain(props: GridMainProps) {
  const router = useRouter();
  return (
    <>
      <div {...props} className="container mx-auto grid grid-cols-1 pt-6 gap-8">
        <div className="columns-auto flex flex-col items-center">
          <h1 className="animation:shine transform hover:scale-125 font-mono font-semibold text-center pt-16     text-3xl leading-6 text-gray-500 ">
            {props.title}
          </h1>
          <h1 className=" font-mono font-semibold text-center p-7 text-3xl leading-6 text-gray-900">
            {props.textFirst}
            <br />
            <br />
            {props.textMain}
          </h1>
          <Button
            color="error"
            onClick={() =>
              router.push({
                pathname: "/startAccount",
              })
            }
          >
            Comece grátis
          </Button>
        </div>
        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full">
          <div className="w-full sm:w-1/2 h-64 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800">
            <p className=" font-mono font-normal text-right p-6 text-2xl leading-6 text-gray-900">
              {props.paragraph}
            </p>
          </div>

          <div className="w-full sm:w-1/2 h-64 shadow bg-white dark:bg-gray-800"></div>
        </div>
      </div>
    </>
  );
}
