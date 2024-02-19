import { ArrowUpCircleIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const Header = ({ children }) => (
  <h2 className="mb-3 text-xl font-bold [&_svg]:w-4 [&_svg]:mb-1">
    {children}
  </h2>
);

const MenuBar = ({ isCopyable, add, toggle, open }) => (
  <menu className="absolute top-2 right-2 opacity-70 cursor-pointer [&_li]:inline">
    {isCopyable && (
      <button
        type="button"
        onClick={add}
        className="hover:text-green-700 focus:text-green-700">
        <PlusCircleIcon />
      </button>
    )}
    <button
      type="button"
      onClick={toggle}
      className="hover:text-blue-700 focus:text-blue-700">
      <ArrowUpCircleIcon className={open ? "" : "rotate-180"} />
    </button>
  </menu>
);

const Body = ({ children, destroy, isDeletable, ...rest }) => {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);
  const props = { open, toggle, ...rest };
  return (
    <>
      <article className={open ? "" : "hidden"}>{children}</article>
      {isDeletable && (
        <div className="flex justify-end">
          <button
            onClick={destroy}
            type="button"
            className="bg-red-300 px-4 py-1 rounded-md mt-2 hover:bg-red-400 active:bg-red-400">
            Delete
          </button>
        </div>
      )}
      <MenuBar {...props} />
    </>
  );
};

const Accordian = ({ children }) => (
  <article
    className={`relative p-3 bg-white border border-gray-300 rounded-md max-w-prose shadow-sm`}>
    {children}
  </article>
);

Accordian.Header = Header;
Accordian.Body = Body;

export default Accordian;
