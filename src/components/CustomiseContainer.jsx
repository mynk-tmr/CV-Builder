import ColorPicker from "./ColorPicker";
import FontPicker from "./FontPicker";
import LayoutPicker from "./LayoutPicker";

const CustomiseContainer = ({ color, layout, font, invert }) => {
  return (
    <section className="*:mb-4 *:py-3 *:px-6 *:bg-white *:border *:border-gray-300 *:rounded-md *:shadow-sm *:flex *:flex-wrap *:gap-x-6">
      <ColorPicker {...{ color, invert }} />
      <LayoutPicker {...{ layout, color }} />
      <FontPicker {...{ font }} />
    </section>
  );
};

export default CustomiseContainer;
