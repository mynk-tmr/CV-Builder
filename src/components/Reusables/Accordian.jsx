import { ArrowUpCircleIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const Header = ({ children }) => (
  <h2 className="text-xl [&_svg]:w-4 [&_svg]:mb-1">{children}</h2>
);

const Body = ({ children, addOne }) => {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);
  return (
    <>
      <article className={open ? "" : "hidden"}>{children}</article>
      <menu className="absolute top-2 right-2 opacity-70 cursor-pointer [&_li]:inline">
        <button
          onClick={addOne}
          className="hover:text-green-700 focus:text-green-700">
          <PlusCircleIcon />
        </button>
        <button
          onClick={toggle}
          className="hover:text-blue-700 focus:text-blue-700">
          <ArrowUpCircleIcon className={open ? "" : "rotate-180"} />
        </button>
      </menu>
    </>
  );
};

const Accordian = ({ children }) => (
  <article className="relative p-3 border border-gray-300 rounded-md max-w-prose shadow-sm">
    {children}
  </article>
);

Accordian.Header = Header;
Accordian.Body = Body;

export default Accordian;
