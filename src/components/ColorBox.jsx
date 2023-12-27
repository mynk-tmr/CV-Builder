import Accordian from "./Accordian";
import { MdOutlineColorLens as ColIco } from "react-icons/md";

const ColorBox = ({ color, changeColor }) => (
  <Accordian open={true} head="Accent Color" icon={<ColIco />}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <input type="color" value={color} onChange={changeColor} />
      <output style={{ fontFamily: "monospace" }}>{color}</output>
    </div>
  </Accordian>
);

export default ColorBox;
