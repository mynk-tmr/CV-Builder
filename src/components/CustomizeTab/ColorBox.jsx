import Accordian from "../Reusables/Accordian";
import { PaintBrushIcon as ColIco } from "@heroicons/react/16/solid";

const ColorBox = ({ color, changeColor }) => (
  <Accordian open={true} head="Accent Color" icon={<ColIco />}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <input type="color" value={color} onChange={changeColor} />
      <button style={{ padding: "0.2rem 1rem" }} onClick={changeColor}>
        Invert
      </button>
    </div>
  </Accordian>
);

export default ColorBox;
