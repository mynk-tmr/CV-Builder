import { PaintBrushIcon } from "@heroicons/react/16/solid";

const ColorPicker = ({ color, invert }) => (
  <article>
    <header className="basis-full mb-4 text-xl text-orange-600">
      Change color <PaintBrushIcon className="w-4" />
    </header>
    <input
      type="color"
      value={color.signal}
      onChange={(e) => (color.signal = e.target.value)}
      className="w-8 h-8 rounded-full"
    />
    <button
      className="bg-yellow-300 px-4 py-1 rounded-md hover:bg-yellow-400"
      onClick={() => (invert.signal = !invert.signal)}>
      Invert
    </button>
  </article>
);

export default ColorPicker;
