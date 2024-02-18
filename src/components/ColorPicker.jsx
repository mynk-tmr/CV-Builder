import { PaintBrushIcon } from "@heroicons/react/16/solid";

const ColorPicker = ({ color, changeColor }) => (
  <article>
    <header className="basis-full mb-4 text-xl text-yellow-500">
      Change color <PaintBrushIcon className="w-4" />
    </header>
    <input
      type="color"
      value={color}
      onChange={changeColor}
      className="w-8 h-8 rounded-full"
    />
    <button
      className="bg-yellow-300 px-4 py-1 rounded-md hover:bg-yellow-400"
      onClick={changeColor}>
      Invert
    </button>
  </article>
);

export default ColorPicker;
