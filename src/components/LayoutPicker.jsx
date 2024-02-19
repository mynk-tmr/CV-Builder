import { SparklesIcon } from "@heroicons/react/16/solid";

const LayoutPicker = ({ layout, color }) => (
  <article>
    <header className="basis-full mb-4 text-xl text-blue-900">
      Change layout <SparklesIcon className="w-4" />
    </header>
    <main
      style={{ "--color": color.signal }}
      className="*:w-24 *:h-24 *:border-2 *:rounded-full flex gap-2">
      {["--rtl", "--tb", "--ltr"].map((dim, i) => (
        <button
          key={i}
          className={`layoutinfo ${
            layout.signal === dim ? "border-black" : ""
          }`}
          onClick={() => (layout.signal = dim)}></button>
      ))}
    </main>
  </article>
);

export default LayoutPicker;
