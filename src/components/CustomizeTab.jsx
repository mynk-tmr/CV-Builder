import Accordian from "./Accordian";
import Input from "./Input";
import {
  MdOutlineColorLens as ColIco,
  MdFilterHdr as LayoutIco,
  MdOutlineFormatColorText as FontIco,
} from "react-icons/md";

export default function CustomizeTab({
  color,
  changeColor,
  layout,
  changeLayout,
  font,
  changeFont,
}) {
  return (
    <section className="customize-tab">
      <Accordian open={true} head="Accent Color" icon={<ColIco />}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Input type="color" value={color} onChange={changeColor} />
          <output style={{ fontFamily: "monospace" }}>{color}</output>
        </div>
      </Accordian>
      <Accordian open={true} head="Layout" icon={<LayoutIco />}>
        <article className="layoutbox" style={{ "--primary-col": color }}>
          {["RL", "TB", "LR"].map((lyt) => (
            <div
              key={lyt}
              id={lyt}
              className={layout === lyt && "active"}
              onClick={changeLayout}></div>
          ))}
        </article>
      </Accordian>
      <Accordian open={true} head="Font" icon={<FontIco />}>
        <article className="fontbox">
          {["Ubuntu", "JetBrains Mono", "Noto Sans"].map((ft) => (
            <label key={ft} htmlFor={ft} style={{ fontFamily: ft }}>
              <input
                type="radio"
                name="fontoptions"
                checked={font == ft}
                value={ft}
                id={ft}
                onChange={changeFont}
              />
              {ft}
            </label>
          ))}
        </article>
      </Accordian>
    </section>
  );
}
