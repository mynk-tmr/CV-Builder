import ColorPicker from "./ColorPicker";
import FontPicker from "./FontPicker";
import LayoutPicker from "./LayoutPicker";

const CustomiseContainer = ({
  color,
  changeColor,
  layout,
  changeLayout,
  currentFont,
  changeFont,
}) => {
  return (
    <section className="*:mb-4 *:py-3 *:px-6 *:bg-white *:border *:border-gray-300 *:rounded-md *:shadow-sm *:flex *:flex-wrap *:gap-x-6">
      <ColorPicker />
      <LayoutPicker {...{ layout, changeLayout, color }} />
      <FontPicker {...{ currentFont, changeFont }} />
    </section>
  );
};

export default CustomiseContainer;
