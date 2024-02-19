import { forwardRef } from "react";

const Input = forwardRef(({ id, label, ...props }, ref) => {
  let Tag = id.includes("description") ? "textarea" : "input";
  return (
    <div className="grid gap-1 mb-2">
      <label className="font-bold" htmlFor={id}>
        {label}
      </label>
      <Tag
        id={id}
        ref={ref}
        {...props}
        rows={5}
        className="px-3 py-2 border border-gray-400 rounded-md  outline-cyan-600"
      />
    </div>
  );
});

export default Input;
