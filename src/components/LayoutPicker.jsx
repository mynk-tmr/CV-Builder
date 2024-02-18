import { SparklesIcon } from "@heroicons/react/16/solid";

const LayoutPicker = ({ layout, changeLayout, color }) => (
  <article>
    <header className="basis-full mb-4 text-xl text-blue-600">
      Change layout <SparklesIcon className="w-4" />
    </header>
    <main
      style={{ "--color": "blue" }}
      className="*:w-24 *:h-24 *:border-2 *:rounded-full flex gap-2">
      <button className="layoutinfo"></button>
      <button className="layoutinfo"></button>
      <button className="layoutinfo"></button>
    </main>
  </article>
);

export default LayoutPicker;
