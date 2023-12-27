import ColorBox from "./ColorBox";
import LayoutBox from "./LayoutBox";
import FontBox from "./FontBox";

const CustomizeTab = ({ color, changeColor, layout, changeLayout, font, changeFont}) => (
  <section className="customize-tab">
    <ColorBox {...{ color, changeColor }} />
    <LayoutBox {...{ layout, changeLayout, color }} />
    <FontBox {...{ font, changeFont }} />
  </section>
);

export default CustomizeTab;
