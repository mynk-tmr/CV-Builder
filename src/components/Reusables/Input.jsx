import { forwardRef } from "react";

const Input = forwardRef(({ id, label, ...props }, ref) => (
  <div className="grid gap-1 mb-2">
    <label className="font-bold" htmlFor={id}>
      {label}
      <sup className="ml-1 text-red-500">*</sup>
    </label>
    <input
      id={id}
      ref={ref}
      {...props}
      className="px-3 py-2 border border-gray-400 rounded-md  outline-cyan-600"
    />
  </div>
));

export default Input;
