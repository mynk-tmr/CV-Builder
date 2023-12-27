import Accordian from "../Reusables/Accordian";
import { MdOutlineFormatColorText as FontIco } from "react-icons/md";

export default function FontBox({ font, changeFont }) {
  return (
    <Accordian open={true} head="Font" icon={<FontIco />}>
      <article className="fontbox">
        {["Ubuntu", "SF Pro Text", "Yrsa"].map((ft) => (
          <label key={ft} htmlFor={ft} style={{ fontFamily: ft }}>
            <input
              type="radio"
              name="fontoptions"
              checked={font == ft}
              id={ft}
              value={ft}
              onChange={changeFont}
            />
            {ft}
          </label>
        ))}
        <br />
        <input
          placeholder="Type Custom font"
          onChange={(e) => {
            document.querySelector("#customfont").value = e.target.value;
          }}
        />
        <button
          id="customfont"
          style={{ padding: "0.3rem" }}
          onClick={changeFont}>
          Get from Device
        </button>
      </article>
    </Accordian>
  );
}
