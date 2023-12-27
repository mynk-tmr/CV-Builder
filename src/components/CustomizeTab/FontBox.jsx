import Accordian from "../Accordian";
import { MdOutlineFormatColorText as FontIco } from "react-icons/md";

const FontBox = ({ font, changeFont }) => (
  <Accordian open={true} head="Font" icon={<FontIco />}>
    <article className="fontbox">
      {["Ubuntu", "Courier New", "Noto Sans"].map((ft) => (
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
);

export default FontBox;
