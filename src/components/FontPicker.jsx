import { DocumentTextIcon } from "@heroicons/react/16/solid";
import Input from "./Reusables/Input";
import useSignal from "./hooks/useSignal";

const fontConfig = [
  { name: "Assistant", fontId: "Assistant Variable" },
  { name: "Crimson Pro", fontId: "Crimson Pro Variable" },
  { name: "Hao Arima", fontId: "Arima Variable" },
];

const FontPicker = ({ font }) => {
  let input = useSignal("");
  return (
    <article>
      <header className="basis-full mb-4 text-xl text-red-900">
        Change Font <DocumentTextIcon className="w-4" />
      </header>
      <main>
        <form className="grid font-bold">
          {fontConfig.map(({ name, fontId }) => (
            <label key={name} htmlFor={fontId}>
              <input
                className="mr-2 scale-125"
                type="radio"
                name="currentFont"
                id={fontId}
                checked={font.signal === fontId}
                onChange={() => (font.signal = fontId)}
              />
              {name}
            </label>
          ))}
        </form>
        <div className="mt-2">
          <Input
            id="currentFontInput"
            name="currentFontInput"
            label="Or use any of your system font"
            placeholder="Noto Sans"
            value={input.signal}
            onChange={(e) => (input.signal = e.target.value)}
          />
          <button
            className="bg-red-700 text-white px-6 py-1 rounded-md hover:opacity-90"
            id="customfont"
            onClick={() => (font.signal = input.signal)}>
            Use Installed
          </button>
        </div>
      </main>
    </article>
  );
};

export default FontPicker;
