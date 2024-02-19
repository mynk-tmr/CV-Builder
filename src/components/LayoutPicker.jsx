import { SparklesIcon } from "@heroicons/react/16/solid";

const LayoutPicker = ({ layout, changeLayout, color }) => (
  <article>
    <header className="basis-full mb-4 text-xl text-blue-900">
      Change layout <SparklesIcon className="w-4" />
    </header>
    <main
      style={{ "--color": color ?? "blue" }}
      className="*:w-24 *:h-24 *:border-2 *:rounded-full flex gap-2">
      {["--rtl", "--tb", "--ltr"].map((dim, i) => (
        <button
          key={i}
          value={dim}
          className={`layoutinfo ${layout === dim ? "border-black" : ""}`}
          onClick={changeLayout}></button>
      ))}
    </main>
  </article>
);

export default LayoutPicker;
