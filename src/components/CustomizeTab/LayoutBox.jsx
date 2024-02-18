import Accordian from "../Reusables/Accordian";
import { SparklesIcon as LayoutIco } from "@heroicons/react/16/solid";

const LayoutBox = ({ layout, changeLayout, color }) => (
  <Accordian open={true} head="Layout" icon={<LayoutIco />}>
    <article className="layoutbox" style={{ "--primary-col": color }}>
      {[`"body header"`, `"header" "body"`, `"header body"`].map((lyt) => (
        <div
          key={lyt}
          id={lyt}
          className={layout === lyt ? "active" : null}
          onClick={changeLayout}></div>
      ))}
    </article>
  </Accordian>
);

export default LayoutBox;
